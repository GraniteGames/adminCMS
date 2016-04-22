Beer = new Mongo.Collection("beers");

Template.beerEdit.helpers({
  beers(){
    return Beer.find();
  }
});
Template.beerEdit.events({
  'click .beerAdd'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log("submit clicked")
    // Get value from form element
    const target = event.target;
    console.log("target Grabbed")
    const nameBeer = target.inputBeerName.value;
    console.log("name grabbed")
    const styleBeer = target.beerStyle.value;
    const abvBeer = target.beerABV.value;
    const descBeer = target.beerDesc.value;
    const bottleBeer = target.bottleCheck.checked;
    const draughtBeer = target.draughtCheck.checked;

    console.log(nameBeer);

    // Insert a task into the collection
    Tasks.insert({
      name: nameBeer,
      style: styleBeer,
      ABV: abvBeer,
      description: descBeer,
      bottle: bottleBeer,
      draught: draughtBeer,
      addedon: new Date(), // current time
      editedon: new Date()
    });

    // Clear form
    target.beerName.value = '';
    target.beerStyle.value = '';
    target.beerABV.value = '';
    target.beerDesc.value = '';
    target.bottleCheck.checked = false;
    target.draughtCheck.checked= false;
  },
});
