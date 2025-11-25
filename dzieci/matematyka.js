var matematykaV = ["iloczyn potęg", "cechy podzielności przez 6, 12, 15", "liczby pierwsze/złożone", "rozkład na czynniki pierwsze i wskazanie dzielników liczby", "dodawanie i odejmowanie ułamków zwykłych o różnych mianownikach", "mnożenie i dzielenie ułamków dziesiętnych", "zamiana jednostek(zł/gr, t/kg/dag/g, km/m/dm/cm/mm)", "proste równoległe i prostopadłe", "mierzenie kątów i ich rodzaje", "kąty wierzchołkowe i przyległe", "rodzaje i własności trójkątów(suma kątów, z jakich boków można zbudować), wysokość, pole", "pole i wysokość równoległoboków, trapezu", "klasyfikacja czworokątów", "Prostopadłościan - objętość, pole powierzchni bocznej/podstawy/całkowitej", "siatki graniastosłupów"];
var matematykaIV = ["liczby naturalne na osi liczbowej", "zapis liczb", "obliczanie potęgi 2 i 3", "dzielenie z resztą", "cechy podzielności przez 2, 3, 5, 9, 10", "obliczenia pod (i nad) kreską", "obliczenia kalendarzowe", "ułamki zwykłe (ilorazy), skracanie/rozszerzanie", "ułamki właściwe/niewłaściwe/liczby mieszane", "dodawanie i odejmowanie ułamków o tych samych mianownikach", "mnożenie przez liczbę naturalną", "zamiana ułamka dziesiętnego na zwykły", "porównywanie ułamków dziesiętnych", "dodawanie i odejmowanie ułamków dziesiętnych", "mnożenie ułamków dziesiętnych przez 10, 100,...", "pojęcia: prosta, półprosta, odcinek, punkt. wielokąt, okrąg, koło", "zamiana jednostek (m/cm)", "obwód i pole wielokąta", "mapa/plan/skala", "rozpoznanie: stożek, kula, prostopadłościan, ostrosłup, sześcian, walec", "własności prostopadłościanu i sześcianu"];
var matematykaIII = ["tabliczka mnożenia w zakresie 100", "znaki rzymskie", "obliczenia zegarowe", "jednostki miary i masy", "rozwiązywanie zadań tekstowych"];
var matematykaII = ["dodawanie i odejmowanie liczb dwucyfrowych", "tabliczka mnożenia w zakresie 50", "obliczenia pieniężne"];
var matematykaI = ["podstawowe figury geometryczne", "klasyfikacja obiektów i określanie położenia ich względem innych", "porównywanie liczb (<,>,=), zapisywanie prostych działań", "liczenie w zakresie 10, a dziesiątkami w zakresie 100", "odczytywanie pełnych godzin", "określanie długości i wagi przedmiotów"];
var matematykaUli = [...matematykaV, ...matematykaIV, ...matematykaIII, ...matematykaII, ...matematykaI];
var matematykaBasi = [...matematykaIII, ...matematykaII, ...matematykaI];
var matematykaAni = [];
var matematykaUlaumie = ["podstawowe figury geometryczne"];
var matematykaUlauczy = [];
var matematykaUlateraz = [];
matematykaUlauczy = matematykaUli.filter(function(element) {return !matematykaUlaumie.includes(element) && !matematykaUlateraz.includes(element); });
var matematykaBasiaumie = ["podstawowe figury geometryczne"];
var matematykaBasiauczy = [];
var matematykaBasiateraz = [];
matematykaBasiauczy = matematykaBasi.filter(function(element) {return !matematykaBasiaumie.includes(element) && !matematykaBasiateraz.includes(element); });
var matematykaAniaumie = [];
var matematykaAniauczy = [];
var matematykaAniateraz = [];
matematykaAniauczy = matematykaAni.filter(function(element) {return !matematykaAniaumie.includes(element) && !matematykaAniateraz.includes(element); });
function matematykaUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < matematykaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + matematykaUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < matematykaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + matematykaUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < matematykaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + matematykaUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function matematykaBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < matematykaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + matematykaBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < matematykaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + matematykaBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < matematykaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + matematykaBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function matematykaAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < matematykaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + matematykaAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < matematykaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + matematykaAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < matematykaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + matematykaAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}