/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["flo/codes/template/MockServer/test/integration/AllJourneys"],
    function () {
      QUnit.start();
    }
  );
});
