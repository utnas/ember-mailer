'use strict';

Mailer.Folder = Ember.Model.extend({
    value: DS.attr('string'),
    label: DS.attr('string'),

    emails: DS.hasMany('email')
});