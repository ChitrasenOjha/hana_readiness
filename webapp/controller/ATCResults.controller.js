sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("hanareadiness.controller.ATCResults", {

        onInit: function () {

            var oData = {
                ATCResults: [
                    {
                        ReportName: "ZFI_POSTING",
                        ObjectType: "Program",
                        ErrorMessage: "SELECT * used. Use specific field list.",
                        Priority: "1",
                        Category: "Database Access",
                        LineNumber: "45",
                        Status: "Implemented"
                    },
                    {
                        ReportName: "ZSD_SALES_REPORT",
                        ObjectType: "Program",
                        ErrorMessage: "Direct access to table BSEG is not allowed.",
                        Priority: "1",
                        Category: "Database Access",
                        LineNumber: "78",
                        Status: "Generated"
                    },
                    {
                        ReportName: "ZMM_MATERIAL_CHECK",
                        ObjectType: "Program",
                        ErrorMessage: "Obsolete Open SQL syntax.",
                        Priority: "2",
                        Category: "Obsolete Syntax",
                        LineNumber: "120",
                        Status: "Pending Review"
                    },
                    {
                        ReportName: "ZCO_PRICE_UPDATE",
                        ObjectType: "Function Module",
                        ErrorMessage: "SELECT SINGLE without WHERE clause.",
                        Priority: "2",
                        Category: "SELECT * Usage",
                        LineNumber: "33",
                        Status: "Generated"
                    },
                    {
                        ReportName: "ZGL_ACCOUNTING",
                        ObjectType: "Program",
                        ErrorMessage: "Implicit conversion in WHERE condition.",
                        Priority: "2",
                        Category: "Implicit Conversions",
                        LineNumber: "88",
                        Status: "Pending Review"
                    }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

        },

        onOpenFinding: function () {
            sap.m.MessageToast.show("Open Finding");
        },

        onAISuggestion: function () {
            sap.m.MessageToast.show("AI Suggestion");
        },

        onNavBack: function () {
            history.go(-1);
        }

    });
});