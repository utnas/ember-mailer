'use strict';

Mailer.Person = DS.Model.extend({
    from: DS.attr('string'),
    to: DS.attr('string'),
    subject: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('string')
});

function Email(from, to, subject, content) {
    var self = this;

    this.from = from;
    this.to = to;
    this.subject = subject;
    this.content = content;

    this.erase = function erase() {
        self.from = '';
        self.to = '';
        self.subject = '';
        self.content = '';
    };
}
