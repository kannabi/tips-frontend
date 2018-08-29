import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Route.extend(RouteMixin,{
  currentUser: service(),
  perPage: 24,
  model(params){
    params['organization_id'] = this.get('currentUser.user.id');
    return this.findPaged('stuff', params, {zeroBasedIndex: true});
  }
});
