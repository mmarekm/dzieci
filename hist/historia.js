var zagadnienie = ['<span style="font-size: 30px;">Pierwsze cywilizacje</span>','<a href="V1.html">Życie pierwszych ludzi</a>','<a href="V2.html">Miasta-państwa Mezopotamii</a>','<a href="V3.html">W Egipcie faraonów</a>','<a href="V4.html">W starożytnym Izraelu</a>','<a href="V5.html">Cywilizacje Indii i Chin</a>','<a href="V6.html">Od hieroglifów do alfabetu</a>','<span style="font-size: 30px;">Starożytna Grecja</span>','<a href="V7.html">Demokratyczne Ateny</a>','<a href="V8.html">Sparta i wojny z Persami</a>','<a href="V9.html">bogowie i mity</a>','<a href="V10.html">Kultura starożytnej Grecji</a>','<a href="V11.html">Imperium Aleksandra Wielkiego</a>','<span style="font-size: 30px;">Starożytny Rzym</span>','<a href="V12.html">Ustrój starożytnego Rzymu</a>','<a href="V13.html">Imperium Rzymskie</a>','<a href="V14.html">Życie w Wiecznym Mieście</a>','<a href="V15.html">Dokonania starożytnych Rzymian</a>','<a href="V16.html">Początki chrześcijaństwa</a>','<a href="V17.html">Bursztynowy Szlak</a>'];
function zagadnienia()
{
    let zagadnieniaElement = $('#lista');
    zagadnieniaElement.empty();
    for (let i = 0; i < zagadnienie.length; i++)
        zagadnieniaElement.append('<div class="zagadnienie">' + zagadnienie[i] + '</div>');  
}

function v1()
{
$('#tresc').html('4 mln lat p.Chr. w Afryce pierwsi ludzie (Australopitek)<br/>2,5 mln lat p.Chr. Homo habilis<br/>1,9 mln lat p.Chr. Homo Erectus<br/><br/>1,5 mln lat p.Chr. najstarszy pięściak. Umiejętność rozpalania ognia i wykształcenie się mowy. Tryb koczowniczy.<br/><br/>200 tys lat p.Chr. Homo Sapiens<br/><br/>30 tys lat p.Chr. najstarszy bumerang z kła mamuta w jaskini Obłazowej.<br/><br/>10 tys lat p.Chr. początki rolnictwa i hodowli. Tryb osiadły (rewolucja neolityczna).<br/><br/>W zależności od materiału do wytwarzania bronii nastąpiły kolejno: epoka kamienia, epoka brązu, epoka żelaza(1200 r.p.Chr.).');
$('#obrazek').html('<img style="width: 100%; "src="img/bumerang.jpg" />');
}

function v2()
{
$('#tresc').html('3,5 tys lat p.Chr. Wzdłuż rzek Tygrys i Eufrat Sumerowie. Jeden nadzorca pilnował budowy kanałów nawadniających. Wprowadzone podatki.<br/><br/>Otoczone murami handlujące ze sobą miasta-państwa, m.in.:<br/><br/>Ur - szczyt potęgi w XXI w. p. Chr., 65 tys ludności (sztandar z Ur)<br/>Babilonia - szczyt potęgi XVIII w. p. Chr. Władca Hammurabi podbił Sumerię i opracował surowy Kodeks. Opisane przez Herodota w V w. p. Chr.<br/><br/>Wymyślone koło, żagiel, koło garncarskie, pismo i system 60 (czas, miary kątów). Rok - 12 miesięcy, tydzień - 7 dni');
$('#obrazek').html('<img style="width: 100%;" src="img/ur1.jpg" /><img style="width: 100%;" src="img/ur2.jpg" />');
}

function v3()
{
$('#tresc').html('3 tys lat p.Chr. w dolinie rzeki Nil państwo egipskie. Budowy kanałów nawadniających.<br/><br/>Z nieograniczoną władzą faraon, potem kapłani, urzędnicy, rzemieślnicy, żołnierze, chłopi, niewolnicy.<br/><br/>Politeizm. Wzniesiono piramidy, w których grobowce zmumifikowanych faraonów (grobowiec Tutenchamona).<br/><br/>opracowanie hieroglifów<br/><br/>Poznanie budowy ciała człowieka<br/><br/>Rok - 365 dni, 12 miesięcy po 30 dni + 5 dodatkowych');
$('#obrazek').html('<img style="width: 100%;" src="img/hieroglify.jpg" />');
}

