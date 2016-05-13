Food = new Mongo.Collection("food");
//Schema for entries to the Beer Collection
Food.attachSchema(new SimpleSchema({
  name :{
    type: String,
    label: "Name",
    max: 50
  },
  course:{
    type: String,
    label: "Course",
    autoform: {
      options: [
        {
          label: "App",
          value: "App"
        },
        {
          label: "Main",
          value: "Main"
        },
        {
          label: "Dessert",
          value: "Dessert"
        }
      ]
    }
  },
  price :{
    type: Number,
    decimal: true,
    label: "Price"

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
  glutenCheck:{
    type: Boolean,
    label: "Gluten Free",
    optional: true
  },
  vegCheck:{
    type: Boolean,
    label:"Vegetarian",
    optional:true
  },
  lastEdited:{
    type: Date
  },


}
))

Template.foodEdit.helpers({
  //This returns the beer list
  foods: function(){
    var regexp2 = new RegExp(Session.get('search/keyword2'), 'i');
    return Food.find({name: regexp2});
  },
  foodInfo: function(){
    return Session.get("foodData");
  }
});
Template.foodEdit.events({
  'keyup #search': function(event){
    Session.set('search/keyword2',event.target.value);
    console.log(Session.get("search/keyword2"))
  }

});

Template.food.events({
  'click .editButton': function(){
    Session.set('foodData', this);
  },
  'click .deleteButton': function(){
    Food.remove(this._id);
  },

});
