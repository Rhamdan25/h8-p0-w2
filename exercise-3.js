var nama ="";
var peran ="";
if(nama === "" && peran === ""){
    console.log("Nama dan Peran Harus diisi")
}
else if(nama === ""){ 
    console.log("Nama harus diisi")
}
else if(peran === ""){
    console.log("Halo, " + nama + " , pilih peranmu untuk memulai game : kesatria/tabib/penyihir")
}
else if(peran === "ksatria"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Hallo "+ peran +" "+nama+", "+"kamu dapat menyerang dengan senjatamu!")
}
else if(peran === "tabib"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Hallo "+ peran +" "+nama+", "+"kamu akan membantu temanmu yang terluka.")
}
else if(peran === "penyihir"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Hallo "+ peran +" "+ nama +", "+ "ciptakan keajaiban yang membantu kemenanganmu!")
}
