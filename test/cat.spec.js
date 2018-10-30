//import { describe, it } from 'mocha';
import { Cat } from '../cats/cat';
import { CatMouth } from '../cats/catMouth';
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

    it('can set tail', async function () {
        const typeOfTail= 'fluffy';
        const cat = new Cat();
        cat.setTail(typeOfTail);

        assert.equal(cat.tail, typeOfTail);
    });

    it('can set mouth', async function () {
        const numberOfTeeth = 2;
        const cat = new Cat();
        const catMouth = new CatMouth();
        catMouth.setNumberOfTeeth(numberOfTeeth);
        cat.setMouth(catMouth);

        assert.equal(cat.mouth.numberOfTeeth, numberOfTeeth);
    });
});
