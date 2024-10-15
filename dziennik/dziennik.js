var sygnatura = 0;

var zadMatUla = ["Darek mieszkał z rodzicami, oraz swoimi dwoma braćmi i trzema siostrami. Postanowił kupić kilogram chleba razowego i obdzielić każdego (także siebie) po równo. Cena 200 g chleba razowego była tańsza o 1 zł i 37 gr od kostki masła kosztującej 4 zł 1 gr. Darek zawsze kupował świeży chleb, który dowoził pan Kazik o g. 11<sup>20</sup>. Zauważył, że do tego czasu ma jeszcze 2 godziny i 35 minut, gdyż dopiero kwadrans temu jadł śniadanie. Jednak poszedł już przygotować sobie monety dwuzłotowe do tego zakupu, które układał na specjalnej półce wzdłuż ściany co 3,5 dm. Ile gram chleba razowego zje każda osoba z rodziny, o której godzinie Darek jadł śniadanie i o ile krótszy będzie rządek dwuzłotówek na półce Darka. Czy wystarczy mu dziesięciogroszówek, które dostanie jako reszty od pani Zosi ze sklepu, by je poumieszczać w miejsce tamtych?","Krzyś postanowił wypełnić całe pudełeczko, kwadratowymi znaczkami pocztowymi o polu jednego centymetra kwadratowego każdy. Pudełeczko było prostokątem o wymiarach 6 cm na 1,2 dm. W sklepie sprzedawano komplety po 9 znaczków za jedyne 2 zł i 44 gr, a w dodatku, przy zakupie czterech kompletów naraz, dawano zniżkę 26 gr. Krzyś postanowił kupić wszystkie od razu i zapłacił w sklepie jednym banknotem z podobizną Bolesława Chrobrego. Resztę otrzymał w monetach 20-groszowych. Zauważył, że dostał tyle monet, ile kwadransów upłynęło od skończenia przez niego obiadu, a była godzina 15<sup>05</sup>. O której godzinie Krzyś skończył jeść obiad?","Good Jim wydobywał złoto na Alasce. Wydobywał jeden miligram na sekundę. Good Jim był naprawdę dobrym człowiekiem, bo sprzedawał połowę tego Poor Jack&apos;owi za symboliczne 7 dolarów za gram, a Poor Jack mógł to sprzedać dalej po 50 dolarów za gram. Dzisiaj Good Jim pracował krótko, ale potrafi precyzyjnie powiedzieć, że zaczął pracę o g. 9<sup>43</sup> i 22 sekundy, a skończył o 11<sup>56</sup> i 42 sekundy. Poor Jack dzięki niemu zarobił dziś dokładnie tyle dolarów, ile centymetrów wzrostu ma jego najstarsza córka Lucy, a jest ona wyższa o pół metra od najmłodszego jego syna Boba. Ile wzrostu ma Bob?"];
var zadMatBasia = ['2 lutego Kasia spytała swojego starszego brata, która godzina. "Jest pierwsza po południu" - odpowiedział brat."Ojej, a poprzednio, gdy cię pytałam, mówiłeś, że jest dokładnie południe!". "Tak - powiedział brat - ale poprzednio pytałaś mnie 29 stycznia". Ile godzin minęło między tymi dwoma pytaniami Kasi i ile minut brakuje do spotkania z koleżanką, które zostało zaplanowane na g. 14<sup>40</sup> tego dnia (2 lutego)?',"Marcin jeszcze nie znał się na zegarku, ale usłyszał od rodziców, że autobusy linii 150 odjeżdzają co kwadrans z przystanku autobusowego, który widział ze swojego okna. Zaciekawiony obserwował dłuższy czas przystanek i zauważył ciekawą rzecz. Otóż autobusów 120, które też co równą odległość odjeżdżały z przystanku, odjechało pięć w czasie, gdy autobusy 150 zdążyły odjechać tylko cztery. Jak często jeździły autobusy linii 120?","Staś chodził w tempie 4<sup>km</sup>/<sub>h</sub>.Dziś postanowił pochodzić po Puszczy Kampinoskiej. Ruszył o 8<sup>40</sup> z przystanku autobusowego wgłąb puszczy. Gdy przeszedł 2 km, postanowił zatrzymać się na kwadrans, po czym dzielnie przeszedł 6 km. Zauważył, że do przystanku autobusowego ma jeszcze kilometr drogi. Zatrzymał się więc na sympatycznej polance jakiś czas, z której ruszył na przystanek, z którego autobus miał odjechać za 20 minut, tj. o godzinie 12<sup>25</sup>.Ile czasu spędził Staś na sympatycznej polance?"];
var zadPolUla = ["Wyjaśnia pojęcia i wskaż w <em>Wyprawie Bombika na Smoczą Górę</em> kilka: epitetów, porównań, przenośni, zdrobnień i zgrubień","Wyjaśnij pojęcia i podaj przykłady: <b>mit, dziennik, pamiętnik, powieść; nowela; przypowieść</b>","Przygotuj do recytacji wybrany utwór: Adama Mickiewicza, Tadeusza Różewicza, Juliusza Słowackiego, Leopolda Staffa lub Jana Twardowskiego"];
var zadPolBasia = ["Opisz w kilku zdaniach świętą Barbarę."];
var histBookV = ["Życie pierwszych ludzi s.8-11","W jaki sposób oblicza się czas? oraz Od epoki kamienia do epoki żelaza s.6 oraz s.12-13","Miasta-państwa Mezopotamii s.14-17","W Babilonii s.18-19","W Egipcie faraonów s.20-22","Egipskie piramidy i dalej s.23-25","W starożytnym Izraelu s.26-29 uzupełniamy (modyfikujemy) wiedzą z Pisma Świętego!","Cywizlizacje Indii i Chin s.30-32 połowa","Wielki Mur Chiński i dalej s.32 połowa-34","Od hieroglifów do alfabetu s.35-37","Rozwój pisma oraz Tajemnice sprzed wieków s.38-39 oraz s.40-41","Podsumowanie s.42","Demokratyczne Ateny s.44-45","Starożytne Ateny i dalej s.46-48","Sparta i wojny z Persami s.49-51","Zwycięstwo Greków nad Persami i dalej s.52-54","Bogowie i mity s.55-58","Iliada i Odyseja i dalej s.59-60","Kultura starożytnej Grecji s.61-63","Nie tylko mity i dalej s.64-66","Imperium Aleksandra Wielkiego s.67-69","cd. Aleksandra Wielkiego oraz Tajemnice sprzed wieków s.70-71 oraz 72-73","Podsumowanie s.74","Ustrój starożytnego Rzymu s.76-78","ciąg dalszy s.79-80","Imperium Rzymskie s.81-83","Podział, upadek cesarstwa i języki s.84-85","Życie w Wiecznym Mieście s.86-89","Dokonania starożytnych Rzymian s.90-93","Prawo rzymskie s.94-95","Początki chrześcijaństwa s.96-99 uzupełniamy (modyfikujemy) wiedzą!","Tajemnice sprzed wieków s.100-101","Podsumowanie s.102","Bizancjum w czasach świetności s.104-106","Osiągnięcia naukowe i dalej s.107-108","Arabowie i początki islamu s.109-111","Osiągnięcia Arabów i dalej s.112-113","Nowe państwa w Europie s.114-116","Korona cesarska w rękach władców niemieckich i dalej s.117-118","Konflikt papiestwa z cesarstwem s.119-121","Wyprawy krzyżowe s.122-124","Zakony rycerskie i dalej s.125-127","Tajemnice sprzed wieków s.128-129","Podsumowanie s.130","System feudalny s.132-135","Epoka rycerzy s.136-139","Tajemnice sprzed wieków s.140-141","Średniowieczne miasto i wieś s.142-145","Życie w średniowiecznym mieście i dalej s.146-147","Kościół w średniowieczu s.148-150 uzupełniamy (modyfikujemy) wiedzą!", "Praca średniowiecznych kopistów i dalej s.151-152 uzupełniamy (modyfikujemy) wiedzą!","Sztuka średniowiecza s.153-155","Sztuka epoki średniowiecza i dalej s.156-157","Podsumowanie s.158","Zanim powstała Polska s.160-161","Najstarsze wiadomości o Słowianach i dalej s.162-164","Mieszko I i początki Polski s.165-167","W obronie granic i dalej s.168-169","Polska Bolesława Chrobrego s.170-172 połowa","Tekst źródłowy i dalej s.172 połowa-174","Kryzys i odbudowa państwa polskiego s.175-178","Rządy Bolesława Krzywoustego s.179-182","Społeczeństwo w czasach pierwszych Piastów s.183-185","Obowiązki mieszkańców państwa i dalej oraz Tajemnice sprzed wieków s.186-187 oraz s.188-189","Podsumowanie s.190","Rozbicie dzielnicowe s.192-194","Ziemie polskie w XIII wieku i dalej s.195-197","Zjednoczenie Polski s.198-200 połowa","Tekst źródłowy Jana Długosza i dalej s.200 połowa-202","Czasy Kazimierza Wielkiego s.203-205","Uczta u Wierzynka i dalej s.206-207","Unia polsko-litewska s.208-210","Bitwa pod Grunwaldem i dalej s.211-213","Tajemnice sprzed wieków s.214-215","Czasy świetności dynastii Jagiellonów s.216-218","Polska odzyskuje Pomorze Gdańskie s.219-221","Monarchia stanowa w Polsce s.222-225","Przywileje szlacheckie i dalej s.226-227","Podsumowanie s.228","Podsumowanie znajomości pojęć z połowy słowniczka s.229-232","Podsumowanie znajomości pojęć z połowy słowniczka s.233-235 i rzut okiem na s.236"];
var religiaV = ["Czym różni się prawdziwe szczęście od chwilowej przyjemności?", "Co daje Ci szczęście?", "Jak możesz pomagać w grupach/wspólnotach/rodzinie, aby inni byli szczęśliwi?", "Podaj przykłady z życia codziennego, w których ważną rolę odgrywa wiara, nadzieja i miłość.", "Z czego się składa Biblia?", "Jakie Księgi Biblijne umiesz wymienić, jakie rodzaje ksiąg znajdują się w Nowy Testamencie?", "Jakie gatunki literackie możesz znaleźć w Biblii?", "Jak czytać i interpretować Pismo Święte? Czy można brać wszystko dosłownie?", "Biblia a nauka - czy jest tu jakiś konflikt, czy da się te dwie nauki pogodzić?", "Jaki jest związek Pisma Świętego a Tradycją? Czym jest Tradycja (pisana przez wielkie T)?", "Czytasz indywidualnie Pismo Święte?", "Historie biblijne: Kain i Abel, Noe, wieża Babel.", "Wyjaśnij pojęcia: anioł, błogosławieństwo, Ewangelia, protoewangelia, wolna wola.", "Podaj przykłady postaci biblijnych w kontekście odróżniania dobra od zła", "Jakie są konsekwencje grzechu?", "Co to jest Naród Wybrany? Co oznacza słowo przymierze.", "Opowiedz historię Abrahama, Izaaka, Jakuba, Józefa Egipskiego, niewoli egipskiej, Paschy i wyjścia z Egiptu, wędrówki Narodu Wybranego, otrzymania Dekalogu. Jak Bóg troszczy się o swój lud? Jaka jest postawa ludzi wobec Boga?", "Kim był Jonasz?", "Jak Bóg objawia się ludziom? W którym momencie historii i jak objawił się w pełni?", "Jak Jezus okazuje nam miłość poprzez mękę, śmierć i zmartwychwstanie?", "Czym jest Ewangelia? Jakich znasz Ewangelistów? Czy poszczególne wersje ewangelii są takie same czy różnią się od siebie?", "Czym jest przypowieść? Jakie znasz przypowieści o Królestwie Niebieskim?", "Czym jest Kościół (pisany przez wielkie K), a czym kościół (przez małe k)?", "Wymień biblijne obrazy Kościoła - do czego możemy porównać Kościół, np. do owczarni, gdzie Jezus jest Dobrym Pasterzem.", "Jakie jest znaczenie Chrztu?", "Jak wyglądał pierwotny Kościół?", "Opowiedz o początkach Kościoła w Polsce.", "Czym jest życie konsekrowane? Czym są misje, kim są misjonarze?", "Kim są świeccy i jaka jest ich rola w Kościele?", "Jak Ty możesz udzielać się w Kościele?"];
var religiaIII = ["Czym jest modlitwa?","Jak możesz wielbić Boga, kiedy przepraszasz?", "Za kogo możesz się modlić? O co prosić Pana Boga?", "O co prosimy w Modlitwie Pańskiej?", "Wymień modlitwy Maryjne.", "Jaki sakrament oczyszcza nas z grzechów?", "Jak dobrze przygotować się do Sakramentu Pokuty i Pojednania?", "Jak odróżnić grzech lekki i ciężki?", "Jak możesz pracować nad sobą i stawać się coraz lepszym?", "Jak często powinno się przystępować do Spowiedzi?", "Na czym polega praktyka pierwszych piątków miesiąca?", "Podaj przykłady zastosowania przykazań Bożych w życiu codziennym.", "Co oznacza, że niedziela jest pamiątką Zmartwychwstania? Jak możemy świętować niedzielę?", "Omów przypowieści: „O zagubionej owcy”, „O miłosiernym ojcu”, „O miłosiernym samarytaninie”.", "Czym jest Adoracja Najświętszego Sakramentu?"];
var lektury = ["Opowieści z Narnii: Lew, czarownica i stara szafa","Opowieści z Narnii: Książę Kaspian",'Opowieści z Narnii: Podróż "Wędrowca do Świtu"'];
var dni = ["6 maja 2024 r.","7 maja 2024 r.","9 maja 2024 r.","10 maja 2024 r.","13 maja 2024 r.","14 maja 2024 r.","15 maja 2024 r.","16 maja 2024 r.","17 maja 2024 r.","21 i 23 maja 2024 r.","22 maja 2024 r.","10 czerwca 2024 r. uzupełniamy zaległości przed skromniejszym rozkładem","13 czerwca 2024 r.","29 maja 2024 r.","14 czerwca 2024 r."];
var informatyka = ["pół godziny w programie Blender","Co to jest akapit i interlinia w Wordzie(LibreOffice Writer)","Co to jest formatowanie tekstu? Jak wyczyścić formatowanie w tekście?","Po co stosujemy skróty klawiaturowe? Jakie znasz skróty klawiaturowe?","Do czego służy przycisk F5? Jak zamienić wszystkie wyrazy <em>nie</em> w tekście na <em>tak</em>?","Jakie znasz zasady tworzenia dokumentów?","Na czym polegają: <em> twarda spacja, miękki enter, kontrola bękartów i wdów</em>?","Co można zrobić z obrazem w programie MS Word i jak go przyciąć, zmienić rozmiar, usunąć tło, czy zmienić kolor?","Jakie znaki należą do znaków niedrukowanych?","Co to jest tabela i z czego się składa? Jak możemy ją edytować?","Jakie ustawienia możemy znaleźć we wstążce dedykowanej tabelom?","Jak wstawić tabelę i nadać jej nowy wygląd? Co to są: komórka, wiersz, kolumna? Jak dorysować dodatkowy wiersz i zmienić szerokość komórki?","zapoznanie z programem PowerPoint,<br/>zauważenie podobieństwa do HTML,CSS,JavaScript.<br/>Zasady tworzenia prezentacji.","Wyznaczenie tytułu prezentacji i wybór motywu slajdów.<br/>Tworzenie i formatowanie prezentacji","Przejścia i animacje w prezentacji","Muzyka i wideo w prezentacji to zaleta czy wada? Wstawianie dźwięku i wideo","Zapisanie prezentacji jako plik wideo","Scratch: rysowanie prostych kształtów i figur geometrycznych","Co to jest algorytm?","Jak określić położenie duszka i jak znaleźć środek sceny?","Pivot: co to jest klatka/pętla","Do czego służy format *.gif, *.avi?"];
var slowka = ["1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 30, 50, 70, 90, 1000","2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40, 60, 80, 100, 1000000","jabłko,pomidor,marchewka,czosnek,ogórek,<br/>ryż,chleb,gruszka,pomarańcza,jajko","banan,ziemniak,cebula,papryka,mięso,<br/>makaron,śliwka,brzoskwinia,cytryna,mleko","sok,woda,wino,obiad,truskawka,<br/>malina,warzywo,sól,ser żółty,zupa","herbata,kawa,śniadanie,kolacja,jagoda,<br/>owoc,ciasto,deser,masło,jedzenie","rodzina,matka,syn,ciocia,siostra,<br/>dziadek,mężczyzna,mąż,dziecko,dziewczynka","ojciec,córka,wujek,brat,babcia,<br/>rodzice,kobieta,żona,chłopiec,kuzyn","kurtka,pasek,szalik,but,parasol,<br/>sukienka,kapelusz,koszula,torebka,wysokie obcasy","skarpetka,okulary,rękawiczka,spodnie,koszulka,<br/>,czapka,spódnica,płaszcz,guzik,ubierać się"];
var ortografia = ["bohater,chata,chrzan,herbata,wichura,<br/>borsuk,góra,kłótnia,mrówka,fartuch,<br/>drzewo,jarzębina,jeżyna,księżyc,rzodkiewka","krzesło,rzeka,rzepa,tchórz,żaba,<br/>spokój,również,mucha,kura,jaskółka,<br/>trochę,schody,filharmonia,machać,wahać","blacha,chcieć,hamak,chłopiec,hiena,<br/>cebula,chustka,kółko,który,ucho,<br/>brzeg,dżem,grzyb,leżeć,przygoda","żołądek,wąchać,pompa,mądry,legenda,<br/>też,tuż,jeż,już,wąż,<br/>kruk,kukułka,jaskółka,kogut,krówka"]

