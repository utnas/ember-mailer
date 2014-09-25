//= require_tree ../node_modules
//= require ember
//= require ember-data
//= require handlebars
//= require ./mailer
//= require_tree .

Mailer = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});