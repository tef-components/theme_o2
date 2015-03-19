module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        files: {
          'css/components.o2.css': 'less/theme.less',
          'templates/variables.css': 'templates/variables.less',
          'css/components/buttons.css': 'less/buttons.less',
          'css/components/button-groups.css': 'less/button-groups.less',
          'css/components/dropdowns.css': 'less/dropdowns.less',
          'css/components/inputs.css': 'less/inputs.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },

    concat: {
      default: {
       src: [
          '../icons/icons.css',
          'css/components.o2.css',
        ],
        dest: 'css/components.o2.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/components.o2.min.css': 'css/components.o2.css',
          'css/components/buttons.min.css': 'css/components/buttons.css',
          'css/components/button-groups.min.css': 'css/components/button-groups.css',
          'css/components/dropdowns.min.css': 'css/components/dropdowns.css',
          'css/components/inputs.min.css': 'css/components/inputs.css'
        }
      }
    },

    // reformating  variables.less to create a core-styles compliant file
    // to be used in Web components
    replace: {
      preless: {
        options: {
          patterns: [
            { match: '    @', replacement: '.CoreStyle-' },
            { match: ': ', replacement: ' { fake-property: ' },
            { match: ';', replacement: '; }' }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['less/variables.less'], dest: 'templates/'
          }
        ]
      },

      import: {
        options: {
          patterns: [
            {
              match: '// Variables',
              replacement: '@import "../less/variables.less";'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['templates/variables.less'], dest: 'templates/'
          }
        ]
      },

      final: {
        options: {
          patterns: [
            { match: '.CoreStyle-', replacement: 'CoreStyle.g.' },
            { match: '{', replacement: '=' },
            { match: 'fake-property: ', replacement: '"' },
            { match: ';', replacement: '";' },
            { match: '}', replacement: '' },
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true, flatten: true,
            src: ['templates/variables.css'], dest: 'templates/'
          }
        ]
      }
    },

    // create theme*.js to to be used in Web Components
    includes: {
      files: {
        cwd: 'templates/',
        src: '**/*.js',
        dest: ''
      }
    },

    bump: {
      // upgrade release and push to master
      options : {
        files: ['bower.json'],
        commitFiles: ["-a"],
        pushTo: 'origin'
      }
    },

    exec: {
      // add new files before commiting
      add: {
        command: 'git add .'
      },

      // push to gh-pages branch
      pages: {
        command: [
          'git checkout gh-pages',
          'git pull origin master',
          'git push origin gh-pages',
          'git checkout master'
        ].join('&&')
      }
    },

    watch: {
      styles: {
        files: ['../**/less/*.less'],
        tasks: ['less', 'concat'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'less',
    'concat',
    'watch'
  ]);

  grunt.registerTask('webcomponents', [
    'replace:preless',
    'replace:import',
    'less',
    'replace:final',
    'autoprefixer',
    'concat',
    'cssmin',
    'includes'
  ]);

  grunt.registerTask('release', [
    'replace:preless',
    'replace:import',
    'less',
    'replace:final',
    'autoprefixer',
    'concat',
    'cssmin',
    'includes',
    'exec:add',
    'bump',
    'exec:pages'
  ]);
};
