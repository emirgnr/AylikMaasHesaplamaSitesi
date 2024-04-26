
var parentDiv = document.querySelector('.tableInputRow');

// Haftaların sayısı
var haftaSayisi = 4;

// Her bir hafta için döngü oluştur
for (var i = 1; i <= haftaSayisi; i++) {
    // Col elementi oluştur
    var colDiv = document.createElement('div');
    colDiv.classList.add('col-12');
    colDiv.classList.add('col-md-6');
    colDiv.classList.add('col-lg-3');

    // Hafta başlığını oluştur
    var haftaBaslik = document.createElement('h5');
    haftaBaslik.textContent = 'Hafta ' + i;
    haftaBaslik.classList.add('mb-4');

    // Tablo oluştur
    var table = document.createElement('table');
    table.classList.add('table', 'border', 'border-radius');

    // Tablo başlığını oluştur
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    th1.textContent = 'Günler';
    th2.textContent = 'Çalışma Saati';
    th3.textContent = 'Ücret';
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    thead.appendChild(tr);

    // Tablo içeriğini oluştur
    var tbody = document.createElement('tbody');
    for (var j = 1; j <= 7; j++) {
        var trInner = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var input1 = document.createElement('input');
        var input2 = document.createElement('input');
        input1.setAttribute('type', 'number');
        input1.classList.add('form-control', 'my-1');
        input1.setAttribute('placeholder', j === 1 ? 'Örnek 8,35' : '');
        input1.setAttribute('id', 'h' + i + '-cs-' + j);
        input2.setAttribute('type', 'number');
        input2.classList.add('form-control', 'my-1');
        input2.setAttribute('placeholder', j === 1 ? 'Örnek 75' : '');
        input2.setAttribute('id', 'h' + i + '-u-' + j);
        td1.textContent = getGunAdi(j);
        td2.appendChild(input1);
        td3.appendChild(input2);
        trInner.appendChild(td1);
        trInner.appendChild(td2);
        trInner.appendChild(td3);
        tbody.appendChild(trInner);
    }

    // Tabloyu birleştir
    table.appendChild(thead);
    table.appendChild(tbody);

    // Col içeriğini birleştir
    colDiv.appendChild(haftaBaslik);
    colDiv.appendChild(table);

    // Parent içine ekle
    parentDiv.appendChild(colDiv);
}

// Gün adını al
function getGunAdi(gunIndex) {
    var gunler = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
    return gunler[gunIndex - 1];
}


var tableSummaryRow = document.querySelector('.tableSummaryRow');

// Haftaların sayısı
var haftaSayisi = 4;

// Her bir hafta için döngü oluştur
for (var i = 1; i <= haftaSayisi; i++) {
    // Col elementi oluştur
    var colDiv = document.createElement('div');
    colDiv.classList.add('col');
    colDiv.classList.add('col-sm-6');
    colDiv.classList.add('col-lg-3');

    // Tablo oluştur
    var table = document.createElement('table');
    table.classList.add('table');

    // Tablo başlığını oluştur
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.textContent = 'Haftalık Toplam Saat';
    th2.textContent = 'Haftalık Toplam Maaş';
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);

    // Tablo içeriğini oluştur
    var tbody = document.createElement('tbody');
    var trInner = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var label1 = document.createElement('label');
    var label2 = document.createElement('label');
    label1.setAttribute('id', 'sh' + i);
    label2.setAttribute('id', 'mh' + i);
    td1.appendChild(label1);
    td2.appendChild(label2);
    trInner.appendChild(td1);
    trInner.appendChild(td2);
    tbody.appendChild(trInner);

    // Tabloyu birleştir
    table.appendChild(thead);
    table.appendChild(tbody);

    // Col içeriğini birleştir
    colDiv.appendChild(table);

    // Parent içine ekle
    tableSummaryRow.appendChild(colDiv);
}


// Saatlik ücretler ile haftalık, aylık maaşı hesapla ve göster
function hesapla() {
    var genelUcret = parseFloat(document.getElementById("genel-ucret").value) || 0;
    var toplamSaat = 0;
    var toplamMaas = 0;

    var toplamSaatlar = {};
    var toplamMaaslar = {};

    for (var i = 1; i <= 4; i++) {
        var saatToplam = 0;
        var maasToplam = 0;

        for (var j = 1; j <= 7; j++) {
            var cs = parseFloat(document.getElementById("h" + i + "-cs-" + j).value) || 0;
            var u = parseFloat(document.getElementById("h" + i + "-u-" + j).value) || genelUcret;

            saatToplam += cs;
            maasToplam += cs * u;
        }

        toplamSaat += saatToplam;
        toplamMaas += maasToplam;

        toplamSaatlar["h" + i] = saatToplam;
        toplamMaaslar["h" + i] = maasToplam;
    }

    document.getElementById("sh1").innerHTML = toplamSaatlar["h1"].toFixed(2);
    document.getElementById("sh2").innerHTML = toplamSaatlar["h2"].toFixed(2);
    document.getElementById("sh3").innerHTML = toplamSaatlar["h3"].toFixed(2);
    document.getElementById("sh4").innerHTML = toplamSaatlar["h4"].toFixed(2);

    document.getElementById("mh1").innerHTML = toplamMaaslar["h1"] + "₺";
    document.getElementById("mh2").innerHTML = toplamMaaslar["h2"] + "₺";
    document.getElementById("mh3").innerHTML = toplamMaaslar["h3"] + "₺";
    document.getElementById("mh4").innerHTML = toplamMaaslar["h4"] + "₺";

    document.getElementById("topSaat").innerHTML = toplamSaat.toFixed(2);

    saatDakikayaCevir(toplamSaat);

    document.getElementById("topMaas").innerHTML = toplamMaas + "₺";;

}

function saatDakikayaCevir(tSaat) {

    var saat = parseFloat(tSaat);

    var tamSaat = Math.floor(saat);
    var dakika = Math.round((saat - tamSaat) * 60);

    var tSaatOut = tamSaat + " sa " + dakika + " dk";

    document.getElementById("saatDakika").innerHTML = tSaatOut;
}

