//jshint strict: false
module.exports = function(config) {
  config.set({

        basePath: './app',

        files: [
            'modules.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/moment/min/moment.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/lodash/dist/lodash.core.min.js',
            'bower_components/lodash/dist/lodash.fp.min.js',
            'bower_components/lodash/dist/lodash.min.js',
            'bower_components/restangular/dist/restangular.min.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-input-masks/angular-input-masks-dependencies.js',
            'bower_components/angular-input-masks/angular-input-masks.br.js',
            'components/directives/directives.js',
            'components/directives/popover/tooltip.js',
            'components/directives/popover/popover.js',
            'components/directives/popover/helpers/*.js',
            'components/directives/alert/*.js',
            'components/filters/filters.js',
            'components/filters/moment/moment.js',
            'components/filters/treusted/treusted.js',
            'components/services/services.js',
            'components/services/contact/contactService.js',
            'components/services/notification/notification.js',
            'app.js',
            'contacts/*.js',
            'info/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],
        
        reporters: ['mocha'],
      
        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-mocha-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
      
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        }

  });
};
