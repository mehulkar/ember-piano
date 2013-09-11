Piano = Ember.Application.create();

Piano.ApplicationRoute = Ember.Route.extend({
  action: {
    activate: function(controller) {
      controller.set('currentNote', 1);
    }
  }
});

Piano.ApplicationController = Ember.Controller.extend({
  currentNote: 0,

  updateCurrentNote: function() {
    var note = this.get('currentNote');
    if (note < 8) {
      this.incrementProperty('currentNote');
      Ember.run.later(this, 'updateCurrentNote', 1000);
    }
  }.on('init')
});