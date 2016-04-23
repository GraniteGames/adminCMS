Template.adminNav.events({
  'click .logoutButton': ()=>{
    //Prevent Default Action
    event.preventDefault();
    //Log the User Out
    Meteor.logout();
  }
})
