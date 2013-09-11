Piano = Ember.Application.create();

Piano.ApplicationRoute = Ember.Route.extend({
  model: function(controller) {
    this._super(controller);
    return Piano.Note.create({val: 0});
  }
});

Piano.ApplicationController = Ember.Controller.extend({
  currentNote: Em.computed.alias('content'),

  updateCurrentNote: function() {
    var note = this.get('currentNote');

    if (note && note.get('val') < 8) {
      this.incrementProperty('currentNote.val');

      // and run it again after 1 second
      Ember.run.later(this, 'updateCurrentNote', 1000);
    }

  }.observes('content').on('init')
});

var noteMapping = {
    1: 'C',
    2: 'D',
    3: 'E',
    4: 'F',
    5: 'G',
    6: 'A',
    7: 'B',
    8: 'C'
};

Piano.Note = Ember.Object.extend({
  val: 0,

  note: function() {
    return noteMapping[this.get('val')]
  }.property('val')
});