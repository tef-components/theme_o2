module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      default: {
        files: {
          'css/components.o2.css': 'less/theme.less'
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
          '../icons/fonts/icons.css',
          'css/components.o2.css',
        ],
        dest: 'css/components.o2.css'
      }
    },
    
    copy: {
      eot: {
        src: '../icons/fonts/icons.eot',
        dest: 'css/icons.eot',
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/components.o2.min.css': 'css/components.o2.css'
        }
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
        command: 'git add -A'
      },

      // push to gh-pages branch
      pages: {
        command: [
          'git checkout gh-pages',
          'git pull origin master',
          'git push origin gh-pages',
          'git checkout master'
        ].join('&&')
      },

      // adds prompted commit message
      message: {
        command: function() {
          var message = grunt.config('gitmessage');
          return "git commit -am '" + message + "'";
        }
      }
    },

    prompt: {
      commit: {
        options: {
          questions: [
            {
              config: 'gitmessage',
              type: 'input',
              message: 'Commit Message'
            }
          ]
        }
      }
    },

    watch: {
      styles: {
        files: ['../**/*.less'],
        tasks: ['less','concat','autoprefixer','cssmin'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'copy',
    'less',
    'concat',
    'autoprefixer',
    'cssmin',
    'watch'
  ]);

  grunt.registerTask('release', [
    'copy',
    'less',
    'autoprefixer',
    'concat',
    'cssmin',
    'exec:add',
    'prompt',
    'exec:message',
    'bump',
    'exec:pages'
  ]);
};
