'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://dev.dywos.com/api'
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

})
.constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/)
.constant('LOCALES', {
    locales: {
        'es_AR': 'Español'
    },
    'preferredLocale': 'es_AR'
});
