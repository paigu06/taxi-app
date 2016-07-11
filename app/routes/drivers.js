import Ember from 'ember';
import PaginationRouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend( PaginationRouteMixin, {
    model: function(){
        return this.store.findAll( 'driver' );
    },

    setupController: function( controller, model ){
        controller.set( 'model', model );
    }
} );
