import Ember from 'ember';
import config from 'taxi-app/config/environment';

export default Ember.Controller.extend( {
    needs: [ 'application' ],
    item: '',
    actions: {
        add: function(){
            var self = this;
            var payload = {
                driver_id: self.get( 'schedule_drivers_id' ),
                vehicles_id: self.get( 'schedule_vehicles_id' ),
                date: self.get( 'schedule_date' )
            };
            Ember.$.ajax( {
                url: config.APP.api_host + '/schedules/' + '/add',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )
            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not add.', { closeAfter: 5000 } );
                }
                else{
                    var route = self.container.lookup( 'route:schedule' );
                    console.log( 'sucess add' );
                    route.refresh();
                }
            } );
        },

        remove: function( schedule_id ){
            var self = this;
            var payload = {
                id: schedule_id,
                driver_id: self.get( 'schedule_drivers_id' ),
                vehicles_id: self.get( 'schedule_vehicles_id' ),
                date: self.get( 'schedule_date' )
            };
            Ember.$.ajax( {
                url: config.APP.api_host + '/schedules/' + schedule_id + '/remove',
                type: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: JSON.stringify( payload )
            } ).then( function( response ){
                if( !response ){
                    self.notify.error( 'Could not remove wire from batch.', { closeAfter: 5000 } );
                }
                else{
                    var route = self.container.lookup( 'route:schedule' );
                    console.log( 'success remove' );
                    route.refresh();

                }
            } );
        },

        update: function( schedule ){
            var self = this;

            self.store.findRecord( 'schedule', schedule.id )
                .then( function( data, err ){
                    data.set( 'driver_id', schedule.get('driver_id'));
                    data.set( 'vehicles_id', schedule.get('vehicles_id') );
                    data.set( 'date', schedule.get('date') );
                    Ember.$.ajax( {
                        url: config.APP.api_host + '/schedules/' + schedule.id  + '/update',
                        type: 'put',
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        data: JSON.stringify( data )
                    } ).then( function( response ){
                        if( !response ){
                            self.notify.error( 'Could not remove wire from batch.', { closeAfter: 5000 } );
                        }
                        else{
                            var route = self.container.lookup( 'route:schedule' );
                            console.log( 'success remove' );
                            route.refresh();
                        }
                    } );
                } );
        }
    }});
