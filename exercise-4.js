var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//Tanggal
if( tanggal>0 && tanggal <=31)
{
    date = tanggal;
}
else
{
    date = false;
    console.log('Tanggal tidak valid');
}

//Bulan
if( bulan>0 && bulan <= 12 )
{
    var month = '';
    switch(bulan)
    {
        case 1:
            month = 'Januari';
            break;
        case 2:
            month = 'Februari';
            break;
        case 3:
            month = 'Maret';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'Mei';
            break;
        case 6:
            month = 'Juni';
            break;
        case 7:
            month = 'Juli';
            break;
        case 8:
            month = 'Agustus';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'Oktober';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'Desember';
            break;
        default:
            month = 'Bulan';
    }
}
else
{
    month = false;
    console.log('Bulan tidak valid');
}

//Tahun
if( tahun>=1900 && tahun<=2200 )
{
    year = tahun;
}
else
{
    year = false;
    console.log('Tahun tidak valid');
}

//Output
if( date && month && year )
{
    console.log(date + ' ' + month + ' ' + year);
}
else
{
    console.log('Input tidak valid');
}
