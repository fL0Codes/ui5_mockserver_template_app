sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("flo.codes.template.MockServer.controller.Main", {
    onInit: function () {
      const myVar = 0;
    },

    fnReadMaterials: function () {
      const oModel = this.getView().getModel();

      oModel.read("/MaterialsSet", {
        success: () => {
          alert("success");
        },
      });
    },
  });
});
