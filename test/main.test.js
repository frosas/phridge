"use strict";

var chai = require("chai"),
    expect = chai.expect,
    config = require("../lib/config"),
    create = require("../lib/create"),
    disposeAll = require("../lib/disposeAll"),
    phridge = require("../lib/main.js");

chai.config.includeStack = true;

describe("phridge", function () {

    describe(".config", function () {

        it("should be the config-module", function () {
            expect(phridge.config).to.equal(config);
        });

    });

    describe(".create", function () {

        it("should be the create-module", function () {
            expect(phridge.create).to.equal(create);
        });

    });

    describe(".disposeAll", function () {

        it("should be the exitAll-module", function () {
            expect(phridge.disposeAll).to.equal(disposeAll);
        });

    });

});