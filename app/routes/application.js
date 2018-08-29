import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import {inject as service} from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  session: service('session'),
  currentUser: service(),

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
});
