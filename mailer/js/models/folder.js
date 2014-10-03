'use strict';

Mailer.Folder = Ember.Model.extend({
    value: DS.attr('string'),
    label: SD.attr('string'),

    emails: DS.hasMany('email')
});