Mailer = Ember.Application.create();

Mailer.Router.map(function () {
    // put your routes here
});

Mailer.IndexRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});
