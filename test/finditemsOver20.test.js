import assert from "assert";
import findItemsOver20 from "../finditemsOver20.js";

describe('The findItemsOver20 function', function(){
    it('This should return the item list1 with over 20', function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('This should return the item list2 with over 20', function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('This should return the item list3 with over 20', function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
})