'use strict';
// es6 feature: blocked-scope "let" declaration
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large'},
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
