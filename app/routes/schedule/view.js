import Ember from 'ember';
import PaginationRouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend( PaginationRouteMixin, {

    model: function( params ){
        console.log('@@@#!@!@!@!@')
        return this.get( 'store' ).findRecord( 'schedule', params.vehicles_id );
    },

    setupController: function( controller, model ){
        model = model._internalModel._data;
        controller.set( 'schedule',model );
    }
} );
