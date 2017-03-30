'use-strict';
describe('Selectors', function() {
  beforeEach(function() {
    loadFixtures('./index.html');
  });

  it('#h1Selector should select all h1\'s', function() {
    expect(h1Selector().length).toBe(1);
    expect(h1Selector()[0].innerHTML).toEqual("***All About Me***");

  });

  it('#liInOlSelector should select all li elements nested in ol\'s', function() {
    expect(liInOlSelector().length).toBe(3);
    expect(liInOlSelector()[0].innerHTML).toEqual("N'Sync");
    expect(liInOlSelector()[1].innerHTML).toEqual("Limp Bizkit");
    expect(liInOlSelector()[2].innerHTML).toEqual("BSB");
  });

  it('#linkSelector should select all links that are inside of the element with an id of box4 and a class of box5.', function() {
    expect(linkSelector().length).toBe(1);
    expect(linkSelector()[0].innerHTML).toEqual("Click here to find a good cat name");
  });

  it('#imageSelector should an image that has the alt text equal to "cat sleeping"', function() {
    expect(imageSelector().length).toBe(1);
    expect(imageSelector().attr("src")).toEqual("img/sleeping-cat.jpg")
  });

  it('#checkboxInputSelector should select all checkbox inputs', function() {

    expect(checkboxInputSelector().length).toBe(2);
    expect(checkboxInputSelector()[0].value).toEqual("Cats");
    expect(checkboxInputSelector()[1].value).toEqual("Dogs");
  });

});
