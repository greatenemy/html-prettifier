html-cleaner
============

A small utility library providing utility methods to 'escape' and 'unescape' HTML entities

[![npm](https://img.shields.io/npm/v/greatenemy/html-prettifier.svg)](https://www.npmjs.com/package/@greatenemy/html-prettifier)
![GitHub](https://img.shields.io/github/license/greatenemy/html-prettifier)
[![Build status](https://ci.appveyor.com/api/projects/status/w0ng2fia5u2v76nv?svg=true)](https://ci.appveyor.com/project/InstanceOfMichael/html-prettifier)
[![Greenkeeper badge](https://badges.greenkeeper.io/greatenemy/html-prettifier.svg)](https://greenkeeper.io/)

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