function v4()
{
$('#tresc').html('Judaizm. Tora. Abraham - ojciec Żydów i Arabów z Mezopotamii dotarł do Kanaan.<br/><br/>XIII w. p.Chr. Bóg ręką Mojżesza wyprowadził Izrael z Egiptu do Palestyny. Dekalog na Górze Synaj.<br/><br/>X w. p.Chr. utworzenie państwa i szczyt potęgi za czasów Dawida i Salomona (zbudowana świątynia), po którym rozpad i upadek państwa.<br/><br/>VI w. p.Chr. Babilończycy zdobyli Jerozolimę (zniszczyli świątynię) i uprowadzili Żydów do niewoli.<br/><br/>Po upadku Babilonu Izrael wrócił.<br/><br/>Wciąż najeżdzany w I w. p.Chr. podbity przez Rzym (po ostatecznie zniszczonej świątyni została Ściana Płaczu). Po Powstaniach w I i II w. wypędzony z Palestyny i rozproszony po świecie.');
$('#obrazek').html('<img style="width: 100%;" src="img/ściana.jpg" />');
}

function v5()
{
$('#tresc').html('3 tys lat p.Chr. nad rzeką Indus. Budowy kanałów nawadniających.<br/>Żyli w miastach, w których mieli wodociąg i kanalizację.<br/><br/>Mieli swoje pismo i handlowali z innymi ludami<br/><br/>1500 r. p.Chr. podbici przez Ariów, którzy podzielili ich na mnóstwo kast, których członkowie nie mogli się nawet kontaktować.<br/>Zwielokrotniony politeizm (hinduizm).<br/><br/>Wprowadzili system dziesiętny, który rozpowszechnili Arabowie.<br/><br/><br/><span style="color: yellow;">3 tys lat p.Chr. nad rzekami Huang He i Jangcy cywilizacja chińska. Budowy kanałów nawadniających.<br/><br/>Wiele królestw zjednoczonych w III w. p.Chr. Cesarz.<br/><br/>Z powodu ataków koczowników z północy, wznoszono Mur Chiński<br/><br/>Wynaleziono papier, porcelanę, proch strzelniczy, igłę magnetyczną, jedwab.<br/><br/>Medycyna oparta na zielarstwie, budowali otoczone murami miasta z pałacem, ogrodami i pagodą. Druk.<br/><br/>II w. handlarze z Europy na Jedwabnym Szlaku po cenny chiński towar.<br/><br/>Odnaleziono w grobowcu pierwszego cesarza terakotową armię ok. 8 tys. żołnierzy w skali 1:1</span>');
$('#obrazek').html('<img style="width: 100%;" src="img/mur.jpg" />');
}

function v6()
{
$('#tresc').html('4 tys p.Chr. - wynalezienie pisma - koniec prehistorii, początek starożytności<br/><br/>Wcześniej malowidła w jaskiniach (Lascaux - 15 tys lat p.Chr.)<br/>Pierwsze pisma były obrazkowe (hieroglify)<br/>Malowane lub wykuwane. W Egipcie na papirusie wytwarzanym z trzciny.<br/><br/>W Mezopotamii piktogramy uproszczono do odciskanego na glinianych tabliczkach pisma klinowego.<br/><br/>XI w. p.Chr. Fenicjanie, pływający handlarze, przyporządkowali znak każdej głosce dając początek alfabetowi 22-spółgłoskowemu<br/><br/>Grecy dodali samogłoski, oraz znaki interpunkcyjne z zasadą pisania od lewej (odwrotnie do Fenicjan)<br/><br/>Rzymianie zmienili kształt liter i wprowadzili alfabet łaciński');
$('#obrazek').html('<img style="width: 100%;" src="img/lascaux.jpg" /><img style="width: 100%;" src="img/pismoKlinowe.jpg" />');
}

