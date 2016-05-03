Template.menuPage.helpers({
  //This returns the food list
  foods: function(){
    return Food.find();
  },
});