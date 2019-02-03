// Logic Challenge - Konversi Menit

function konversiMenit(menit)
{
    var jam = Math.floor(menit/60);
    var menitDigit = menit%60;
    if(menitDigit<10)
    {
        menitDigit = '0' + menitDigit;
    }
    else
    {
        menitDigit = menitDigit;
    }
    waktu = jam + ':' + menitDigit;
    return waktu;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00