var dzien = [dni[14],dni[13],dni[12],dni[11],dni[10],dni[9],dni[8],dni[6],dni[5] + ' oraz ' + dni[7],dni[4],dni[3],dni[2],dni[1],dni[0],"<b>data</b>"];
var religiaUla = [religiaV[12],"",religiaV[11],religiaV[10],religiaV[9],religiaV[8],religiaV[7],religiaV[6],religiaV[5],religiaV[4],religiaV[3],religiaV[2],religiaV[1],religiaV[0],"<b>religia Ula</b>"];
var religiaBasia = [religiaIII[12],"",religiaIII[11],religiaIII[10],religiaIII[9],religiaIII[8],religiaIII[7],religiaIII[6],religiaIII[5],religiaIII[4],religiaIII[3],religiaIII[2],religiaIII[1],religiaIII[0],"<b>religia Basia</b>"];
var matematykaUla = ["","","",zadMatUla[2],"Oblicz:<br/>0.25 + 0.01 =<br/>0.3 + 0.001=<br/>1.1 + 0.11 =<br/>10.01 + 1.1 =<br/>8.27 + 1.73=","Zamień na ułamek dziesiętny: <sup>1</sup>/<sub>5</sub> <sup>3</sup>/<sub>4</sub> <sup>5</sup>/<sub>8</sub>","",zadMatUla[1],"nauka NWD i NWW na przykładach: NWD(36,48), NWD(56, 84), NWW(8,28), NWW(12,16)","Rozłóż następujące liczby na czynniki pierwsze: 198, 315, 486, 768","Rozłóż następujące liczby na czynniki pierwsze: 375, 567, 8192",zadMatUla[0],"Które liczby są złożone: 3, 9, 13, 22, 31, 41, 45, 69","Które liczby są pierwsze: 2, 7, 15, 23, 33, 49, 51, 61?","<b>matem Ula</b>"];
var matematykaBasia = ["","","",zadMatBasia[2],"Oblicz:<br/>77 - 56 =<br/>92 - 9 =<br/>13 + 39 =<br/>91 - 19 =<br/>66 + 55=","<br/>15 g + 45 g = ... dag<br/>23 dag - 150g = ... g<br/>650 g + 35 dag = ... kg","",zadMatBasia[1],"Oblicz: {[(37 + 43) : (71 - 63)] x [(44 + 37) : (102 - 93)]} + 3 x 6","Oblicz:<br/>2x4 + 3x3 + 8x8<br/>--------------------- =<br/>7x9 - 6x8 - 54:9","<br/>L - IX x IV<br/>C - X x VIII<br/>LX + XL<br/>V x VIII + VII x IX<br/><br/>Wzdłuż 1 cm można ułożyć 1 g ziarenek. Na jakiej odległości należy ułożyć ziarenka, by ważyły pół kg?",zadMatBasia[0],"Oblicz: 9x5, 7x7, 4x6, 3x9, 2x7, 9x8, 5x7, 6x7 ","Oblicz: 6x5, 4x7, 3x8, 2x9, 7x5, 8x4, 9x9, 4x4","<b>matem Basia</b>"];
var lekturaUla = [lektury[2],"",lektury[2],lektury[2],lektury[2],lektury[2],lektury[2],lektury[2],lektury[2],lektury[2],lektury[2],lektury[1],lektury[1],lektury[1],"<b>lektura Ula</b>"];
var lekturaBasia = [lektury[2],"",lektury[2],lektury[2],lektury[1],lektury[1],lektury[1],lektury[1],lektury[1],lektury[1],lektury[1],lektury[1],lektury[0],lektury[0],"<b>lektura Basia</b>"];
var polskiUla = ["","","Dyktando:<br/>" + ortografia[3],zadPolUla[2],"Dyktando:<br/>" + ortografia[2],"",zadPolUla[1],"",zadPolUla[0],"","Dyktando: " + ortografia[1],"Dyktando: " + ortografia[0],"","","<b>gram pol Ula</b>"];
var polskiBasia = ["","","Dyktando:<br/>" + ortografia[3],zadPolBasia[0],"Dyktando:<br/>" + ortografia[2],"Zapoznaj się z trzema legendami polskimi","Napisz krótkie opowiadanie na temat: Jak mogło wyglądać spotkanie Aslana z faunem Panem Tumnusem na Latarnianym Pustkowiu.","","napisz ze słyszenia: tchórz, również, jaskółka, wahać, borsuk, kłótnia, mrówka, jarzębina, jeżyna, rzodkiewka","","Dyktando: " + ortografia[1],"Dyktando: " + ortografia[0],"","","<b>gram pol Basia</b>"];
var slowkaAngUla = [slowka[9],"",slowka[8],slowka[7],slowka[6],slowka[5],slowka[4],"",slowka[3],slowka[2],"","",slowka[1],slowka[0],"<b>słówka Ula</b>"];
var slowkaAngBasia = [slowka[8],"",slowka[9],slowka[6],slowka[7],slowka[4],slowka[5],"",slowka[2],slowka[3],"","",slowka[0],slowka[1],"<b>słówka Basia</b>"];
var angielskiUla = ["","","Przypomnij sobie rzeczowniki policzalne i niepoliczalne","Podaj stopień wyższy i najwyższy dla: big, small, happy, easy, good","Zapoznaj się z lekcją o stopniowaniu przymiotników<br/><em>strona startowa->strona tatusia->Dzieci nauka->angielski->gramatyka->stopniowanie przymiotników</em>","Przetłumacz z konstrukcją <em>be going to</em>:<br/>Czy zamierzasz zjeść ogórka?<br/>Czy słoń zamierza szukać kwiatka?<br/>Czy zamierzamy iść wcześnie spać?<br/>Czy on sprzeda mi ołówek?","","Uzupełnij odpowiednią formą <em>be going to</em> i przetłumacz:<br/>She ... get on the train.<br/>I ... go to the church.<br/>We ... have breakfast.<br/>Parrot ... fly away from the tree.","","Przywitanie się i przedstawienie","","","","","<b>angiel Ula</b>"];
var angielskiBasia = ["","","","Napisz 5 zdań ze słowem <em>can</em>, co potrafisz robić.","","Przetłumacz z konstrukcją <em>have got</em> lub <em>has got</em>:<br/>Czy dzieci mają kurtki?<br/>Czy kot ma szare uszy?<br/>Czy oni mają osiem czosnków?<br/>Czy wujek ma 30 zębów?","","Uzupełnij <em>have got</em> lub <em>has got</em> i przetłumacz:<br/>My sisters ... nice eyes.<br/>I ... nice eyes, too<br/>My Mom ... a lot of work today.<br/>The bus ... big doors","","Przywitanie się i przedstawienie","","","","","<b>angiel Basia</b>"];
var informatykaUla = ["","","","","","",informatyka[0] + "<br/>" + informatyka[8],informatyka[0] + "<br/>" + informatyka[7],informatyka[0] + "<br/>" + informatyka[6],informatyka[0] + "<br/>" + informatyka[5],informatyka[4],informatyka[0] + ";<br/><s>" + informatyka[3]  + '</s>',informatyka[2],informatyka[1],"<b>inform Ula</b>"];
var informatykaBasia =["","","","","","",informatyka[0] + "<br/>" + informatyka[8],informatyka[0] + "<br/>" + informatyka[7],informatyka[0] + "<br/>" + informatyka[6],informatyka[0] + "<br/>" + informatyka[5],informatyka[4],informatyka[0] + ";<br/><s>" + informatyka[3]  + '</s>',informatyka[0] + ";<br/>" + informatyka[2],informatyka[1],"<b>inform Basia</b>"];
var zagadnieniaBasia = ["","","","jak się ma wiersz?","","","","ćwiczenie wiersza","Wykaż znajomość ważnych dat dla naszej Ojczyzny","Wykaż znajomość godła, flagi, hymnu narodowego","Wskaż rzeczowniki, czasowniki i przymiotniki w wierszu o kotku Psotku","","ćwiczenie wiersza","Który wiersz na pamięć?","<b>zagadn Basia</b>"];
var wiodacyUla = [histBookV[20],"",histBookV[11],histBookV[10],histBookV[9],histBookV[8],histBookV[7],histBookV[6],histBookV[5],histBookV[4],histBookV[3],histBookV[2],histBookV[1],histBookV[0],"<b>historia Ula</b>"];