function v7()
{
$('#tresc').html('II tysiąclecie p.Chr. osiedlanie się pierwszych Hellenów - greckich plemion - na Helladzie (w Grecji). Kształtowały się polis (miasta-państwa) do VIII w. p. Chr., których granicami były góry.<br/><br/>V w. p.Chr. Ateny - największe polis w ustroju demokratycznym, którego twórcą był Perykles. 100 tys mieszkańców. Prawo głosu mieli mężczyźni z korzeniami ateńskimi. <br/><br/>Agora - centralny plac miasta.<br/>Akropol - wzgórze nad miastem otoczone murami.<br/>Budowle z marmuru. Politeizm.');
$('#obrazek').html('<img style="width: 100%;" src="img/Grecja.png" />');
}

function v8()
{
$('#tresc').html('Sparta - druga po Atenach - podbiła południe Grecji.<br/>Mieszkańcami byli głównie wojownicy. Słabe noworodki porzucano w górach. Edukacja chłopców od 7 do 12 roku życia, a następnie kierowanie ich do koszar. Obowiązkowa służba wojskowa wieku 20-30, po której stanie się pełnoprawnym obywatelem.<br/><br/>Mieszkańcami też niewolnicy (heloci) i handlarze z rzemieślnikami (periojkowie).<br/><br/>Geruzja - rada starszych (powyżej 60. roku życia)<br/><br/><br/><span style="color: yellow;">VI-V w. p.Chr. Persowie podbili dużą część Azji (m.in. Mezopotamię) i Egipt.<br/><br/>499 r. p.Chr. zdławione powstanie Greków z Miletu z ateńskim wsparciem przeciw Persom.<br/>490 r. p.Chr. w odwecie najazd Persów (król Dariusz) na Ateny i zwycięstwo znacznie mniej liczebnych Aten nad Persami pod Maratonem.<br/>480 r. p.Chr. Grecja jednoczy się wobec najazdu Persów (król Kserkses) i wygrywają pod Termopilami. Na wskutek zdrady Persowie okrążyli Greków. Wszyscy uciekli z wyjątkiem 300 Spartan (król Leonidas), którzy walczyli do końca.<br/>Ateny (wódz Temistokles) wywołały Persów do walki na morzu i pokonały ich przy wyspie Salamina. Odwrót Persów.<br/><br/>hoplici - najważniejsza grecka formacja wojskowa</span>');
$('#obrazek').html('<img style="width: 100%;" src="img/wojnyGreckoPerskie.png" />');
}

function v9()
{
$('#tresc').html('Starożytni Grecy wierzyli, że bogowie mieszkali na górze Olimp. Zwłaszcza na Akropolu wznieśli im świątynie.<br/>W ich mitologii znajdują się bogowie i herosi m.in.: Zeus, Posejdon, Hades, Hera, Atena, Hefajstos, Hermes, Ares, Apollo, Afrodyta i Herakles (heros).<br/><br/>VIII w. p.Chr. Homerowi przypisuje się autorstwo <em>Iliady</em> i <em>Odyseji</em>.');
$('#obrazek').html('<img style="width: 100%;" src="img/homer.jpg" />');
}

function v10()
{
$('#tresc').html('Rzeźbienie z maruru, brązu i drewna zdobionego kością słoniową i złotem.<br/>Fidiasz (Atena na Akropolu, Zeus w Olimpii) i Myron (Dyskobol V w. p.Chr.).<br/><br/>VI w. p.Chr. podczas Dionizji występy teatralne (tragedie i komedie) pełniące funkcję edukacyjną. Wzniesiono amfiteatry.<br/>Dzięki konkursom teatralnym sławę zdobyli m.in.: Ajschylos, Sofokles, Eurypides i Arystofanes.<br/><br/>Nauka i filozofia: Pitagoras, Tales, Hipokrates, Sokrates, Platon, Arystoteles.<br/><br/>776 r. p. Chr. pierwsze igrzyska olimpijskie (tylko mężczyźni, co cztery lata), a na nich zwłaszcza pięciobój olimpijski: biegi, skok w dal, zapasy, rzut dyskiem, rzut oszczepem.<br/>Igrzyska trwały do IV w., ponownie otwarte w 1896 r.');
$('#obrazek').html('<img style="width: 100%;" src="img/dyskobol.jpg" />');
}

