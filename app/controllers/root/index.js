import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { task } from 'ember-concurrency';

export default Controller.extend({
  currentUser: service('current-user'),
  isEditing: false,

  save: task(function * () {
    const organization = this.get('currentUser.user');
    yield organization.save().then(() => {
      this.get('notifications').success('Изменения внесены!', {
          autoClear: true,
          clearDuration: 2000
        }
      );
      this.toggleProperty('isEditing');
    });
  }),

  actions: {
    startEdit: function () {
      this.toggleProperty('isEditing');
    }
  }
});
