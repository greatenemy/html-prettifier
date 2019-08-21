const cleaner = require('clean-html');
const uniq = require('lodash/uniq');

const tagsRegEx = /<([a-zA-Z0-9-]{1,64})\s/gmi;

module.exports = function (input) {
  let output;
  cleaner.clean(input, {
    'break-around-comments': true,
    // wrap: 80, // default 120
    'add-break-around-tags': addBreakAroundTags(input),
  }, (html) => {
    output = html;
  });
  return output;
}

function addBreakAroundTags (str) {
  if (str && str.match) {
    const matches = str.match(tagsRegEx);
    if (matches) {
      let values = matches
        .map(tagTrim)
        .filter(Boolean)
       return uniq(values);
    }
  }
  return [];
}

function tagTrim (s) {
  if (s[0] === '<') {
    s = s.slice(1);
  }
  return s.trim();
}
