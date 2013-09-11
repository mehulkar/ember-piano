Piano = Ember.Application.create();

Piano.Router.map(function(){
  this.route('note', {path: ':noteVal'});
});

Piano.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('note', 1);
  }
});

Piano.NoteRoute = Ember.Route.extend({
  model: function(params) {
    var note = parseInt(params.noteVal);
    return Piano.Note.create({val: note});
  }
})

Piano.NoteController = Ember.ObjectController.extend({
  currentNote: Em.computed.alias('content'),

  updateCurrentNote: function() {
    var note = this.get('currentNote');

    if (note && note.get('val') < 8) {
      Ember.run.later(this, 'transitionWithNote', 1000);
    }

  }.observes('content').on('init'),

  transitionWithNote: function() {
    var newNoteVal = this.incrementProperty('currentNote.val');
    this.transitionToRoute('note', newNoteVal)
  },
  currentNoteLocation: function() {
    return "sounds/" + this.get('currentNote.note') + ".wav";
  }.property('currentNote.note'),
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