import DS from 'ember-data';

export default DS.Model.extend({
  login:            DS.attr('string'),
  password:         DS.attr('string'),
  email:            DS.attr('string'),
  name:             DS.attr('string'),
  business_account: DS.attr('string')
});
