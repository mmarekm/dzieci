var licznikPobran = 0;
var elementyAnalizy = [];
var elementyWyswietlane = [];
var liczbaZasobow = 0;
var zysk = 0;
var liczbaPol = 0;
var pojawiSie = 0;
var nazwySkarbow = new Map([ [1, "doniczka pusta"], [2, "doniczka z ziemią"], [3, "doniczka z ziarenkiem"], [4, "jeden listek"], [5, "dwa listki"], [6, "trzy listki"], [7, "kwiatek"], [8, "dwa kwiatki"], [9, "dużo kwiatków"], [10, "łyżka miodu"], [11, "szklanka miodu"], [12, "garnek miodu"], [13, "garnek i wiadro"], [14, "przelewanie miodu"], [15, "napis miód"], [16, "mała moneta"], [17, "większa moneta"], [18, "banknot"], [19, "niebieski klejnot"] ]);
elementyWyswietlane.push('<img src="img/pusty.jpg" width="150" height="150" />');
for (i = 1; i <= 6; i++)
{
	for (j = 1; j <= 6; j++)
	{
		elementyWyswietlane.push('<img src="img/' + i + j + '.jpg" width="150" height="150" />');
	}
}
var indeksy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var iloscPol = indeksy.length;

function gra()
{
	losujStart();
	rysujStrone();
}

function rysujStrone()
{
	document.getElementById("pola").innerHTML = '';
    for (let i = 1; i <= 21; i++) 
	{
        document.getElementById("pola").innerHTML += '<div id="pole' + i + '" class="pole" onclick="klik(this);" data-i="' + i + '">' + elementyWyswietlane[indeksy[i]] + '</div>';
    }
	document.getElementById("sklepik").innerHTML = '';
	for (let i = 1; i <= 19; i++) 
	{
		document.getElementById("sklepik").innerHTML += '<input id="sklepik' + i + '" type="submit" value="' + nazwySkarbow.get(i) + ', cena ' + Math.pow(3,i) * 5 +'" onclick="dodaj(this);" data-i="' + i + '"/>';
	}
}

function klik(element) 
{
    element.style.border = "3px solid red";
    var pobraneI = element.getAttribute('data-i');
	elementyAnalizy.push(pobraneI);
	licznikPobran++;
    if (licznikPobran === 2)
	{
        let src1 = document.getElementById("pole" + elementyAnalizy[0]).getElementsByTagName('img')[0].src;
        let src2 = document.getElementById("pole" + elementyAnalizy[1]).getElementsByTagName('img')[0].src;
		licznikPobran = 0;
		if ((src1 === src2) && (elementyAnalizy[0] != elementyAnalizy[1]) && (indeksy[elementyAnalizy[0]] != 0)) {
			document.getElementById("pole" + elementyAnalizy[0]).innerHTML = elementyWyswietlane[0];
			indeksy[elementyAnalizy[0]] = 0;
			indeksy[elementyAnalizy[1]]++;
			document.getElementById("pole" + elementyAnalizy[1]).innerHTML = elementyWyswietlane[indeksy[elementyAnalizy[1]]];
        }
		
		elementyAnalizy = [];
		for (j = 1; j <= 21; j++)
		{
			document.getElementById("pole" + j).style.border = "3px solid blue";
		}
	}
	
}

function obliczZasoby()
{
document.getElementById("zasoby").innerHTML = liczbaZasobow;
for (let i = 0; i < iloscPol; i++)
{
	 var wartosc = Math.pow(2,indeksy[i]) - 1;
	 zysk += wartosc;
	 wartosc = 0;
}
liczbaZasobow += zysk;
zysk = 0;
setTimeout(obliczZasoby, 2000);
}

function losujStart()
{
	liczbaPol = 3;
	pojawiSie = 1;
    losowanie();
}

function losowanie()
{
	for (let i = 0; i < liczbaPol; i++)
	{
		var wylosowanyIndeks = Math.floor(Math.random()*21)+1;
		if (indeksy[wylosowanyIndeks] === 0)
		{
			indeksy[wylosowanyIndeks] = pojawiSie;
		}
		else
		{
			i--;
		}
	}
}

function dodaj(element)
{
	var pobraneI = element.getAttribute('data-i');
	liczbaPol = 1;
	liczbaWycenionych = 11;
	var wycena = [];
	wycena.push(0);
	for (let i = 1; i <= liczbaWycenionych; i++)
	{
		wycena.push(Math.pow(3,i) * 5);
	}
	var cena = wycena[pobraneI];
	pojawiSie = pobraneI;
	if ((indeksy.filter(element => element === 0).length > 2) && (liczbaZasobow > cena))
	{
	losowanie();
	liczbaZasobow -= cena;
	}
	rysujStrone();
}