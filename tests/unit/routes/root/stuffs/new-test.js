import { moduleFor, test } from 'ember-qunit';

moduleFor('route:root/stuffs/new', 'Unit | Route | root/stuffs/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
