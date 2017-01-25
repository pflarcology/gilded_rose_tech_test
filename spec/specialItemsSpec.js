describe("Special Items", function() {
  var specialItems;

  beforeEach(function() {
   specialItems = new SpecialItems();
 });



  it("'Aged Brie' should return true", function()
  {
    item = new SpecialItems("Aged Brie", 0, 0);
    expect(specialItems.isItSpecial(item)).toEqual(true)
  })

  it("'Backstage passes' should return true", function() {
    item = new SpecialItems("Backstage passes to a TAFKAL80ETC concert", 0, 0);
    expect(specialItems.isItSpecial(item)).toEqual(true)
  })



});
