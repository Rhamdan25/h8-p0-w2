//1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA');
var i = 2;
while(i<=20)
{
    console.log(i + ' - I love coding');
    i+=2;
}
console.log('LOOPING KEDUA');
var j = 20;
while(j>=2)
{
    console.log(j + ' - I will become fullstack developer');
    j-=2;
}

console.log ("")

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for(var x=1 ; x<=20 ; x++)
{
    console.log(x + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(var y=20 ; y>=1 ; y--)
{
    console.log(y + ' - I will become fullstack developer');
}

console.log ("")

//3. Angka Ganjil dan Genap

//perulangan 1 - 100 dengan pertambahan counter sebanyak 1
for(var a=1 ; a<=100 ; a++)
{
    console.log(a);
    if(a%2==0)
    {
        console.log('GENAP');
    }
    else
    {
        console.log('GANJIL');
    }
}

console.log('----------------------------------');

//perulangan 1 - 100 dengan pertambahan counter sebanyak 2
for(var b=1 ; b<=100 ; b+=2)
{
    console.log(b);
    if(b%3==0)
    {
        console.log(b + ' KELIPATAN 3');
    }
}

console.log('----------------------------------');

//perulangan 1 - 100 dengan pertambahan counter sebanyak 5
for(var c=1 ; c<=100 ; c+=5)
{
    console.log(c);
    if(c%6==0)
    {
        console.log(c + ' KELIPATAN 6');
    }
    
}

console.log('----------------------------------');
    
//perulangan 1 - 100 dengan pertambahan counter sebanyak 9
for(var d=1 ; d<=100 ; d+=9)
{
    console.log(d);
    if(d%10==0)
    {
        console.log(d + ' KELIPATAN 10');
    }
    
}