//import { describe, it } from 'mocha';
import { Cat } from '../cats/cat';
var assert = require('assert');

describe('Cat', function () {
    it('can set body', async function () {
      const expectedBodyType = 'fat';
      const cat = new Cat();
        cat.setBody(expectedBodyType);

      assert.equal(cat.body, expectedBodyType);
    });

    it('can set legs', async function () {
        const expectedNumberOfLegs= '4';
        const cat = new Cat();
        cat.setNumberOfLegs(expectedNumberOfLegs);

        assert.equal(cat.numberOfLegs, expectedNumberOfLegs);
    });
});
