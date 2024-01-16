document.getElementById("jenisBangun").addEventListener("change", function() {tampilkanInput();});

function tampilkanInput() {
    var jenisBangun = document.getElementById("jenisBangun").value;
    var inputPanjangLebar = document.getElementById("inputPanjangLebar");
    var inputSisi = document.getElementById("inputSisi");

    if (jenisBangun === "persegi") {
        inputPanjangLebar.style.display = "none";
        inputSisi.style.display = "block";
    } else if (jenisBangun === "persegiPanjang") {
        inputPanjangLebar.style.display = "block";
        inputSisi.style.display = "none";
    }
}

function hitung() {
    var jenisBangun = document.getElementById("jenisBangun").value;

    if (!jenisBangun) {
        alert("Silakan pilih jenis bangun terlebih dahulu!");
        return;
    }

    var panjangInput = document.getElementById("panjang").value;
    var lebarInput = document.getElementById("lebar").value;
    var sisiInput = document.getElementById("sisi").value;

    var panjang = parseFloat(panjangInput);
    var lebar = parseFloat(lebarInput);
    var sisi = parseFloat(sisiInput);

    if (jenisBangun === "persegi") {
        if (isNaN(sisi) || sisi <= 0) {
            alert("Masukkan nilai sisi yang valid (bilangan di atas 0)!");
            return;
        }

        var luas = sisi * sisi;
        var keliling = 4 * sisi;
        var caraPerhitungan = "Persegi:<br>" +
                              "Luas = sisi * sisi = " + sisi + " * " + sisi + " = " + luas + "<br>" +
                              "Keliling = 4 * sisi = 4 * " + sisi + " = " + keliling;

        document.getElementById("hasilLuas").innerHTML = "Luas: " + luas;
        document.getElementById("hasilKeliling").innerHTML = "Keliling: " + keliling;
        document.getElementById("caraPerhitungan").innerHTML = caraPerhitungan;
    } else if (jenisBangun === "persegiPanjang") {
        if (isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0) {
            alert("Masukkan nilai panjang dan lebar yang valid (bilangan di atas 0)!");
            return;
        }

        var luas = panjang * lebar;
        var keliling = 2 * (panjang + lebar);
        var caraPerhitungan = "Persegi Panjang:<br>" +
                              "Luas = panjang * lebar = " + panjang + " * " + lebar + " = " + luas + "<br>" +
                              "Keliling = 2 * (panjang + lebar) = 2 * ( " + panjang + " + " + lebar + " ) = " + keliling;

        if (panjang === lebar) {
            caraPerhitungan += "<br> <br> INI MERUPAKAN PERSEGI.";
        }

        document.getElementById("hasilLuas").innerHTML = "Luas: " + luas;
        document.getElementById("hasilKeliling").innerHTML = "Keliling: " + keliling;
        document.getElementById("caraPerhitungan").innerHTML = caraPerhitungan;
    }
}
