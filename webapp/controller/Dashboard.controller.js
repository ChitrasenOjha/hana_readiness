sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "hanareadiness/helper/refreshTimeHelper",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, refreshTimeHelper, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("hanareadiness.controller.Dashboard", {

        onInit: function () {
            refreshTimeHelper.updateTime(this.getView());

        },

        onRunScan: function () {

            var oModel = this.getOwnerComponent().getModel();

            var aFilters = [

                new Filter(
                    "Package",
                    FilterOperator.EQ,
                    "ZPRAKHAR"
                ),

                new Filter(
                    "Variant",
                    FilterOperator.EQ,
                    "ZDEFAULT"
                )

            ];
            console.log(oModel);
            console.log("Before read");

            oModel.read("/ATCResultSet", {

                filters: aFilters,

                success: function (oData) {

                    console.log("SUCCESS");
                    console.log(oData.results);

                },

                error: function (oError) {

                    console.log("ERROR");
                    console.log(oError);

                }

            });
            console.log("After read");

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