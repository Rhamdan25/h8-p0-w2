// Logic Challenge - X dan O
function xo(str)
{
    counterX = 0;
    counterO = 0;
    
    for(var j = 0 ; j <= str.length-1 ; j++)
    {
        if(str[j]==='x')
        {
            counterX = counterX+1;
        }
        else if (str[j]==='o')
        {
            counterO = counterO+1;
        }
    }

    if(counterX == counterO)
    {
        return true;
    } else 
    {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true