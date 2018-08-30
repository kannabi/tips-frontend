import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/me`;
    }

    return this._super(...arguments);
  },

  updateRecord: function(store, type, snapshot) {
    let data = {};
    const serializer = store.serializerFor(type.modelName);

    serializer.serializeIntoHash(data, type, snapshot);

    data['id'] = snapshot.id;
    const url = `${config.protocol}://${config.host}/crm/organizations/update`;
    return this.ajax(`${url}`, "PUT", { data: data });
  }

});
