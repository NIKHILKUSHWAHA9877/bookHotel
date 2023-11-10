// index.js
// const third=require('./basic')
const second=require('./Export.js')
// const {smartwork,hardwork,studentInfo}=require('./second')
// console.log(third);
// console.log(second());
console.log(second);
// console.log(smartwork());
// console.log(hardwork());

// console.log(second[1].color);
// console.log(second[0]());
// console.log(data);
// console.log('Hello');



// MJS ecmascript module file

const seconddemo=require('./seconddemo.mjs')
import seconddemo from './seconddemo.mjs'
console.log(seconddemo);

import {smartwork as a} from './seconddemo.mjs'
import smartwork1 from './seconddemo.mjs'
import * as data from './seconddemo.mjs'
console.log(smartwork1);
console.log(smartwork);
console.log(a());
console.log(data.smartwork1());