function v11()
{
$('#tresc').html('334 r. p.Chr. Aleksander Macedoński (Wielki), kontynuując plan zmarłego nagle ojca, Filipa II (382-336), wspólnie z Grecją (wykorzystując konflikt Sparty z Atenami) pokonał Persję nad rzeką Granik.<br/><br/>333 r. p.Chr. Zwycięstwo nad Persami pod Issos (mozaika z ok. 100 r. p.Chr.) i przejęcie Syrii, Fenicji, Palestyny i Egiptu (tam Aleksandria z biblioteką zawierającą ok. 700 tys. pism) - hellenizacja.<br/><br/>331 r. p.Chr. decydujące zwycięstwo nad Persją (śmierć króla Dariusza III) w bitwie pod Gaugamelą.<br/><br/>327 r. p.Chr. Pochód zwycięski Aleksandra zatrzymany przez Indie nad rzeką Indus.<br/><br/>323 r. p.Chr. choroba, nagła śmierć Aleksandra w Babilonie i podział jego państwa między greckich zdobywców.<br/><br/>Panowanie Greków we wschodnich krajach zakończyli po 300 latach Rzymianie.');
$('#obrazek').html('<img style="width: 100%;" src="img/issos.jpg" />');
}

function v12()
{
$('#tresc').html('753 r. p.Chr. założony Rzym wg legendy o Romulusie i Remusie.<br/>Zamieszkany przez Latynów w krainie Lacjum.<br/><br/>Panowało 7 królów do 509 r. p.Chr., w którym to ustanowiono republikę w miejsce monarchii;<br/>Wybierani podczas <em>zgromadzenia ludowego</em> przez obywateli nie wynagradzani <em>urzędnicy</em>, rządzili ok. roku (kadencja).<br/>Rządził także <em>senat</em> składający się z byłych <em>urzędników</em>.<br/><br/>III w. p.Chr. dopuszczono do głosu plebejuszy (ludzie wolni, ale niebogatych rodów, jak patrycjusze), którzy początkowo wywalczyli prawo wyboru własnych <em>urzędników - trybunów ludowych</em>.<br/><br/>Wśród <em>urzędników</em> byli:<br/><em>konsulowie</em> - dwóch najważniejszych,<br/><em>pretorzy</em> - z władzą sądowniczą,<br/><em>kwestorzy</em> - odpowiedzialni za pobór podatków.<br/><br/>Na wypadek wojny ustanawiany był na sześć miesięcy <em>dyktator</em> z nieograniczoną władzą.<br/><br/><br/><span style="color: yellow;">I w. p.Chr. Gajusz Juliusz Cezar po podbiciu Galii zmusił senat do przyznania mu tytułu dożywotniego dyktatora. Zabity przez spiskowców w 44 r. p.Chr.<br/><br/>27 r. p.Chr. początek cesarstwa, gdy chaos wojny domowej wykorzystał Oktawian August, używając na cześć poprzednika nowego tytułu - cesarz (cezar).</span>');
$('#obrazek').html('<img style="width: 100%;" src="img/gajuszJuliuszCezar.jpg" />');
}

function v13()
{
$('#tresc').html('III w. p.Chr. Rzym podbił Italię, oraz należącą do fenickiej Kartaginy Sycylię.<br/>146 r. p.Chr. pokonanie i zniszczenie Kartaginy po trzech wojnach znią w III i II w. p.Chr.<br/>Do I w. p.Chr. zdobycie Grecji, Azji Mniejszej, Syrii, Egiptu, Hiszpanii i Galii (prowincje).<br/><br/>Limesy - system umocnień na linii rzek (Ren i Dunaj).<br/><br/>Uzbrojenie legionisty: hełm, 2 oszczepy, pancerz, tarcza, miecz, sandały. Używanie katapult.<br/><br/>I w. Pax Romana - po wprowadzeniu wojsk do podbitych prowincji, rozwój gospodarczy i romanizacja prowincji(rozszerzanie kultury łacińskiej).<br/><br/>III w. Rzym traci na zaczeniu na wskutek zagrożenia barbarzyńskiego od Germanów i walk wewnętrznych o władzę.<br/>IV w. Konstantynopol założony przez Konstantyna Wielkiego nową stolicą cesarstwa.<br/>395 r. podział na wschodni (kultura grecka) i zachodni (kultura łacińska) Rzym.<br/><br/>IV w. wielka wędrówka ludów po ataku Hunów osłabiła Rzym.<br/>476 r. Wandale jak wandale pokonali ostatniego cesarza Romulusa Augustulusa. Koniec starożytności.');
$('#obrazek').html('<img style="width: 100%;" src="img/imperiumRzymskie.jpg" />');
}

