sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "hanareadiness/helper/refreshTimeHelper"
], function (Controller, refreshTimeHelper) {
    "use strict";

    return Controller.extend("hanareadiness.controller.Dashboard", {

        onInit: function () {
            refreshTimeHelper.updateTime(this.getView());
        },

        onRefresh: function () {
            console.log("Refresh clicked");
            refreshTimeHelper.refreshScreen(this.getView());
        },

        onATCResultsPress: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("ATCResults");

        }

    });
});