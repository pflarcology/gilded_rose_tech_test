describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("'Aged Brie' items should increase in quality", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(2)
  });

});
