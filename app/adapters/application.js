import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import {inject as service} from '@ember/service';

export default ActiveModelAdapter.extend({
  session: service(),
  host: `${config.protocol}://${config.host}`,
  namespace: 'crm',
  headers: computed('session.data.authenticated.token', function() {
    let headers = {'Accept': 'application/json'};
    let token = this.get('session.data.authenticated.token');
    if (isPresent(token)){
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  })
});
