/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["hanareadiness/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
