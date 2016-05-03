
Template.beerPage.helpers({
  //This returns the beer list
  beers: function(){
    return Beer.find();
  },
});