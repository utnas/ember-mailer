Mailer = Ember.Application.create();

Mailer.ApplicationAdapter = DS.FixtureAdapter;

Mailer.Router.map(function () {
    this.resource('received', {path: 'received'}, function () {
    });
    this.resource('archives', {path: 'archives'}, function () {
    });
    this.resource('sent', {path: 'sent'}, function () {
    });
    this.resource('spam', {path: 'spam'}, function () {
    });
    this.resource('email', {path: '/:id'}, function () {
    });
});

// Controller
Mailer.ApplicationController = Ember.Controller.extend({
    search: '',
    filtered: [],

    actions: {
        query: function () {
            var query = this.get('search');

            // Apply the filter
            if (!Ember.empty(query)) {

                alert('Query');
            }


        },

        erase: function () {
            this.set('search', '');
            // And remove the filter from content
        }
    }
});

// Routes
Mailer.IndexRoute = Ember.Route.extend({
    model: function () {
        return Mailer.FIXTURES;
    }
});

Mailer.ReceivedRoute = Ember.Route.extend({
    model: function () {
        return Mailer.getMailFolder('MAILBOX');
    }
});

Mailer.ArchivesRoute = Ember.Route.extend({
    model: function () {
        return Mailer.getMailFolder('TRASH');
    }
});

Mailer.SentRoute = Ember.Route.extend({
    model: function () {
        return Mailer.getMailFolder('SENT');
    }
});

Mailer.SpamRoute = Ember.Route.extend({
    model: function () {
        return Mailer.getMailFolder('SPAM');
    }
});

Mailer.EmailRoute = Ember.Route.extend({
    model: function () {
        return {};
    }
});

// Data
Mailer.getMailFolder = function (name) {
    var folders = Mailer.FIXTURES,
        iterator = 0,
        result = null;
    for (iterator; iterator < folders.length; iterator++) {
        result = folders[iterator];
        if (result.value === name) {
            return result;
        }
    }
    return '';
};

Mailer.FIXTURES = [
    { value: "MAILBOX",
        label: 'Email Box',
        emails: [
            { id: 1, from: "Albator", to: "Rudy", subject: "I will be back", date: new Date(2014, 2, 20, 15, 30), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Kiss from sky", date: new Date(2014, 3, 18, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
            { id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), message: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
            { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ]
    },
    { value: "TRASH",
        label: "Archives",
        emails: [
            { id: 5, from: "Candy", to: "Rudy", subject: "Happy birthday", date: new Date(2014, 2, 15, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
            { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Do you come", date: new Date(2014, 2, 15, 17, 50), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
        ]
    },
    { value: "SENT",
        label: "Sents",
        emails: [
            { id: 8, from: "Rudy", to: "Albator", subject: "What price ?", date: new Date(2014, 2, 15, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ]
    },
    { value: "SPAM",
        label: "Spams",
        emails: [
            { id: 10, from: "Rue du discount", to: "Rudy", subject: "Need a new one", date: new Date(2014, 2, 15, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 11, from: "Sofinnoga", to: "Rudy", subject: "Need money ?", date: new Date(2014, 2, 18, 16, 12), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ]
    }
];