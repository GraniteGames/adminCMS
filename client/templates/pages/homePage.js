if(Meteor.isClient){
  Meteor.startup(function(){
    GoogleMaps.load();
  })
}

Template.homePage.helpers({
  mapOptions: function () {
    //Make sure the maps API has loaded
    if(GoogleMaps.loaded()){
      return{
        center: new google.maps.LatLng(43.6532, -79.3832),
        zoom: 4
      };
    }
  },
  beerFerment: function(){
    return Beer.find({fermentingCheck:true})
  },
  beerCondition: function(){
    return Beer.find({conditioningCheck:true})
  }
})

Template.homePage.onCreated(function(){
  //Ready callback to interact once the map is raedy.
  GoogleMaps.ready('exampleMap', function(map){
    //Add a Marker to the map once it is Ready
    var market = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
})
