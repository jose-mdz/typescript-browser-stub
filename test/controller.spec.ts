
import 'mocha';
import {assert} from 'chai';
import {View} from "../src/View";
import {ViewController} from "../src/ViewController";

describe('Controller', () => {

    it('Should contain a view', function () {

        const e = document.createElement('div');

        const controller = new ViewController(new View(e));

        assert.equal(controller.view.element, e);

    })

});