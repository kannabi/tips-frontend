import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    authenticate() {
      const credentials = this.getProperties('login', 'password'), authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason) => {
        this.set('errorMessage', reason.payload.message || reason);
      });
    }
  }
});
