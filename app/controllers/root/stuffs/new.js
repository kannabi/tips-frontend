import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  create: task(function * () {
    const stuff = this.get('model');
    yield stuff.save().then(() => {
      this.get('notifications').success('Сотрудник успешно добавлен!', {
          autoClear: true,
          clearDuration: 2000
        }
      );
      this.transitionToRoute('root.stuffs.index');
    });
  })
});
