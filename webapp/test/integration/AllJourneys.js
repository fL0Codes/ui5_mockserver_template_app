sap.ui.define(
  [
    "sap/ui/test/Opa5",
    "flo/codes/template/MockServer/test/integration/arrangements/Startup",
    "flo/codes/template/MockServer/test/integration/BasicJourney",
  ],
  function (Opa5, Startup) {
    "use strict";

    Opa5.extendConfig({
      arrangements: new Startup(),
      pollingInterval: 1,
    });
  }
);
