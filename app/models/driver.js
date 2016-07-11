import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    created_at: attr(),
    name: attr(),
    license_id: attr(),
    age: attr(),
    gender: attr(),
    type:attr(),
    status: attr()
});
