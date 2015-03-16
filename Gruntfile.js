module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        options: {
          optimization: 2
        },
        files: {
          'css/components.o2.css': 'less/theme.less',
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

    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: '@',
              replacement: 'CoreStyle.g.'
            },
            {
              match: ': ',
              replacement: ' = "'
            },
            {
              match: ';',
              replacement: '";'
            }
          ],
          usePrefix: false
        },
        files: [
          {expand: true, flatten: true, src: ['less/variables.less'], dest: 'templates/'}
        ]
      }
    },

    includes: {
      files: {
        cwd: 'templates/',
        src: '**/*.js',
        dest: ''
      }
    }
  });

  grunt.registerTask('default', [
    'less',
    'autoprefixer',
    'concat',
    'cssmin',
    'replace',
    'includes'
  ]);
};
