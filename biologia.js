var biologiaV = ["biologia-nauka", "czynności życiowe organizmów żywych", "tkanka, co to i przykłady", "komórka i tkanka", "różnice między komórkami roślinnymi i zwierzęcymi", "najważniejsze składniki chemiczne z których zbudowany jest organizm żywy", "rola wody w organizmie", "fotosynteza", "wymiana gazowa u roślin i zwierząt i jej przebieg", "Królestwa organizmów", "różnice między bakteriami i wirusami", "wyjaśnienie różnorodnej budowy grzybów", "budowa porostów", "części rośliny i ich funkcje", "mchy-rośliny wodno-lądowe", "paprotniki, skrzypy i widłaki (przykłady)", "cechy roślin nasiennych i przykłady", "rozmnażanie się roślin nasiennych", "rozprzestrzenianie się roślin okrytonasiennych"];
var biologiaIV = ["przyroda ożywiona i nieożywiona", "sposoby poznawania przyrody (przyrządy i pomoce)", "cechy organizmów żywych", "samożywność i cudzożywność (które organizmy)", "potrzeba tlenu człowiekowi", "układy w ciele człowieka i ich poszczególne odcinki", "omówienie wybranego łańcucha pokarmowego", "zdrowy styl życia", "przystosowanie do życia w wodzie i powietrzu na przykładzie ryb i ptaków", "organizm zwierzęcy żyjący na lądzie"];
var biologiaI = ["podstawowe polskie drzewa, kwiaty, zwierzęta"];
var biologiaUli = [...biologiaV, ...biologiaIV, ...biologiaI];
var biologiaBasi = [...biologiaI];
var biologiaAni = [];
var biologiaUlaumie = [];
var biologiaUlauczy = [];
var biologiaUlateraz = [];
biologiaUlauczy = biologiaUli.filter(function(element) {return !biologiaUlaumie.includes(element) && !biologiaUlateraz.includes(element); });
var biologiaBasiaumie = [];
var biologiaBasiauczy = [];
var biologiaBasiateraz = [];
biologiaBasiauczy = biologiaBasi.filter(function(element) {return !biologiaBasiaumie.includes(element) && !biologiaBasiateraz.includes(element); });
var biologiaAniaumie = [];
var biologiaAniauczy = [];
var biologiaAniateraz = [];
biologiaAniauczy = biologiaAni.filter(function(element) {return !biologiaAniaumie.includes(element) && !biologiaAniateraz.includes(element); });
function biologiaUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < biologiaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + biologiaUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < biologiaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + biologiaUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < biologiaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + biologiaUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function biologiaBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < biologiaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + biologiaBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < biologiaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + biologiaBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < biologiaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + biologiaBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function biologiaAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
    for (let i = 0; i < biologiaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + biologiaAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
    for (let i = 0; i < biologiaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + biologiaAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
    for (let i = 0; i < biologiaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + biologiaAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}