function v14()
{
$('#tresc').html('I-II w. Rzym - największe miasto świata z ok. 10<sup>6</sup> mieszkańców.<br/>Wznoszone wokół Forum Romanum (głównego placu - rynku) senat, teatry, bazyliki (pełniących funkcję sądu lub hali targowej) itp.<br/><br/>Rozrywki: ucztowanie (bogaci patrycjusze) i widowiska w amfiteatrach (też biedni plebejusze).<br/>Tam przedstawienia i walki gladiatorów.<br/><br/>Patrycjusze - sprawowali najważniejsze urzędy<br/>Plebejusze - trudnili się rzemiosłem i handlem<br/>Niewolnicy - pozbawieni praw<br/><br/>Politeizm. Na wzór Greków wznoszone świątynie.<br/><br/>Powyższa wiedza dzięki m.in. wykopaliskom w Pompejach zniszczonych przez wybuch wulkanu Wezuwiusz 24 VIII 79 r.');
$('#obrazek').html('<img style="width: 100%;" src="img/Rzymianie.jpg" />');
}

function v15()
{
$('#tresc').html('Wzorowanie się na Grekach<br/><br/>Architektura - wynalezienie betonu, używanie cementu. Łuk, kopuła, akwedukt (wodociąg). Mosty, kamienne drogi. Panteon, Circus Maximus, Forum Romanum, Kolumna Trajana, Łuk triumfalny, Koloseum<br/><br/>Literatura - Wergiliusz <em>Eneida</em>, Horacy <em>Ody</em><br/><br/>Prawo - V w. Prawo XII tablic wystawionych na Forum Romanum.<br/>VI w. zebrane w Kodeksie Justyniana - podstawie obowiązujących dziś kodeksów prawnych.');
$('#obrazek').html('<img style="width: 100%;" src="img/akwedukt.jpg" />');
}

function v16()
{
$('#tresc').html('<b>Gdy nadeszła pełnia czasów, Bóg posłał swego Syna, naszego Pana, Jezusa Chrystusa, na ziemię.</b><br/>Żydzi, zwłaszcza uczeni w piśmie i faryzeusze, odrzucili naukę Pana Jezusa i doprowadzili do Jego ukrzyżowania, zasądzonego przez rzymskie władze.<br/><br/><b>Pan Jezus zmartwychwstał,<br/>wstąpił do nieba<br/>i zesłał na Apostołów Ducha Świętego</b>,<br/>który pomógł im rozpowszechnić Dobrą Nowinę (Ewangelię) poza granice Palestyny.<br/><br/>Decyzją Pana Jezusa, pierwszym biskupem rzymskim (papieżem) nad całym Kościołem, był św. Piotr.<br/><br/>313 r. po rzymskich prześladowaniach, <em>Edykt mediolański</em> wydany przez cesarza Konstantyna Wielkiego, zezwalający na swobodne wyznawanie naszej wiary.<br/>IV w. cesarz Teodozjusz nakazał chrześcijaństwo jako główną religię w Imperium Rzymskim.');
$('#obrazek').html('<img style="width: 100%;" src="img/PoczątkiChrześcijaństwa.png" />');
}

function v17()
{
$('#tresc').html('Bursztynowy szlak to droga pokonywana przez starożytnych Rzymian nad Morze Bałtyckie celem zdobycia cenionego przez nich bursztynu - skamieniałej żywicy drzew iglastych.<br/><br/>II w. Ptolemeusz wymienił na nim miejscowość <em>Calisia</em>.');
$('#obrazek').html('<img style="width: 100%;" src="img/bursztynowySzlak.jpg" />');
}