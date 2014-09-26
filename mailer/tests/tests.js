Mailer.rootElement = '#ember-testing';

Mailer.setupForTesting();
Mailer.injectTestHelpers();

module("Mailer Integration tests", {
    setup: function () {
        Ember.run(Mailer, Mailer.advanceReadiness);
    },

    teardown: function () {
        Mailer.reset();
    }
});

test("/", function () {
    visit("/");

    andThen(function () {
        equal(find("h2").text(), "Welcome to Ember.js", "Application header is rendered");
        equal(find("li").length, 3, "There are three items in the list");
    });
});