
Template.entryChoice.events({
  "click #enterPomo": function() {
    FlowRouter.go("/pomo");
    return console.log("entering pomo");
  }
});
