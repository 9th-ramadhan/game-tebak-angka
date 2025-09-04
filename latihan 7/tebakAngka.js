// comp side
var game = true

while(game) {
    // generate random number
    var comp = Math.random();

    if(comp <= 0.2) {
        comp = '1';
    } else if(comp > 0.2 && comp <= 0.4) {
        comp = '2';
    } else if(comp > 0.4 && comp <= 0.6) {
        comp = '3';
    } else if(comp > 0.6 && comp <= 0.8) {
        comp = '4';
    } else {
        comp = '5';
    }

    console.log('nilai comp = ' + comp)

    var kesempatan = 3
    for(kesempatan; kesempatan >= 1 || kesempatan == true; kesempatan--) {

        // player side
        var p = prompt('pilih angka 1-5');
        console.log('nilai p =' + p)

        if(p == null) {
            p = 'error'
        }

        console.log(p)
        // rules
        var hasil = '';

        if(p === comp) {
            hasil = 'MENANG!';
        } else if(p === 'error') {
            hasil = 'kesalahan'
        } else {
            hasil = 'SALAH';
        } 

        console.log('hasil perbandingan adalah ' + hasil)
        console.log('apakah p != p? ' + p !== comp);

        // show result


        if(hasil === 'MENANG') {
            alert('selamat! anda berhasil menebak angka dengan benar \n anda ' + hasil );
            kesempatan = 0
        } else if(hasil === 'SALAH') {
            alert('maaf, anda ' + hasil + '\n sisa kesempatan anda ' + " " + kesempatan);
        } else if(hasil === 'kesalahan') {
            alert('anda membatalkan game \n');
            kesempatan = 0
        } else {
            alert('anda membuat kesalahan' + '\n sisa kesempatan anda ' + ' ' + kesempatan)
        }

        console.log('sisa kesempatan = ' + kesempatan)
    }
    game = confirm('game selesai. apakah anda ingin mencoba lagi?')
}
