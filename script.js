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

    document.getElementById("mh1").innerHTML = toplamMaaslar["h1"]+ "₺";
    document.getElementById("mh2").innerHTML = toplamMaaslar["h2"]+ "₺";
    document.getElementById("mh3").innerHTML = toplamMaaslar["h3"]+ "₺";
    document.getElementById("mh4").innerHTML = toplamMaaslar["h4"]+ "₺";

    document.getElementById("topSaat").innerHTML = toplamSaat.toFixed(2);
    document.getElementById("topMaas").innerHTML = toplamMaas + "₺";;

  
 //   console.log("Toplam Saat:", toplamSaat);
 //   console.log("Toplam Maaş:", toplamMaas);
 //   console.log("Toplam Saatlar:", toplamSaatlar);
 //   console.log("Toplam Maaşlar:", toplamMaaslar);
  }