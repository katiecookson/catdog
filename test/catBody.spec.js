//import { describe, it } from 'mocha';
import { catBody } from '../cats/catBody';
var assert = require('assert');

describe('CatBody', function () {
    it('can set bodyType', async function () {
      const expectedBodyType = 'fat';
      const body = new catBody();
      body.setBodyType(expectedBodyType);

      assert.equal(body.bodyType, expectedBodyType);
    });
});
