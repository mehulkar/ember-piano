Piano.ApplicationController = Ember.Controller.extend({
  currentNote: (function() {
    var notes = this.get('tableOfNotes');
    return notes[0];
  }).property(),

  tableOfNotes: (function() {
    return ["A", "B", "C", "D", "E", "F", "G"];
  }).property()
})