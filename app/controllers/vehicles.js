import Ember from 'ember';
import config from 'taxi-app/config/environment';

export default Ember.Controller.extend( {
    needs: [ 'application' , 'schedule'],
    vehicles_id: '',
    vehicles_name: '',
    vehicles_brand: '',
    vehicles_age: '',
    vehicles_type: '',

    actions: {
        add: function(){
            var self = this;
            var payload = {
                id: self.get( 'vehicles_id' ),
                name: self.get( 'vehicles_name' ),
                brand: self.get( 'vehicles_brand' ),
                age: self.get( 'vehicles_age' ),
                type: self.get( 'vehicles_type' )
            };

            Ember.$.ajax( {
                url: config.APP.api_host + '/vehicles/' + '/add',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )

            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not add.', { closeAfter: 5000 } );

                }
                else{
                    var route = self.container.lookup( 'route:vehicles' );
                    console.log( 'success remove' );
                    route.refresh();

                }
            } );
        },

        remove: function( vehicles_id ){
            var self = this;
            var payload = {
                id: vehicles_id
            };
            Ember.$.ajax( {
                url: config.APP.api_host + '/vehicles/' + vehicles_id + '/remove',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )

            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not remove.', { closeAfter: 5000 } );
                }
                else{
                    var route = self.container.lookup( 'route:vehicles' );
                    console.log( 'success remove' );
                    route.refresh();

                }
            } );
        },

        schedule: function(vehicles_id){
            var self = this;
            console.log( '####', vehicles_id );

        }
    }

} );
