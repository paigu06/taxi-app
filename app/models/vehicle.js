import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    created_at: attr(),
    name: attr(),
    brand: attr(),
    age: attr(),
    type: attr(),
    status: attr(),
    schedules: hasMany('schedule', { async: true } )
});

