import Service, {inject as service} from '@ember/service';
import { resolve } from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('organization', { me: true }).then((user) => {
        this.set('user', user);
        return user;
      });
    } else {
      return resolve();
    }
  }
});
