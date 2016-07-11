import Ember from 'ember';
import config from 'taxi-app/config/environment';

export default Ember.Controller.extend( {
    needs: [ 'application' ],
    drivers_id: '',
    drivers_name: '',
    drivers_license_id: '',
    drivers_age: '',
    drivers_gender: '',

    actions: {
        add: function(){
            var self = this;
            var payload = {
                id: self.get('drivers_id'),
                name: self.get('drivers_name'),
                license_id: self.get('drivers_license_id'),
                age: self.get('drivers_age'),
                gender: self.get('drivers_gender')
            };
            Ember.$.ajax( {
                url: config.APP.api_host + '/drivers/' + '/add',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )

            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not remove wire from batch.', { closeAfter: 5000 } );
                }
                else{
                    var route = self.container.lookup( 'route:drivers' );
                    console.log( 'success remove' );
                    route.refresh();

                }
            } );
        },

        remove: function( drivers_id ){
            var self = this;
            var payload = {
                id: drivers_id
            };
            Ember.$.ajax( {
                url: config.APP.api_host + '/drivers/' + drivers_id + '/remove',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )

            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not remove wire from batch.', { closeAfter: 5000 } );
                }
                else{
                    var route = self.container.lookup( 'route:drivers' );
                    console.log( 'success remove', route );
                    route.refresh();

                }
            } );
        }
    }

} );
