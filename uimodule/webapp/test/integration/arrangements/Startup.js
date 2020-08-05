sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
  "use strict";

  return Opa5.extend(
    "flo.codes.template.MockServer.test.integration.arrangements.Startup",
    {
      iStartMyApp: function () {
        this.iStartMyUIComponent({
          componentConfig: {
            name: "flo.codes.template.MockServer",
            async: true,
            manifest: true,
          },
        });
      },
    }
  );
});
