Beer = new Mongo.Collection("beers");
//Schema for entries to the Beer Collection
Beer.attachSchema(new SimpleSchema({
  name :{
    type: String,
    label: "Name",
    max: 50
  },
  style: {
    type: String,
    label: "Style",
    max: 50

  },
  abv:{
    type: Number,
    label:"ABV(%)",
    decimal: true

  },
  price:{
    type: Number,
    label: "Price",
    decimal: true
  },
  descFR:{
    type: String,
    label: "Description(FR)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }

  },
  descEN:{
    type: String,
    label: "Description(EN)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  descJP:{
    type: String,
    label: "Description(JP)",
    max: 1000,
    optional: true,
    autoform: {
      rows: 5
    }
  },
  bottleCheck:{
    type: Boolean,
    label: "Available by Bottle"
  },
  draughtCheck:{
    type: Boolean,
    label:"Available on Tap"
  },
  lastEdited:{
    type: Date
  },


}
))

Template.beerEdit.helpers({
  //This returns the beer list
  beers: function(){
    var regexp = new RegExp(Session.get('search/keyword'), 'i');
    return Beer.find({name: regexp});
  },
  beerInfo: function(){
    return Session.get("beerData");
  }
});
Template.beerEdit.events({
  'keyup #search': function(event){
    Session.set('search/keyword',event.target.value);
    console.log(Session.get("search/keyword"))
  }

});

Template.beer.events({
  'click .editButton': function(){
    Session.set('beerData', this);
  },
  'click .deleteButton': function(){
    Beer.remove(this._id);
  },

});
