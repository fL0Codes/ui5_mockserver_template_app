sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("de.mindsquare.hr.ManagerReporting.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "de.mindsquare.hr.ManagerReporting",
          async: true,
          manifest: true
        }
      });
    }

  });
});
