import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return this.store.findAll( 'schedule' );
    },

    setupController: function( controller, model ){
        controller.set( 'model', model );
        controller.set( 'drivers', this.store.findAll('driver') );
    }
});
