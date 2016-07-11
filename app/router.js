import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('drivers', function(){
        this.route( 'update', { path: 'update' } );
      }
  );

  this.route('vehicles', function(){
    //this.route('add', {path: 'add'});
    this.route( 'update', { path: 'update' } );
  });

  this.route('schedule', function(){
    this.route('add', {path: 'add'});
    this.route( 'view', { path: ':vehicles_id' } );
    this.route( 'update', { path: ':schedule_id/update' } );
  });

});

export default Router;
