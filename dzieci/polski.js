var polskiV = ["Wyjaśnia pojęcia i potrafi wskazać w tekście: epitet, porównanie, przenośnię", "Wyjaśnia pojęcia i podaje przykłady: mit, dziennik, pamiętnik, powieść, nowela, przypowieść", "Rozpoznaje odmiany powieści i opowiadania", "Zna części mowy i ich cechy: czasownik, rzeczownik, przymiotnik, przysłówek, liczebnik, zaimek, przyimek, spójnik", "Rozpoznaje znaczenie niewerbalnych środków komunikacji (np. gest, mimika, postawa ciała)", "Nazywa i wyróżnia w tekście części zdania (podmiot, orzeczenie, dopełnienie, przydawka, okolicznik)", "Rozpoznaje w zdaniu związki główne i poboczne wyrazów", "Rozpoznaje w tekście typy wypowiedzeń: zdanie pojedyncze, zdania złożone (podrzędniei współrzędnie), równoważniki zdań", "Dokonuje rozbioru logicznego zdania pojedynczego", "Potrafi napisać: opis, list, zaproszenie, ogłoszenie, notatka, dedykacja, sprawozdanie, podziękowanie, instrukcja, charakterystyka"];
var polskiIV = ["Znajomość pojęć i umiejętność wskazania w tekście: wersu, rymu, strofy, refrenu, liczb sylab w wersie", "Znajomość pojęć i wskazanie przykładów: legend, baśni, opowiadań, komiksów, monologów, dialogów", "Umiejętność opowiadania o wydarzeniach fabuły oraz ustalania kolejności zdarzeń (plan wydarzeń ogólny i szczegółowy)", "Części mowy i ich cechy: czasownik, rzeczownik, przymiotnik, przysłówek, liczebnik", "Typy wypowiedzeń: oznajmujące, pytające i rozkazujące", "Wyjaśnianie i rozpoznawanie w wypowiedziach (związki frazeologiczne, wyrazy neutralne, zdrobnienia, zgrubienia, synonimy, antonimy, nadawca i odbiorca komunikatu", "Znajomość pojęć: głoska, litera, sylaba, akcent", "Zastosowanie reguł akcentowania wyrazów", "Znajomość i umiejętność zastosowania zasad ortograficznych i reguł pisowni", "Poprawne używanie znaków interpunkcyjnych: kropki, przecinka, znaku zapytania, znaku wykrzyknika, cudzysłowu, dwukropka, średnika, nawiasu", "Umiejętność pisania tekstów (dialog, opowiadanie, życzenia, plan wydarzeń)", "Wygłaszanie z pamięci tekstów poetyckich", "Umiejętność korzystania z informacji zawartych w różnych źródłach, gromadzenia wiadomości, selekcjonowania informacji", "Znajomość i umiejętność zastosowania zasad korzystania z zasobów bibliotecznych: Umiejętność korzystania ze słowników ogólnych i specjalistycznych języka polskiego (słownik języka polskiego, słownik ortograficzny, słownik frazeologiczny, słownik synonimów)", "Rozwijanie umiejętności krytycznej oceny pozyskanych informacji", "Poznawanie życia kulturalnego swojego regionu", "Rozwijanie umiejętności efektywnego posługiwania się technologią informacyjną oraz zasobami internetowymi i wykorzystywania tych umiejętności do prezentowania własnych zainteresowań"];
var polskiIII = ["części mowy (rzeczownik, czasownik, przymiotnik)" , "wyjątkowi Polacy, np. Jan Paweł II, św. Faustyna Kowalska, Mikołaj Kopernik...", "krótkie formy wypowiedzi pisemnej: krótkie opowiadanie (6-10 zdań), opis osoby, list"];
var polskiII = ["liczba pojedyncza i mnoga", "znajomość tradycji Bożonarodzeniowych i Wielkanocnych", "krótkie formy wypowiedzi pisemnej: ogłoszenie, zaproszenie"];
var polskiI = ["wybrany wiersz na pamięć", "znajomość alfabetu", "rozróżnianie spółgłosek i samogłosek", "wyróżnianie zdań w tekście i wyrazów w zdaniu", "czytanie ze zrozumieniem krótkich tekstów", "kaligrafowanie", "zasady używania wielkich i małych liter", "znajomość dni tygodnia, nazwy miesięcy, pór roku"];
var polskiUli = [...polskiV, ...polskiIV, ...polskiIII, ...polskiII, ...polskiI];
var polskiBasi = [...polskiIII, ...polskiII, ...polskiI];
var polskiAni = [];
var polskiUlaumie = [];
var polskiUlauczy = [];
var polskiUlateraz = [];
polskiUlauczy = polskiUli.filter(function(element) {return !polskiUlaumie.includes(element) && !polskiUlateraz.includes(element); });
var polskiBasiaumie = [];
var polskiBasiauczy = [];
var polskiBasiateraz = [];
polskiBasiauczy = polskiBasi.filter(function(element) {return !polskiBasiaumie.includes(element) && !polskiBasiateraz.includes(element); });
var polskiAniaumie = [];
var polskiAniauczy = [];
var polskiAniateraz = [];
polskiAniauczy = polskiAni.filter(function(element) {return !polskiAniaumie.includes(element) && !polskiAniateraz.includes(element); });
var lekturyVI = ["Lucy Maud Montgomery, Ania z Zielonego Wzgórza"];
var lekturyV = ["Clive Staples Lewis, Opowieści z Narnii. Lew, czarownica i stara szafa (+ cała seria)", "Przypowieści ewangeliczne: o siewcy, o talentach, o pannach roztropnych, o miłosiernym samarytaninie", "Ferenc Molnar, Chłopcy z Placu Broni", "Bolesław Prus, Katarynka", "Seweryna Szmaglewska, Czarne Stopy", "Wybrane wiersze Jana Twardowskiego, Leopolda Staffa, Anny Kamieńskiej, Czesława Miłosza, Tadeusza Różewicza", "Małgorzata Musierowicz, wybrane z serii Jeżycjada", "Małgorzata Strękowska-Zaremba, Rotmistrz Witold Pilecki", "Edmund Niziurski, Sposób na Alcybiadesa", "Bolesław Prus, Kamizelka", "Mark Twain, Przygody Tomka Sawyera"];
var lekturyIV = ["Adam Mickiewicz: Powrót taty, Pani Twardowska;", "Józef Wybicki, Mazurek Dąbrowskiego", "Wybrane podania i legendy polskie (legendy o: Lechu, Piaście, Kraku i Wandzie)", "Wybrane baśnie polskie i europejskie, (np. Charles Perrault, Kopciuszek, Kot w butach, Sinobrody)", "Aleksander Puszkin, Bajka o rybaku i rybce", "Jeanne Marie Leprince de Beaumont, Piękna i Bestia)", "Księga Rodzaju, Opis stworzenia świata", "Wybrane wiersze Władysława Bełzy, Jana Brzechwy, Konstantego Ildefonsa Gałczyńskiego, Joanny Kulmowej, Juliana Tuwima", "Pieśni i piosenki patriotyczne", "Frances Hodgson Burnett, Tajemniczy ogród, lub inna powieść", "Henryk Sienkiewicz, W pustyni i w puszczy", "Maria Kownacka i Zofia Malicka, Dzieci z Leszczynowej Górki", "Selma Lagerlöf, Cudowna podróż"];
var lekturyIII = ["Justyna Bednarek, Niesamowite przygody dziesięciu skarpetek (czterech prawych i sześciu lewych)", "Łukasz Wierzbicki: Niesłychana wyprawa Benedykta i Jana, Dziadek i Niedźwiadek, Afryka Kazika", "Artur Oppman, Legendy warszawskie", "Ks. Jan Twardowski: Wielkanocne idą święta, Święta dobrych życzeń, Patyki i patyczki", "Joanna Papuzińska, Asiunia", "Agnieszka Frączek, Rany Julek! O tym, jak Julian Tuwim został poetą", "Leszek Kołakowski, Kto z was chciałby rozweselić pechowego nosorożca?", "Mary Fabyan Windeatt, Dzieci z Fatimy", "Ewa Skarzyńska, Paweł Kołodziejski, O polskich świętych dzieciom", "Barbara Tylicka, O krakowskich psach i kleparskich kotach. Polskie miasta w baśni i legendzie", "Dorota Żarska, Tomasz M. Wiśniewski, Ptaki Pana Boga"];
var lekturyII = ["Hans Christian Andersen, Baśnie (do wyboru)", "Alina i Czesław Centkiewiczowie, Zaczarowana zagroda", "Maria Kruger, Karolcia", "Astrid Lindgren, Dzieci z Bullerbyn", "Ewa Hanter, Mali przyjaciele Jezusa Eucharystycznego", "Janina Porazińska, Pamiętnik Czarnego Noska", "Maria Buyno-Arctova: Słoneczko, Kocia Mama", "Erika Gosker, Przygody Piotrka i Uli, czyli jak przygotować się do I Komunii Świętej"];
var lekturyI = ["Jan Brzechwa, Brzechwa dzieciom", "Władysław Bełza, Katechizm polskiego dziecka", "Julian Tuwim, Wiersze dla dzieci", "Maria Konopnicka, Co słonko widziało"];
var lekturyUli = [...lekturyV, ...lekturyIV, ...lekturyIII, ...lekturyII, ...lekturyI];
var lekturyBasi = [...lekturyIII, ...lekturyII, ...lekturyI];
var lekturyAni = [];
var lekturyUlaumie = ["Justyna Bednarek, Niesamowite przygody dziesięciu skarpetek (czterech prawych i sześciu lewych)", "Maria Kownacka i Zofia Malicka, Dzieci z Leszczynowej Górki", "Frances Hodgson Burnett, Tajemniczy ogród, lub inna powieść", "Henryk Sienkiewicz, W pustyni i w puszczy", "Selma Lagerlöf, Cudowna podróż", "Clive Staples Lewis, Opowieści z Narnii. Lew, czarownica i stara szafa (+ cała seria)", "Jan Brzechwa, Brzechwa dzieciom", "Julian Tuwim, Wiersze dla dzieci", "Erika Gosker, Przygody Piotrka i Uli, czyli jak przygotować się do I Komunii Świętej", "Ewa Hanter, Mali przyjaciele Jezusa Eucharystycznego", "Astrid Lindgren, Dzieci z Bullerbyn", "Maria Kruger, Karolcia", "Alina i Czesław Centkiewiczowie, Zaczarowana zagroda", "Hans Christian Andersen, Baśnie (do wyboru)", "Ks. Jan Twardowski: Wielkanocne idą święta, Święta dobrych życzeń, Patyki i patyczki", "Ks. Jan Twardowski, Nie tylko wrona chodzi zdziwiona", "Księga Rodzaju, Opis stworzenia świata", "Adam Mickiewicz: Powrót taty, Pani Twardowska;", "Józef Wybicki, Mazurek Dąbrowskiego", "Wybrane podania i legendy polskie (legendy o: Lechu, Piaście, Kraku i Wandzie)", "Przypowieści ewangeliczne: o siewcy, o talentach, o pannach roztropnych, o miłosiernym samarytaninie", "Gabriela Zapolska, Moralność pani Dulskiej", "Lucy Maud Montgomery, Ania z Zielonego Wzgórza"];
var lekturyUlauczy = [];
var lekturyUlateraz = ["Jeanne Marie Leprince de Beaumont, Piękna i Bestia)"];
lekturyUlauczy = lekturyUli.filter(function(element) {return !lekturyUlaumie.includes(element) && !lekturyUlateraz.includes(element); });
var lekturyBasiaumie = [];
var lekturyBasiauczy = [];
var lekturyBasiateraz = [];
lekturyBasiauczy = lekturyBasi.filter(function(element) {return !lekturyBasiaumie.includes(element) && !lekturyBasiateraz.includes(element); });
var lekturyAniaumie = [];
var lekturyAniauczy = [];
var lekturyAniateraz = [];
lekturyAniauczy = lekturyAni.filter(function(element) {return !lekturyAniaumie.includes(element) && !lekturyAniateraz.includes(element); });
function polskiUla() 
{
    let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('LEKTURY<br/>');
	for (let i = 0; i < lekturyUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + lekturyUlauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiUlauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + polskiUlauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + lekturyUlateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiUlateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + polskiUlateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + lekturyUlaumie[i] + '</div>');
    }
	umieElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiUlaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + polskiUlaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function polskiBasia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('LEKTURY<br/>');
	for (let i = 0; i < lekturyBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + lekturyBasiauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiBasiauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + polskiBasiauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + lekturyBasiateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiBasiateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + polskiBasiateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + lekturyBasiaumie[i] + '</div>');
    }
	umieElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiBasiaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + polskiBasiaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}
function polskiAnia()
{
	let doNaukiElement = $('#doNauki');
    doNaukiElement.empty();
	doNaukiElement.append('LEKTURY<br/>');
	for (let i = 0; i < lekturyAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + lekturyAniauczy[i] + '</div>');
    }
    doNaukiElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiAniauczy.length; i++) 
	{
        doNaukiElement.append('<div class="zagadnienie">' + polskiAniauczy[i] + '</div>');
    }
	let biezaceElement = $('#biezace');
    biezaceElement.empty();
	biezaceElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + lekturyAniateraz[i] + '</div>');
    }
	biezaceElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiAniateraz.length; i++) 
	{
        biezaceElement.append('<div class="zagadnienie">' + polskiAniateraz[i] + '</div>');
    }
	let umieElement = $('#nauczone');
    umieElement.empty();
	umieElement.append('LEKTURY<br/>');
    for (let i = 0; i < lekturyAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + lekturyAniaumie[i] + '</div>');
    }
	umieElement.append('<br/>ZAGADNIENIA<br/>');
	for (let i = 0; i < polskiAniaumie.length; i++) 
	{
        umieElement.append('<div class="zagadnienie">' + polskiAniaumie[i] + '</div>');
    }
	$('#uwagi').html('');
}