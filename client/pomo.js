// how to make textarea autosize --> see API
// how to set up state for time?
Session.setDefault("timerState", "off");
Template.pomo.onCreated(function() {
//  return Meteor.subscribe("myPomo")
});

Template.pomo.helpers({
});

Template.pomo.events({
  'keyup, #pomoTextArea': function() {
    console.log("let's start");
    var secs = 0;
    function secsInc() {
      return secs += 1;
    }
    while ( secs < 30 ) {
      console.log("secs = " + secs)
      Meteor.setTimeout(secsInc, 1000)
    }

  }
});