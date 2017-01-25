describe("Special Items", function() {
  // var specialItems;

 //  beforeEach(function() {
 //   specialItems = new SpecialItems();
 // });



  it("'Aged Brie' should return true", function()
  {
    item = new SpecialItems("Aged Brie", 0, 0);
    expect(isItSpecial(item)).toEqual(true)
  })

});
