var should = require('chai').should(),
	clean = require('../index');

it('example one', function() {
	clean(`
			<template lang="pug">
<p>
  <div class="is-something" :bells="true">Nice
    <template
 v-if="ducks"><span class="text-muted">Dogs</span></template>
  </div>
</p></template>

`).should.equal(`<template lang="pug">
  <p>
    <div class="is-something" :bells="true">
      Nice
      <template v-if="ducks">
        <span class="text-muted">Dogs</span>
      </template>
    </div>
  </p>
</template>`);
});
