sap.ui.define(
  ["flo/codes/template/MockServer/localService/mockserver"],
  function (mockserver) {
    "use strict";

    // Initialize the mock server
    mockserver.init();

    // Initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
  }
);
