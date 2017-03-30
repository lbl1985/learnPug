const pug = require('pug');

const compiledFunction = pug.compileFile('template.pug');

console.log( compiledFunction({name:'Binlong'}));

console.log( compiledFunction({name:"Minjie"}));

console.log(pug.renderFile('template.pug', {
    name: "Yihan"
}));