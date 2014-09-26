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

test('Route name should be Index', function () {
    visit('index');
    andThen(function () {
        equal(currentRouteName(), 'index', 'Current route name is Index');
    });
});

test('Visit index', function () {
    visit('/');
    andThen(function () {
        equal(find('li').length, 4, 'There are four items in the list');
    });
});


test('Nav should have Email Box Archives Sents Spams', function () {
    visit('index');
    andThen(function () {
        equal(find('li').text(), 'Email BoxArchivesSentsSpams', 'Contains links: Email Box, Archives, Sents, Spams');
    });
});

