/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector("#svg-turkiye-haritasi ");
  const info = document.querySelector(".il-isimleri");

  element.addEventListener("mouseover", function (event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.id !== "s" &&
      event.target.parentNode.id !== "nokta" &&
      event.target.parentNode.id !== "a"
    ) {
      info.innerHTML = [
        "<div>",
        event.target.parentNode.getAttribute("data-iladi"),
        "</div>",
      ].join("");
    }
  });

  element.addEventListener("mousemove", function (event) {
    if (event.target.parentNode.id === "kktc") {
    } else {
      info.style.top = event.pageY + 10 + "px";
      info.style.left = event.pageX + "px";
    }
  });

  element.addEventListener("mouseout", function (event) {
    info.innerHTML = "";
  });

  const svgHaritasi = document.getElementById("svg-turkiye-haritasi");
  const ilIsimleri = document.getElementById("il-isimleri");

  // Tüm ilçelerin path elementlerini seçmek için querySelectorAll kullanılır
  const ilcePaths = svgHaritasi.querySelectorAll(".il");
  const zoomPaths = svgHaritasi.querySelectorAll(".zoom");

  // Renk paleti tanımla
  function zoomToIl(ilID) {
    const ilPath = document.querySelector(`[data-merkez="${ilID}"]`);

    if (ilID === "konya") {
      // Konya için özel viewBox değerleri
      zoom = true;
      showGeriButon();

      getIlceDetay(seciliIlceler);
      const bbox = ilPath.getBBox();
      const padding = 380;
      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding - 35,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "antalya") {
      zoom = true;

      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 260;

      const viewBoxValue = [
        bbox.x - padding + 80,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "mugla") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding + 100,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "edirne") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 210;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding + 130,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kirklareli") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "tekirdag") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "istanbul") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 120;

      const viewBoxValue = [
        bbox.x - padding - 5,
        bbox.y - padding - 75,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kocaeli") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 100;

      const viewBoxValue = [
        bbox.x - padding - 50,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "yalova") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 80;

      const viewBoxValue = [
        bbox.x - padding + 20,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bursa") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");

      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "balikesir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 250;

      const viewBoxValue = [
        bbox.x - padding + 150,
        bbox.y - padding - 80,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "canakkale") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 10,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "izmir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 230;

      const viewBoxValue = [
        bbox.x - padding - 50,
        bbox.y - padding - 45,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "manisa") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 200,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "denizli") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 240;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "burdur") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding - 20,
        bbox.y - padding + 80,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "afyonkarahisar") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 260;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding + 80,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "isparta") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 80,
        bbox.y - padding - 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "mersin") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 230;

      const viewBoxValue = [
        bbox.x - padding - 130,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "karaman") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "adana") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 280;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding - 150,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "nigde") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding - 10,
        bbox.y - padding + 60,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "aksaray") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 10,
        bbox.y - padding - 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kayseri") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 250;

      const viewBoxValue = [
        bbox.x - padding + 170,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "nevsehir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 90,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "yozgat") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding + 60,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kirsehir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kirikkale") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "ankara") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 300;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding + 53,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "corum") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 210;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "sinop") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 130;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 100,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kastamonu") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bolu") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 140;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "sakarya") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 130;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bilecik") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 120;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "eskisehir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 190,
        bbox.y - padding + 60,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kutahya") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding - 30,
        bbox.y - padding + 10,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "zonguldak") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 120;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bartin") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 80;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "samsun") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 150;

      const viewBoxValue = [
        bbox.x - padding - 30,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "ordu") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 160;

      const viewBoxValue = [
        bbox.x - padding - 40,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "giresun") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 40,
        bbox.y - padding + 100,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "trabzon") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 160;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding + 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "hatay") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 210;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding - 60,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "osmaniye") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 70,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kahramanmaras") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 80,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "gaziantep") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 170;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "sanliurfa") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 250;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding - 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "adiyaman") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 170;

      const viewBoxValue = [
        bbox.x - padding + 40,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "malatya") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding - 20,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "sivas") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 320;

      const viewBoxValue = [
        bbox.x - padding - 30,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "tokat") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "amasya") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 140;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "rize") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 170;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "hakkari") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 210;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "van") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 280;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "agri") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 250;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 80,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "igdir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kars") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 250;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "ardahan") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "artvin") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "erzurum") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 300;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "mus") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 230;

      const viewBoxValue = [
        bbox.x - padding + 90,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bitlis") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 40,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "siirt") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 90,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "sirnak") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 20,
        bbox.y - padding - 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "mardin") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 20,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "batman") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 190;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "diyarbakir") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 230;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bingol") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "elazig") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 210;

      const viewBoxValue = [
        bbox.x - padding + 100,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "tunceli") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "erzincan") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 220;

      const viewBoxValue = [
        bbox.x - padding - 0,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "bayburt") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 170;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "gumushane") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 180;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kktc") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 200;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "usak") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 140;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "duzce") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 100;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding + 0,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "karabuk") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 120;

      const viewBoxValue = [
        bbox.x - padding + 50,
        bbox.y - padding - 10,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "cankiri") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 130;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding - 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "aydin") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 130;

      const viewBoxValue = [
        bbox.x - padding + 0,
        bbox.y - padding + 30,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    } else if (ilID === "kilis") {
      zoom = true;
      showGeriButon();

      const bbox = ilPath.getBBox();
      const padding = 170;

      const viewBoxValue = [
        bbox.x - padding + 30,
        bbox.y - padding - 50,
        bbox.width + padding * 2,
        bbox.height + padding * 2,
      ].join(" ");
      svgHaritasi.setAttribute("viewBox", viewBoxValue);
    }
  }

  // Seçili ilçelerin ID'lerini saklamak için bir Set kullanıyoruz
  let seciliIlceler = new Set();
  let zoom = false;
  // Tüm ilçelerin ait olduğu ilin ID'sine göre gruplanması
  let ilcelerGrup = new Map();
  ilcePaths.forEach((ilcePath) => {
    const ilID = ilcePath.getAttribute("data-il");
    if (!ilcelerGrup.has(ilID)) {
      ilcelerGrup.set(ilID, []);
    }
    ilcelerGrup.get(ilID).push(ilcePath);
  });

  // İlçe üzerine tıklama olayını dinleme
  ilcePaths.forEach((ilcePath) => {
    const ilID = ilcePath.getAttribute("data-il");
    //const ilN = ilcePath.getAttribute('data-merkez'); // İl ID'sini al

    if (ilID) {
      // Yalnızca data-il özelliği bulunan pathleri dinle
      ilcePath.addEventListener("click", function (event) {
        const ilceID = ilcePath.id;
        if (zoom) {
          if (seciliIlceler.has(ilceID)) {
<<<<<<< HEAD
            if (isOzelIlce(ilceID)) {
              unselectOzelIlceTek(ilceID);
              seciliIlceler.delete(ilceID);
            } else {
=======
            if(isOzelIlce(ilceID)){
              unselectOzelIlceTek(ilceID)
              seciliIlceler.delete(ilceID);
            }else{
>>>>>>> yunus
              unselectIlceTek(ilceID);
              seciliIlceler.delete(ilceID); // İlçeyi listeden sil
            }
          } else {
            // Eğer ilçe henüz seçili değilse, select işlemi yap
            selectIlceTek(ilceID);
            seciliIlceler.add(ilceID); // İlçeyi listeye ekle
          }
        } else {
          // Eğer ilçe zaten seçili ise, unselect işlemi yap
          if (seciliIlceler.has(ilceID)) {
            unselectIlceGrup(ilID);
            seciliIlceler.delete(ilceID); // İlçeyi listeden sil
          } else {
            // Eğer ilçe henüz seçili değilse, select işlemi yap
            selectIlceGrup(ilID);
            seciliIlceler.add(ilceID); // İlçeyi listeye ekle
          }
        }
      });
    }
    ilcePath.addEventListener("click", function (event) {
      const ilID = ilcePath.getAttribute("data-merkez"); // İl ID'sini al

      zoomToIl(ilID); // İlgili ilin tüm ilçelerinin rengini değiştirerek zoom yap
    });
  });

  // Belirli bir ilin tüm ilçelerini seçme fonksiyonu
  function selectIlceGrup(ilID) {
    if (ilcelerGrup.has(ilID)) {
      ilcelerGrup.get(ilID).forEach((ilcePath) => {
        ilcePath.style.fill = "#1094F6"; // Seçili rengi uygula (örneğin kırmızı)
        seciliIlceler.add(ilcePath.id); // İlçeyi listeye ekle
      });
    }
  }

  // Belirli bir ilin tüm ilçelerini unselect fonksiyonu
  // Her renk grubu için şehirleri saklamak için bir nesne oluştur
  const ilRenkleri = {
    "#80EF8D": [
      "erzurum",
      "sanliurfa",
      "trabzon",
      "samsun",
      "istanbul",
      "izmir",
      "yozgat",
      "edirne",
      "konya",
      "bolu",
      "bursa",
      "burdur",
    ],
    "#fff6a9": [
      "ardahan",
      "bitlis",
      "elazig",
      "rize",
      "ordu",
      "osmaniye",
      "cankiri",
      "bartin",
      "kirklareli",
      "eskisehir",
      "balikesir",
      "usak",
      "kayseri",
    ],
    "#F3BBC4": [
      "kars",
      "hatay",
      "mus",
      "malatya",
      "bayburt",
      "hatay",
      "yalova",
      "ankara",
      "tekirdag",
      "zonguldak",
      "manisa",
      "karaman",
      "tokat",
    ],
    "#FFBB21": [
      "hakkari",
      "agri",
      "batman",
      "bingol",
      "gumushane",
      "adiyaman",
      "amasya",
      "guneykibris",
      "canakkale",
      "kocaeli",
      "kirsehir",
      "antalya",
    ],
    "#FF8480": [
      "van",
      "sakarya",
      "artvin",
      "diyarbakir",
      "giresun",
      "gaziantep",
      "kktc",
      "corum",
      "kutahya",
      "aydin",
      "nigde",
      "isparta",
    ],
    "#D0FFDF": [
      "igdir",
      "siirt",
      "erzincan",
      "kahramanmaras",
      "kirikkale",
      "bilecik",
      "afyonkarahisar",
      "nevsehir",
    ],
    "#B5D94F": [
      "mardin",
      "tunceli",
      "kilis",
      "kastamonu",
      "duzce",
      "adana",
      "aksaray",
      "denizli",
    ],
    "#CAC0A4": ["mugla", "mersin", "sirnak", "sivas", "karabuk", "sinop"],

    // Diğer renkler ve il grupları...
  };

<<<<<<< HEAD
=======

>>>>>>> yunus
  function unselectIlceGrup(ilID) {
    if (ilcelerGrup.has(ilID)) {
      ilcelerGrup.get(ilID).forEach((ilcePath) => {
        const ilceID = ilcePath.id;
        let ilceOriginalColor = "#fefffe"; // Varsayılan renk
<<<<<<< HEAD

=======
        
>>>>>>> yunus
        // Özel ilçe renklerini kontrol et
        for (const renk in ozelIlceRenkleri) {
          if (ozelIlceRenkleri.hasOwnProperty(renk)) {
            if (ozelIlceRenkleri[renk].includes(ilceID)) {
              ilceOriginalColor = renk;
              break;
            }
          }
        }
<<<<<<< HEAD

=======
        
>>>>>>> yunus
        // Eğer özel ilçe değilse, ilRenkleri listesine bak
        if (ilceOriginalColor === "#fefffe") {
          Object.keys(ilRenkleri).forEach((renk) => {
            if (ilRenkleri[renk].includes(ilID)) {
              ilceOriginalColor = renk;
            }
          });
        }
<<<<<<< HEAD

=======
  
>>>>>>> yunus
        ilcePath.style.fill = ilceOriginalColor; // Önceden seçilen rengine geri dön
        seciliIlceler.delete(ilceID); // İlçeyi listeden sil
      });
    }
  }
  

  function unselectIlceTek(ilceID) {
    const ilcePath = document.getElementById(ilceID);
    if (ilcePath) {
      const ilID = ilcePath.getAttribute("data-il");
      let ilceOriginalColor = "#fefffe"; // Varsayılan renk

      // İl ID'si ilRenkleri listesinde bulunuyorsa ilçenin orijinal rengini belirle
      Object.keys(ilRenkleri).forEach((renk) => {
        if (ilRenkleri[renk].includes(ilID)) {
          ilceOriginalColor = renk;
        }
      });

      ilcePath.style.fill = ilceOriginalColor; // Önceden seçilen rengine geri dön
      seciliIlceler.delete(ilceID); // İlçeyi listeden sil
    }
  }

  // Belirli bir ilçeyi seçme fonksiyonu
  function selectIlceTek(ilceID) {
    const ilcePath = document.getElementById(ilceID);
    if (ilcePath) {
      ilcePath.style.fill = "#1094F6"; // Seçili rengi uygula (örneğin mavi)
      seciliIlceler.add(ilceID); // İlçeyi seçili ilçeler listesine ekle
    }
  }

<<<<<<< HEAD
  const ozelIlceRenkleri = {
    "#c3bc80": [
      "bEdremit",
      "bandirma",
      "erdek",
      "susurluk",
      "bGonen",
      "ayvalik",
      "luleburgaz",
      "amasra",
      "talas",
      "unye",
      "fatsa",
      "ardesen",
      "kadirli",
    ],
    "#58ba64": [
      "karacabey",
      "mudanya",
      "mustafakemalpasa",
      "nilufer",
      "osmangazi",
      "gemlik",
      "gursu",
      "kestel",
      "orhangazi",
      "iznik",
      "inegol",
      "kesan",
      "silivri",
      "buyukcekmece",
      "arnavutkoy",
      "sultanbeyli",
      "bergama",
      "dikili",
      "aliaga",
      "menemen",
      "cesme",
      "seferihisar",
      "torbali",
      "selcuk",
      "tire",
      "bucak",
      "aksehir",
      "beysehir",
      "seydisehir",
      "kEregli",
      "sorgun",
      "bafra",
      "terme",
      "akcaabat",
      "siverek",
      "viransehir",
    ],
    "#c08a93": [
      "malkara",
      "corlu",
      "tsaray",
      "marmaraereglisi",
      "cerkezkoy",
      "soma",
      "akhisar",
      "turgutlu",
      "salihli",
      "alasehir",
      "demirci",
      "kizilcahamam",
      "pursuklar",
      "anGolbasi",
      "polatli",
      "zEregli",
      "caycuma",
      "turhal",
      "erbaa",
      "niksar",
      "dortyol",
      "iskenderun",
      "kirikhan",
      "hatayMerkez",
    ],
    "#de9b00": [
      "gelibolu",
      "biga",
      "can",
      "darica",
      "cayirova",
      "gebze",
      "korfez",
      "derince",
      "kandira",
      "kartepe",
      "karamursel",
      "finike",
      "kumluca",
      "kemer",
      "dosemealti",
      "serik",
      "manavgat",
      "alanya",
      "merzifon",
      "suluova",
      "kelkit",
      "dogubeyazit",
    ],
    "#ff554f": [
      "didim",
      "kusadasi",
      "soke",
      "nazilli",
      "simav",
      "gediz",
      "tavsanli",
      "bor",
      "sungurlu",
      "bulancak",
      "nizip",
      "hopa",
    ],
    "#9de0cc": [
      "bozuyuk",
      "dinar",
      "sandikli",
      "bolvadin",
      "urgup",
      "avanos",
      "elbistan",
      "gediz",
    ],
    "#92b535": [
      "tosya",
      "ceyhan",
      "kozan",
      "kiziltepe",
      "midyat",
      "nusaybin",
      "akcakoca",
    ],
    "#a59b7e": [
      "bodrum",
      "datca",
      "milas",
      "yatagan",
      "marmaris",
      "ortaca",
      "dalaman",
      "fethiye",
      "seydikemer",
      "anamur",
      "silifke",
      "erdemli",
      "tarsus",
      "cizre",
    ],
  };

=======

  const ozelIlceRenkleri = {
    "#c3bc80": ["edremit-balikesir","bandirma","erdek","susurluk", "gonen-balikesir", "ayvalik","luleburgaz","amasra","talas","unye","fatsa","ardesen","kadirli"],
    "#58ba64": ["karacabey", "mudanya","mustafakemalpasa","nilufer","osmangazi","gemlik","gursu","kestel","orhangazi","iznik","inegol","kesan","silivri","buyukcekmece","arnavutkoy","sultanbeyli","bergama","dikili","aliaga","menemen","cesme","seferihisar","torbali","selcuk","tire","bucak","aksehir","beysehir","seydisehir","eregli","sorgun","bafra","terme","akcaabat","siverek","viransehir"],
    "#c08a93": ["malkara", "corlu","saray","marmaraereglisi","cerkezkoy","soma","akhisar","turgutlu","salihli","alasehir","demirci","kizilcahamam","pursuklar","golbasi","polatli","eregli","caycuma","turhal","erbaa","niksan"],
    "#de9b00": ["gelibolu", "biga","can", "darica","cayirova","gebze","korfez", "derince", "kandira","kartepe","karamursel","finike","kumluca","kemer","dosemealti","serik","manavgat","alanya","merzifon","suluova","kelkit","dogubeyazit"],
    "#ff554f": ["didim", "kusadasi", "soke", "nazilli","simav","gediz","tavsanli","bor","sungurlu","bulancak","nizip","hopa"],
    "#9de0cc": ["bozuyuk", "dinar","sandikli", "bolvadin", "urgup", "avanos","elbistan","gediz"],
    "#92b535": ["tosya", "ceyhan", "kozan","kiziltepe", "midyat","nusaybin","akcakoca"],
    "#a59b7e": ["bodrum", "datca", "milas", "yatagan","marmaris", "ortaca","dalaman","fethiye","seydikemer", "anamur", "silifke", "erdemli","tarsus","cizre"],
  };
  
  
>>>>>>> yunus
  function isOzelIlce(ilceID) {
    for (const renk in ozelIlceRenkleri) {
      if (ozelIlceRenkleri.hasOwnProperty(renk)) {
        if (ozelIlceRenkleri[renk].includes(ilceID)) {
          return true;
        }
      }
    }
    return false;
  }
<<<<<<< HEAD

  // Örnek kullanım:
  function unselectOzelIlceTek(ilceID) {
    const ilcePath = document.getElementById(ilceID);
    if (ilcePath) {
      const ilID = ilcePath.getAttribute("id");
      let ilceOriginalColor = "#fefffe"; // Varsayılan renk

      // İl ID'si ozelIlceRenkleri listesinde bulunuyorsa ilçenin orijinal rengini belirle
      Object.keys(ozelIlceRenkleri).forEach((renk) => {
        if (ozelIlceRenkleri[renk].includes(ilID)) {
          ilceOriginalColor = renk;
        }
      });

      ilcePath.style.fill = ilceOriginalColor; // Önceden seçilen rengine geri dön
      seciliIlceler.delete(ilceID); // İlçeyi listeden sil
    }
  }

=======
  
  
  // Örnek kullanım:
  function unselectOzelIlceTek(ilceID) {
      const ilcePath = document.getElementById(ilceID);
      if (ilcePath) {
          const ilID = ilcePath.getAttribute("id");
          let ilceOriginalColor = "#fefffe"; // Varsayılan renk
  
          // İl ID'si ozelIlceRenkleri listesinde bulunuyorsa ilçenin orijinal rengini belirle
          Object.keys(ozelIlceRenkleri).forEach((renk) => {
              if (ozelIlceRenkleri[renk].includes(ilID)) {
                  ilceOriginalColor = renk;
              }
          });
  
          ilcePath.style.fill = ilceOriginalColor; // Önceden seçilen rengine geri dön
          seciliIlceler.delete(ilceID); // İlçeyi listeden sil
      }
  }
  
>>>>>>> yunus
  function showGeriButon() {
    document.getElementById("geri-butonu").style.display = "block";
  }

  function hideGeriButon() {
    document.getElementById("geri-butonu").style.display = "none";
  }

  function clickGeriButon() {
    zoom = false;
    svgHaritasi.setAttribute("viewBox", "0 0 4749 2214");
    hideGeriButon();
    // ... ilk hale dönme kodunuz ...
  }

<<<<<<< HEAD
  document
    .getElementById("geri-butonu")
    .addEventListener("click", clickGeriButon);
}
=======
  document.getElementById("geri-butonu").addEventListener("click", clickGeriButon);

  function getIlceDetay(seciliIlceler) {
    
    // Seçili ilçelerin adlarını bir diziye aktar
    const ilceAdlari = Array.from(seciliIlceler).map(ilceID => {
      const ilcePath = document.getElementById(ilceID);
      return ilcePath.getAttribute('id');
    });
  console.log(ilceAdlari);
    // Seçili ilçelerin adlarını "ilce_detay.php" dosyasına gönder
    fetch('ilceler.php', {
      method: 'POST',
      body: JSON.stringify({ ilce_adlari: ilceAdlari }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(ilceDetaylari => {
        // Gelen JSON verisini JavaScript nesnelerine dönüştür
        const ilceler = ilceDetaylari.map(ilceDetay => {
          const { ilce_id, il_id, ilce_adi, ilce_detay } = ilceDetay;
          return {
            ilceID: ilce_id,
            ilID: il_id,
            ilceAdi: ilce_adi,
            ilceDetay: ilce_detay
          };
        });
        console.log(ilceDetay);

        // İlçe detaylarını gösteren bir modal veya pencere oluştur
        // ... (Modal veya pencere oluşturma kodunuzu ekleyin)
        // Modal veya pencerenin içeriğine ilçe detaylarını yerleştirin
        // ... (İlçe detaylarını modale veya pencereye ekleme kodunuzu ekleyin)
      })
      .catch(error => {
        console.error('İlçe detayı yüklenemedi:', error);
      });
  }
  



/*
  function getIlceDetay() {
    // Secili ilceler setinden bir dizi olustur
    const seciliIlceArray = Array.from(seciliIlceler);

    // Ajax istegi yap
    const xhr = new XMLHttpRequest();
    const url = "ilceler.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                  console.log(xhr.responseText);
                    const ilceDetaylari = JSON.parse(xhr.responseText);
                    // Gelen verileri isle veya goster
                    console.log(ilceDetaylari);
                } catch (error) {
                    console.log('Error parsing JSON:', error);
                }
            } else {
                console.log('Error:', xhr.status);
            }
        }
    };
    const data = JSON.stringify({ ilceler: seciliIlceArray });
    xhr.send(data);
}
*/

function getIlceDetay(seciliIlceler) {
  // Seçili ilçelerin adlarını bir diziye aktar
  const ilceAdlari = Array.from(seciliIlceler).map(ilceID => {
    const ilcePath = document.getElementById(ilceID);
    return ilcePath.getAttribute('id');
  });

  // Seçili ilçelerin adlarını "ilce_detay.php" dosyasına gönder
  fetch('ilceler.php', {
    method: 'POST',
    body: JSON.stringify({ ilce_adlari: ilceAdlari }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(ilceDetaylari => {
      // Gelen JSON verisini JavaScript nesnelerine dönüştür
      const ilceler = ilceDetaylari.map(ilceDetay => {
        const { ilce_id, il_id, ilce_adi, ilce_detay } = ilceDetay;
        return {
          ilceID: ilce_id,
          ilID: il_id,
          ilceAdi: ilce_adi,
          ilceDetay: ilce_detay
        };
      });


    })
    .catch(error => {
      console.error('İlçe detayı yüklenemedi:', error);
    });
}


    
}

>>>>>>> yunus
