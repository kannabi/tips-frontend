import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  create: task(function * () {
    const organization = this.get('model');
    yield organization.save().then(() => {
      this.get('notifications').success('Организация успешно зарегистрирована!', {
          autoClear: true,
          clearDuration: 2000
        }
      );
      this.transitionToRoute('login');
    });
  })
});
