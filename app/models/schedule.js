import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    created_at: attr(),
    name: attr(),
    driver_id: attr(),
    vehicles_id: attr(),
    date: attr(),
    vehicle: belongsTo('vehicle', { async: true } )
});