var naglowek = [dzien[dzien.length - 1],religiaUla[religiaUla.length - 1],religiaBasia[religiaBasia.length - 1],matematykaUla[matematykaUla.length - 1],matematykaBasia[matematykaBasia.length - 1],lekturaUla[lekturaUla.length - 1],lekturaBasia[lekturaBasia.length - 1],polskiUla[polskiUla.length - 1], polskiBasia[polskiBasia.length - 1],slowkaAngUla[slowkaAngUla.length - 1],slowkaAngBasia[slowkaAngBasia.length - 1],angielskiUla[angielskiUla.length - 1],angielskiBasia[angielskiBasia.length - 1],informatykaUla[informatykaUla.length - 1],informatykaBasia[informatykaBasia.length - 1],zagadnieniaBasia[zagadnieniaBasia.length - 1],wiodacyUla[wiodacyUla.length - 1]];

var wszystkie = [];
for (let i = 0; i < dzien.length - 1; i++)
{
	wszystkie.push(dzien[i]);
	wszystkie.push(religiaUla[i]);
	wszystkie.push(religiaBasia[i]);
	wszystkie.push(matematykaUla[i]);
	wszystkie.push(matematykaBasia[i]);
	wszystkie.push(lekturaUla[i]);
	wszystkie.push(lekturaBasia[i]);
	wszystkie.push(polskiUla[i]);
	wszystkie.push(polskiBasia[i]);
	wszystkie.push(slowkaAngUla[i]);
	wszystkie.push(slowkaAngBasia[i]);
	wszystkie.push(angielskiUla[i]);
	wszystkie.push(angielskiBasia[i]);
	wszystkie.push(informatykaUla[i]);
	wszystkie.push(informatykaBasia[i]);
	wszystkie.push(zagadnieniaBasia[i]);
	wszystkie.push(wiodacyUla[i]);
}
function pisz()
{
	$("#dziennik").html('');
	for (let i = 0; i < naglowek.length; i++)
	{
		$("#dziennik").append('<div class="ramka">' + naglowek[i] + '</div>');
	}
	$("#dziennik").append('<br/><br/>');
	for (let i = 0; i < wszystkie.length; i++)
	{
		$("#dziennik").append('<div class="ramka">' + wszystkie[i] + '</div>');
	}
}
function wyswietl()
{
	$(".dzien").html('');
	$("#Ula").html('');
	$("#Basia").html('');
	$(".dzien").append(dzien[sygnatura]);
	for (let i = 1; i < 17; i ++)
	{
		
		if (i < 15)
		{
			if (i % 2 == 1)
			{
			if (i == 1)
				$("#Ula").append('<b>Religia</b>: ');
			if (i == 3)
				$("#Ula").append('<b>Matematyka</b>: ');
			if (i == 5)
				$("#Ula").append('<b>Lektura</b>: ');
			if (i == 7)
				$("#Ula").append('<b>Polski</b>: ');
			if (i == 9)
				$("#Ula").append('<b>Słówka</b>: ');
			if (i == 11)
				$("#Ula").append('<b>Angielski</b>: ');
			if (i == 13)
				$("#Ula").append('<b>Informatyka</b>: ');
			$("#Ula").append(wszystkie[sygnatura * 17 + i]);
			$("#Ula").append('<br/>');
			}
			else
			{
			if (i == 2)
				$("#Basia").append('<b>Religia</b>: ');
			if (i == 4)
				$("#Basia").append('<b>Matematyka</b>: ');
			if (i == 6)
				$("#Basia").append('<b>Lektura</b>: ');
			if (i == 8)
				$("#Basia").append('<b>Polski</b>: ');
			if (i == 10)
				$("#Basia").append('<b>Słówka</b>: ');
			if (i == 12)
				$("#Basia").append('<b>Angielski</b>: ');
			if (i == 14)
				$("#Basia").append('<b>Informatyka</b>: ');
			$("#Basia").append(wszystkie[sygnatura * 17 + i]);
			$("#Basia").append('<br/>');
			}
		}
		else if (i == 15)
		{
			$("#Basia").append('<b>Zagadnienie</b>: ' + wszystkie[sygnatura * 17 + i]);
			$("#Basia").append('<br/>');
		}
		else
		{
			if (i == 16)
				$("#Ula").append('<b>Historia</b>: ');
			$("#Ula").append(wszystkie[sygnatura * 17 + i]);
			$("#Ula").append('<br/>');
		}
	}
	$(".obowiazkowe").html("INSTRUMENTY<br/>busuu i FISZKI</s>");
	$("#obrazekUla").html('<img src="img/10.jpg" width="70%" />');
	$("#obrazekBasia").html('<img src="img/8.jpg" width="70%" />');
	//$("#ekstra").html('<span style="color: blue;">I</span><span style="color: lime;">M</span><span style="color: red;">I</span><span style="color: yellow;">E</span><span style="color: tan;">N</span><span style="color: brown;">I</span><span style="color: forestgreen;">N</span><span style="color: cyan;">Y</span><br/><span style="color: gold;">U</span><span style="color: maroon;">L</span><span style="color: indigo;">I</span>');
}