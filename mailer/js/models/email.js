'use strict';

Mailer.Email = DS.Model.extend({
    from: DS.attr('string'),
    to: DS.attr('string'),
    subject: DS.attr('string'),
    content: DS.attr('string'),
    date: DS.attr('date'),

    folder: DS.belongsTo('folder'),

    erase: function () {
        this.set('from', '');
        this.set('to', '');
        this.set('subject', '');
        this.set('content', '');
    }
});
