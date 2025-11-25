var gramatykaV = ["dialog w restauracji", "pytanie o drogę", "przymiotniki i ich przeciwieństwa", "liczebniki porządkowe", "data", "Present Continuous", "konstrukcja <em>be going to</em>", "konstrukcja <em>Let's</em>", "przyimki dot. miejsca/kierunku", "spójniki and/because/but/so/or", "rzeczowniki policzalne i niepoliczalne", "How many/How much", "Konstrukcje czasownikowe z <em>-ing</em> po czasownikach: like, love, hate, enjoy, don’t/doesn’t like", "stopniowanie przymiotników", "Konstrukcje czasownikowe z <em>-ing</em> po czasownikach: like, love, hate, enjoy, don’t/doesn’t like", "Past Simple z <em>to be</em>", "trzy formy czasownika"];
var gramatykaIV = ["alfabet", "to be", "dopełniacz saksoński", "nieregularna liczba mnoga i -es", "a/an/the", "this/that, these/those", "some/any", "przyimki at/in/on dot. czasu", "3os. l.p. Present Simple", "who", "when", "what time", "tryb rozkazujący, zakazy", "like/don't like też w pytaniach", "opis kogoś"];
var gramatykaIII = ["Present Simple", "can", "have got"];
var gramatykaII = ["Where is, Where are, There is, There are, This is"];
var gramatykaI = ["przywitanie się", "przedstawienie się"];
var gramatykaUli = [...gramatykaV, ...gramatykaIV, ...gramatykaIII, ...gramatykaII, ...gramatykaI];
var gramatykaBasi = [...gramatykaIII, ...gramatykaII, ...gramatykaI];
var gramatykaAni = [];
var gramatykaUlaumie = [];
var gramatykaUlauczy = [];
var gramatykaUlateraz = [];
gramatykaUlauczy = gramatykaUli.filter(function(element) {return !gramatykaUlaumie.includes(element) && !gramatykaUlateraz.includes(element); });
var gramatykaBasiaumie = [];
var gramatykaBasiauczy = [];
var gramatykaBasiateraz = [];
gramatykaBasiauczy = gramatykaBasi.filter(function(element) {return !gramatykaBasiaumie.includes(element) && !gramatykaBasiateraz.includes(element); });
var gramatykaAniaumie = [];
var gramatykaAniauczy = [];
var gramatykaAniateraz = [];
gramatykaAniauczy = gramatykaAni.filter(function(element) {return !gramatykaAniaumie.includes(element) && !gramatykaAniateraz.includes(element); });
var slowkaV = ['<a href="eng/feeling.html">uczucia/emocje</a>', '<a href="eng/work.html">czynności w pracy</a>', '<a href="eng/shopping.html">zakupy i usługi</a>', '<a href="eng/trip.html">podróżowanie</a>', '<a href="eng/city.html">miasto</a>', '<a href="eng/przyimki.html">przyimki opisujące położenie</a>', '<a href="eng/health.html">zdrowie</a>', '<a href="eng/computer.html">komputer i sprzęty</a>', '<a href="eng/przeciwieństwa.html">przymiotniki/przeciwieństwa</a>', '<a href="eng/zaimki.html">zaimki i przymiotniki dzierżawcze</a>'];
var slowkaIV = ['<a href="eng/dane%20osobowe.html">dane osobowe</a>', '<a href="eng/character.html">charakter</a>', '<a href="eng/countries.html">kraje i narodowości</a>', '<a href="eng/school.html">szkoła</a>', '<a href="eng/job.html">zawody</a>', '<a href="eng/przysłówki.html">przysłówki częstotliwości i spójniki</a>'];
var slowkaIII = ['<a href="eng/house.html">dom</a>', '<a href="eng/nature.html">przyroda i pogoda</a>'];
var slowkaII = ['<a href="eng/numbers.html">liczby i miary</a>', '<a href="eng/time.html">czas</a>', '<a href="eng/animals.html">zwierzęta</a>', '<a href="eng/sport.html">sport</a>'];
var slowkaI = ['<a href="eng/speak.html">rozmowa</a>', '<a href="eng/family.html">rodzina</a>', '<a href="eng/body.html">ciało, wygląd i codzienność</a>', '<a href="eng/clothes.html">garderoba</a>', '<a href="eng/food.html">żywność</a>','<a href="eng/przymiotniki.html">LISTA PRZYMIOTNIKÓW</a>','<a href="eng/czasowniki.html">LISTA CZASOWNIKÓW</a>',"FORMY NIEREGULARNE CZASOWNIKÓW"];
var slowkaUli = [...slowkaV, ...slowkaIV, ...slowkaIII, ...slowkaII, ...slowkaI];
var slowkaBasi = [...slowkaIII, ...slowkaII, ...slowkaI];
var slowkaAni = [];
var slowkaUlaumie = [];
var slowkaUlauczy = [];
var slowkaUlateraz = [];
slowkaUlauczy = slowkaUli.filter(function(element) {return !slowkaUlaumie.includes(element) && !slowkaUlateraz.includes(element); });
var slowkaBasiaumie = [];
var slowkaBasiauczy = [];
var slowkaBasiateraz = [];
slowkaBasiauczy = slowkaBasi.filter(function(element) {return !slowkaBasiaumie.includes(element) && !slowkaBasiateraz.includes(element); });
var slowkaAniaumie = [];
var slowkaAniauczy = [];
var slowkaAniateraz = [];
slowkaAniauczy = slowkaAni.filter(function(element) {return !slowkaAniaumie.includes(element) && !slowkaAniateraz.includes(element); });
function angielskiUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('SŁÓWKA<br/>');
	for (let i = 0; i < slowkaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + slowkaUlauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + gramatykaUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + slowkaUlateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + gramatykaUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + slowkaUlaumie[i] + '</div>');
    }
	umieElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + gramatykaUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function angielskiBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('SŁÓWKA<br/>');
	for (let i = 0; i < slowkaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + slowkaBasiauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + gramatykaBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + slowkaBasiateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + gramatykaBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + slowkaBasiaumie[i] + '</div>');
    }
	umieElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + gramatykaBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function angielskiAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('SŁÓWKA<br/>');
	for (let i = 0; i < slowkaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + slowkaAniauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + gramatykaAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + slowkaAniateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + gramatykaAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('SŁÓWKA<br/>');
    for (let i = 0; i < slowkaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + slowkaAniaumie[i] + '</div>');
    }
	umieElement.append('<br/>GRAMATYKA<br/>');
	for (let i = 0; i < gramatykaAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + gramatykaAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}