describe("Legendary Items", function() {
  var legendaryItems;

  beforeEach(function() {
   legendaryItems = new LegendaryItems();
 });



  it("'Aged Brie' should return true", function()
  {
    item = new LegendaryItems("Sulfuras, Hand of Ragnaros", 0, 0);
    expect(legendaryItems.isItLegendary(item)).toEqual(true)
  })





});
