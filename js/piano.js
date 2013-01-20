Piano = Ember.Application.create();

Piano.Router.map(function() {
  this.route('/');
  this.route('current');

});

Piano.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('current');
  }
});