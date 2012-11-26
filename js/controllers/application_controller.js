Piano.ApplicationController = Ember.Controller.extend({
  currentNote: (function() {
    tableOfNotes = this.store.findAll(Piano.Note)
    return tableOfNotes
  }).property()
})