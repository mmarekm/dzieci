var geografiaV = ["skale mapy: mianowana, liczbowa, obliczanie odległości rzeczywistej", "wysokość na mapie, bezwzględna/względna, poziomica", "niziny, wyżyny, góry w Polsce", "największe rzeki, jeziora w Polsce-rzeka główna, dopływ, ujście, źródło", "największe miasta w Polsce", "występowanie i wykorzystanie węgla kamiennego", "powstawanie wąwozów lessowych", "formy krasowe na Wyżynie Krakowsko-Częstochowskiej-jaskinia, stalaktyt, stalagmit, stalagnat", "pogoda w górach-halny", "różnice między Tatrami Wysokimi a Zachodnimi-wysokości bezwzględne, granity, wapienie, stawy, jaskinie", "kontynenty i oceany", "wielcy podróżnicy: Kolumb, Magellan, Vespucci, Cook, Amundsen, Peary", "lasy równikowe, lasy liściaste strefy umiarkowanej, tajga, sawanna i step, pustynie gorące i pustynie lodowe, krajobraz śródziemnomorski: ich położenie, temperatury i opady, roślinność, zwierzęta, działalność człowieka", "atrakcje turystyczne w krajach śródziemnomorskich", "piętra roślinności w górach-regiel dolny, regiel górny, kosodrzewina, hale, turnie, wieczne śniegi i lodowce"];
var geografiaIV = ["główne i pośrednie kierunki geograficzne, wyznaczanie ich w dzień i noc, róża kierunków", "przyrządy do pomiaru składników pogody/meteorolog", "widnokrąg", "co znaczy <em>słońce wędruje po niebie</em>", "daty rozpoczęcia pór roku", "elementy krajobrazu okolicy", "funkcja mapy/planu, skala"];
var geografiaI = ["opis pogody", "kształt Polski, stolica"];
var geografiaUli = [...geografiaV, ...geografiaIV, ...geografiaI];
var geografiaBasi = [...geografiaI];
var geografiaAni = [];
var geografiaUlaumie = [];
var geografiaUlauczy = [];
var geografiaUlateraz = [];
geografiaUlauczy = geografiaUli.filter(function(element) {return !geografiaUlaumie.includes(element) && !geografiaUlateraz.includes(element); });
var geografiaBasiaumie = [];
var geografiaBasiauczy = [];
var geografiaBasiateraz = [];
geografiaBasiauczy = geografiaBasi.filter(function(element) {return !geografiaBasiaumie.includes(element) && !geografiaBasiateraz.includes(element); });
var geografiaAniaumie = [];
var geografiaAniauczy = [];
var geografiaAniateraz = [];
geografiaAniauczy = geografiaAni.filter(function(element) {return !geografiaAniaumie.includes(element) && !geografiaAniateraz.includes(element); });
function geografiaUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < geografiaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + geografiaUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < geografiaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + geografiaUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < geografiaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + geografiaUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function geografiaBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < geografiaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + geografiaBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < geografiaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + geografiaBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < geografiaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + geografiaBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function geografiaAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < geografiaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + geografiaAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < geografiaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + geografiaAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < geografiaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + geografiaAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}