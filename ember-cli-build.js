/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'vendor/scss'
      ]
    }
  });

  app.import('vendor/js/autosize.min.js');
  app.import('vendor/js/popper.min.js');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/draggable.bundle.legacy.js');
  app.import('vendor/js/draggable.bundle.legacy.js');
  app.import('vendor/js/dropzone.min.js');
  app.import('vendor/js/list.min.js');
  app.import('vendor/js/prism.js');
  app.import('vendor/js/swap-animation.js');
  app.import('vendor/js/theme.js');


  return app.toTree();
};
