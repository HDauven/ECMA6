'use strict';
// es6 feature: blocked-scope "let" declaration
const sentences = [
  { subject: 'Java', verb: 'is', object: 'verbose' },
  { subject: 'Ruby', verb: 'is', object: 'clean'},
];
// es6 feature: object destructuring
function say({ subject, verb, object }) {
  // es6 feature: template string
  console.log(`${subject} ${verb} ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
  say(s);
}
