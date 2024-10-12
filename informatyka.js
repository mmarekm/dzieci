var informatykaV = ["Power Point: tytuł, motywy, formatowanie, animacje/przejścia, muzyka/wideo na której karcie, zapis jako video", "Pivot Animator: tworzenie figury/co to klatka, pętla/dodanie tła/funkcje AVI i GIF", "Scratch: rysunek figur/kształtów, tło, co to algorytm", "Word: interlinia/kontrola bękartów i wdów/format obrazów/tabela i jej ustawienia"];
var informatykaIV = ["Paint: piksel/właściwości obrazu/narzędzia/obszar roboczy/kopiowanie bez tła", "Internet: czym jest/przeglądarka-wyszukiwarka(najpopularniejsze)/antywirus/zasady korzystania z obrazów/reakcja na hejt i inne zagrożenia/jak nie uzależnić się", "Scratch: do czego służy programowanie/interfejs/duszek(zmiany-ruch)/scena(zmiany)/polecenia ZAWSZE-JEŻELI NA BRZEGU, ODBIJ SIĘ.../współrzędne", "Word: co to/interfejs/styl tekstu/numerowanie/lista wielopoziomowa/skróty klawiaturowe/liczenie wyrazów/akapit/znaki niedrukowane/twarda spacja/miękki enter"];
var informatykaIII = ["podstawy Scratch"];
var informatykaII = ["bezpieczne korzystanie z komputera/internetu", "programowanie wizualne"];
var informatykaI = ["podstawy Word/Paint", "zapis pliku"];
var informatykaUli = [...informatykaV, ...informatykaIV, ...informatykaIII, ...informatykaII, ...informatykaI];
var informatykaBasi = [...informatykaIII, ...informatykaII, ...informatykaI];
var informatykaAni = [];
var informatykaUlaumie = ["Paint: piksel/właściwości obrazu/narzędzia/obszar roboczy/kopiowanie bez tła", "podstawy Scratch", "programowanie wizualne", "podstawy Word/Paint", "zapis pliku"];
var informatykaUlauczy = [];
var informatykaUlateraz = [];
informatykaUlauczy = informatykaUli.filter(function(element) {return !informatykaUlaumie.includes(element) && !informatykaUlateraz.includes(element); });
var informatykaBasiaumie = ["podstawy Scratch", "programowanie wizualne", "podstawy Word/Paint", "zapis pliku"];
var informatykaBasiauczy = [];
var informatykaBasiateraz = [];
informatykaBasiauczy = informatykaBasi.filter(function(element) {return !informatykaBasiaumie.includes(element) && !informatykaBasiateraz.includes(element); });
var informatykaAniaumie = [];
var informatykaAniauczy = [];
var informatykaAniateraz = [];
informatykaAniauczy = informatykaAni.filter(function(element) {return !informatykaAniaumie.includes(element) && !informatykaAniateraz.includes(element); });
function informatykaUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < informatykaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + informatykaUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < informatykaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + informatykaUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < informatykaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + informatykaUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function informatykaBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < informatykaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + informatykaBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < informatykaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + informatykaBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < informatykaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + informatykaBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function informatykaAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < informatykaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + informatykaAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < informatykaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + informatykaAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < informatykaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + informatykaAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}