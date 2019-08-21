html-cleaner
============

A small utility library providing utility methods to 'escape' and 'unescape' HTML entities

## Installation

	npm install @greatenemy/html-prettifier --save
	yarn add @greatenemy/html-prettifier

## Usage

	const htmlPrettify = require('@greatenemy/html-prettifier'),
	const str_output = htmlPrettify(str_input)

Example Input:
```html
			<template lang="pug">
<p>
  <div class="is-something" :bells="true">Nice
    <template
 v-if="ducks"><span class="text-muted">Dogs</span></template>
  </div>
</p></template>


```

Example Output:
```html
<template lang="pug">
  <p>
    <div class="is-something" :bells="true">
      Nice
      <template v-if="ducks">
        <span class="text-muted">Dogs</span>
      </template>
    </div>
  </p>
</template>
```

## Tests

	npm test

## Release history

	* 0.1.0 Initial release
