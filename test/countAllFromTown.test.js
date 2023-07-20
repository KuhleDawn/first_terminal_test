import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

describe('The countAllFromTown function', function()
{
    //fromStellies should contains
    it('should return the number of registration numbers', function()
    {
        assert.equal(fromStellies, 3)
    }
    )
    
    //fromStellies should contains
    it('should return the number of registration numbers', function()
    {
        assert.equal(fromKuilsriver, 1)
    })
})