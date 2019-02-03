//1. Menyusun Barisan Bintang;
var rows1 = 5;

var asterisk = ''
for (var i = 0 ; i < rows1 ; i++){
  asterisk += '*'
  asterisk += '\n'
}

console.log (asterisk)

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var asterisk2 = ''

for (var i = 0; i < rows2 ; i++ ) {
  for (var j = 0; j < 5 ; j++)
    asterisk2 += '*'
asterisk2 += '\n' 
}

console.log (asterisk2)

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var asterisk3 = ''

for (var i = 0 ; i < rows3 ; i++) {
  for (var j = 0 ; j <= i ; j++)
    asterisk3 += '*'
  asterisk3 += '\n'
}

console.log (asterisk3)
