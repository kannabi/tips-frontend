/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'tips-and-chips',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.protocol = 'http';
    ENV.host = '178.62.2.36:8080';
  }

  if (environment === 'staging') {
    ENV.protocol = 'http';
    ENV.host = '178.62.2.36:8080';
  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'root',
    routeIfAlreadyAuthenticated: 'root',
  };

  ENV['ember-simple-auth-token'] = {
    authorizationHeaderName: 'Authorization',
    authorizationPrefix: ' ',
    tokenPropertyName: 'token',
    serverTokenEndpoint: `${ENV.protocol}://${ENV.host}/auth_token`
  };


  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
