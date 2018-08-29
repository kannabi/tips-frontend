import DS from 'ember-data';

export default DS.Model.extend({
  first_name:    DS.attr('string'),
  second_name:   DS.attr('string'),
  third_name:    DS.attr('string'),
  email:        DS.attr('string'),
  code:         DS.attr('string'),
  bank_account: DS.attr('string'),

  organization: DS.belongsTo('organization')
});
