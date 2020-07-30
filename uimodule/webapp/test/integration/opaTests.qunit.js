/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "de/mindsquare/hr/ManagerReporting/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
