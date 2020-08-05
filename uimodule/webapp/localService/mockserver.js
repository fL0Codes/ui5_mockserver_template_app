sap.ui.define(["sap/ui/core/util/MockServer"], function (MockServer) {
  "use strict";

  return {
    /**
     * Initializes the mock server.
     * You can configure the delay with the URL parameter "serverDelay".
     * The local mock data in this folder is returned instead of the real data for testing.
     * @public
     */
    init: function () {
      // Create new MockServer instance
      // Set the rootUri to be mocked - here we set the rootUri of the main OData service in manifest.json
      var oMockServer = new MockServer({
        rootUri: "/",
      });

      // Simulate against the metadata and mock data
      oMockServer.simulate("../localService/metadata.xml", {
        sMockdataBaseUrl: "../localService/mockdata",
        bGenerateMissingMockData: true,
      });

      // start
      oMockServer.start();
    },
  };
});
