var kategorieSlowek = ['<a href="feeling.html">uczucia/emocje</a>', '<a href="work.html">czynności w pracy</a>', '<a href="shopping.html">zakupy i usługi</a>', '<a href="trip.html">podróżowanie</a>', '<a href="city.html">miasto</a>', '<a href="przyimki.html">przyimki opisujące położenie</a>', '<a href="health.html">zdrowie</a>', '<a href="computer.html">komputer i sprzęty</a>', '<a href="przeciwieństwa.html">przymiotniki/przeciwieństwa</a>', '<a href="zaimki.html">zaimki i przymiotniki dzierżawcze</a>','<a href="dane%20osobowe.html">dane osobowe</a>', '<a href="character.html">charakter</a>', '<a href="countries.html">kraje i narodowości</a>', '<a href="school.html">szkoła</a>', '<a href="job.html">zawody</a>', '<a href="przysłówki.html">przysłówki częstotliwości i spójniki</a>','<a href="house.html">dom</a>', '<a href="nature.html">przyroda i pogoda</a>','<a href="numbers.html">liczby i miary</a>', '<a href="time.html">czas</a>', '<a href="animals.html">zwierzęta</a>', '<a href="sport.html">sport</a>','<a href="speak.html">rozmowa</a>', '<a href="family.html">rodzina</a>', '<a href="body.html">ciało, wygląd i codzienność</a>', '<a href="clothes.html">garderoba</a>', '<a href="food.html">żywność</a>','<a href="przymiotniki.html">LISTA PRZYMIOTNIKÓW</a>','<a href="czasowniki.html">LISTA CZASOWNIKÓW</a>'];
var kategorieGramatyka = ['<a href="presentSimple.html">Present Simple</a>','<a href="presentContinuous.html">Present Continuous</a>','<a href="pastSimple.html">Past Simple</a>','<a href="prosteOdmiany.html"><em>to be</em> i <em>have got</em></a>','<a href="zaimkiDopełnienia.html">zaimki osobowe i dzierżawcze</a>', '<a href="przykładyDat.html">przykłady dat</a>','<a href="letUs.html">Let&apos;s</a>','<a href="przyimkiLekcja.html">przyimki</a>','<a href="spójniki.html">spójniki</a>','<a href="rzeczownikiMnoga.html">liczba mnoga rzeczowników</a>','<a href="przeliczalność.html">policzalność i niepoliczalność</a>','<a href="someAny.html"><em>some</em> i <em>any</em></a>','<a href="preferencje.html">preferencje</a>','<a href="stopniowaniePrzymiotników.html">stopniowanie przymiotników</a>','<a href="nieregularne.html">formy nieregularnych czasowników</a>'];
function wybor()
{
	let wyborElement = $('#slowka');
    wyborElement.empty();
	for (let i = 0; i < kategorieSlowek.length; i++) 
	{
        wyborElement.append('<div class="kategoria">' + kategorieSlowek[i] + '</div>');
    }
	wyborElement = $('#gramatyka');
    wyborElement.empty();
	for (let i = 0; i < kategorieGramatyka.length; i++) 
	{
        wyborElement.append('<div class="kategoria">' + kategorieGramatyka[i] + '</div>');
    }
}

function presentSimple()
{
	$('#opis').html('Używany do wyrażania powtarzających się czynności (przysłówki częstotliwości), różnych opisów, stwierdzania faktów, a także wyrażania opinii.<br/><em>The God always loves us very much. We often drink good water. They go to the forest for raspberries.</em><br/><br/>Czasownikowi trzeciej osoby liczby pojedynczej dodajemy końcówkę <b>-s</b> lub <b>-es</b>.<br/><em>He speaks to her. Dog tries to jump high. This bus goes to Gdynia</em><br/><br/>Są wyjątki:<br/>Czasowniki modalne (np. can, may, must).<br/><em>She can swim. Dog may sit down. The person must learn.</em><br/>Czasowniki nieregularne:<br/><em>He has a cat. The boy is in home.</em><br/><br/>W przeczeniach i pytaniach używamy <b>do</b> lub <b>does</b>.<br/><em>They don&apos;t speak French. She doesn&apos;t like plums. Do we go to the church? Does the cat eat cucumbers?</em>')
}

function presentContinuous()
{
	$('#opis').html('Używany do wyrażania czynności trwającej w chwili obecnej.<br/>Dodajemy odpowiednią formę czasownika <b>to be</b>, a czasownikowi dodajemy zwykle końcówkę <b>-ing</b>, jeśli czasownik kończy się na <em>e</em>, to wpierw je odejmujemy, a jeśli kończy się zestawem <em>spółgłoska-samogłoska-spółgłoska</em>, to dwoimy wpierw ostatnią spółgłoskę:<br/><em>I am lying on the bed.<br/>Dog is running to the forest.<br/>People are looking up at the sky.</em><br/><br/>Też używany do wyrażenia planowanego działania w przyszłości (<b>be going to</b>):<br/><em>I am going to buy a new bike.<br/>The woman is going to go to the shop.<br/>Mice are going to eat the cheese.</em><br/><br/>W przeczeniach dodajemy <b>not</b> po odpowiedniej formie czasownika <b>to be</b>:<br/><em>Grandfather isn&apos;t driving the car.<br/>You aren&apos;t going to be hungry.</em><br/><br/>W pytaniach inwersja:<br/><em>Are we waiting for guests now?<br/>Is he going to smile at me?</em>');
}

function pastSimple()
{
	$('#opis').html('Używany do wyrażania czynności rozpoczętej i zakończonej w przeszłości, głównie w jakimś punkcie czasowym.<br/><br/>Używamy drugiej formy czasownika, czyli regularnym czasownikom dodajemy <b>-ed</b>, a <a href="nieregularne.html">tu lista nieregularnych czasowników</a><br/><em>You opened the window. They went to the shop. I wrote the letter. We ate breakfast.</em><br/><br/>W przeczeniach i pytaniach używamy <b>did</b>.<br/><em>She didn&apos;t wear a jacket. They didn&apos;t listen to the radio. Did I speak to them? Did you drive a bus?</em>')
}

function prosteOdmiany()
{
	$('#opis').html('<div class="wysrodkowany">PRESENT</div><div><div class="jednaZDwoch">I am = I&apos;m<br/>You are = You&apos;re<br/>He/She/It is = He&apos;s, She&apos;s, It&apos;s<br/>We are = We&apos;re<br/>You are = You&apos;re<br/>They are = They&apos;re<br/><br/>W pytaniach inwersja:<br/><em>Am I late? Is he a driver? Are we ready for the meeting?</em><br/><br/>Przeczenia z <b>not</b>:<br/>I am not = I&apos;m not<br/>You are not = You aren&apos;t<br/>He is not = He isn&apos;t</div><div class="jednaZDwoch">I have got = I&apos;ve got<br/>You have got = You&apos;ve got<br/>He/She/It has got = He&apos;s got, She&apos;s got, It&apos;s got<br/>We have got = We&apos;ve got<br/>You have got = You&apos;ve got<br/>They have got = They&apos;ve got<br/><br/>W pytaniach inwersja:<br/><em>Have you got any siblings? Has she got a dog? Have they got green house?</em><br/><br/>Przeczenia z <b>not</b>:<br/>I have not got = I haven&apos;t got<br/>You have not got = You haven&apos;t got<br/>He has not got = He hasn&apos;t got</div><div style="clear: both;"></div></div><div class="wysrodkowany">PAST</div></div><div><div class="jednaZDwoch">I was<br/>You were = You&apos;re<br/>He/She/It was<br/>We were = We&apos;re<br/>You were = You&apos;re<br/>They were = They&apos;re<br/><br/>W pytaniach inwersja<br/><br/>Przeczenia z <b>not</b>:<br/>I was not = I wasn&apos;t not<br/>You were not = You weren&apos;t<br/>He was not = He wasn&apos;t</div><div class="jednaZDwoch">I had got = I&apos;d got<br/>You had got = You&apos;d got<br/>He/She/It had got = He&apos;d got, She&apos;d got, It&apos;d got<br/>We had got = We&apos;d got<br/>You had got = You&apos;d got<br/>They had got = They&apos;d got<br/><br/>W pytaniach inwersja<br/><br/>Przeczenia z <b>not</b>:<br/>I had not got = I hadn&apos;t got<br/>You had not got = You hadn&apos;t got<br/>He had not got = He hadn&apos;t got</div><div style="clear: both;"></div></div>');
}

function zaimkiDopelnienia()
{
	$('#opis').html('<div><div class="jednaZTrzech">Formy dopełnienia:<br/>I - me<br/>you - you<br/>he - him<br/>she - her<br/>it - it<br/>we - us<br/>they - them</div><div class="jednaZTrzech">Przymiotniki dzierżawcze:<br/>I - my<br/>you - your<br/>he - his<br/>she - her<br/>it - its<br/>we - our<br/>they - their</div><div class="jednaZTrzech">Dopełniacz saksoński:<br/><em>My uncle&apos;s house. His child&apos;s room.</em><br/><br/>Dla liczby mnogiej i zakończonych na <b>s</b>:<br/><em>Her parents&apos; bed. Children&apos; place. Glass&apos; edge is delicate.</em></div><div style="clear: both;"></div><div></div>');
}

function przykladyDat()
{
	$('#opis').html('13 V 2024 - May thirteenth, twenty twenty-four<br/>2 VII 1806 - July second, eighteen and six (potocznie July second, eighteen oh six)<br/>25 III 966 - March twenty-fifth, nine sixty-six<br/>20 VI 2000 - June twentieth, two thousand (twenty hundred)');
}

function letUs()
{
	$('#opis').html('Skrót od Let us. Ta forma trybu rozkazującego jest używana często w języku mówionym do zasugerowania zrobienia czegoś wspólnie.<br/><br/><em>Let&apos;s pray to the Good God.<br/>Let&apos;s hurry up.<br/>Let&apos;s take it to that old woman.<br/>Let&apos;s tidy up room and then go outside to enjoy the sunshine!</em>');
}

function przyimkiLekcja()
{
	$('#opis').html('<div class="jednaZTrzech">przyimki czasu:<br/><br/>AT<br/>używany do określenia konkretnego momentu<br/><em>The bus leaves at 3 p.m.<br/>Let&apos;s meet in the park at noon<br/>We look forward to Jesus coming at Christmas.</em><br/><br/>ON<br/>używany do wskazania bardziej ogólnego<br/><em>I have a lesson on Wednesday.<br/>We have a trip on the 1st.<br/>You eat vegetables on Friday.</em><br/><br/>IN<br/>używany przed danym okresem, a także miesiącem, porą roku itd.<br/><em>My elder Daughters have birthdays in the autumn.<br/>The holiday is in a month.<br/>Advent is in December.</em><br/><br/>SINCE (Present Perfect)<br/>używany w odniesieniu do początku okresu<br/><em>We have been married since 2012.<br/>They have worked here since yesterday.</em><br/><br/>FOR (Present Perfect Continuous)<br/>używany w odniesieniu do długości czasu<br/><em>We have been living here for 4 years.</em><br/><br/>INNE PRZYIMKI<br/>during, untill/till, from...to, before, after, between itd.</div><div class="jednaZTrzech">przyimki miejsca<br/><br/>AT<br/>gdy mówimy o konkretnym miejscu<br/><em>You can buy food at the shop.<br/>We visit our parents at the cemetery.<br/>I spend a lot of time at work.</em><br/><br/>ON<br/>gdy mówimy o obszarze<br/><em>Our house is on Rolnicza Street.<br/>The boat is on the lake.<br/>There is a book on the table.</em><br/><br/>IN<br/>gdy coś jest w większym obszarze, państwie, regionie itd.<br/><em>Dziekanów Nowy is in Mazovia.<br/>There are beautiful places in Poland.<br/>Fish live in the ocean.</em><br/><br/>INNE PRZYIMKI<br/>under, behind, over, in front of itd.</div><div class="jednaZTrzech">przyimki kierunku:<br/><br/>TO - <em>w kierunku<br/>Mice run to hole.<br/>He goes to the museum.</em><br/><br/>INTO - <em>do środka, wewnątrz<br/>Uncle drives into the forest<br/>She jumps into the pool.</em><br/><br/>TOWARD - <em> w kierunku<br/>They walk toward the church.<br/>The bus is heading toward Lublin.</em><br/><br/>AWAY FROM - <em>z dala od<br/>The bird flies away from the cat.<br/>The train is away from Warsaw.</em><br/><br/>THROUGH - <em>przez<br/>She looked through the window.<br/>The bishop moves through pawns.</div><div style="clear: both;"></div>');
}

function spojniki()
{
	$('#opis').html('AND<br/><em>I like cherries and chocolate.<br/>I work and rest today.</em><br/><br/>BECAUSE<br/><em>I am very happy, because I have wonderful family.<br/>I am late, because cows are crossing the street.</em><br/><br/>SO<br/><em>We have little money, so we save.<br/>I have free time, so I program.</em><br/><br/>OR<br/><em>I can go to work or make something creative.<br/>You may rest or help me.</em><br/><br/>BUT<br/><em>He is tired, but he is happy.<br/>They want to go for the walk but it is raining</em><br/><br/>INNE SPÓJNIKI:<br/>however, although, if, while itd.');
}

function rzeczownikiMnoga()
{
	let regRzecz = ["car","cars","bus","buses","flower","flowers","chair","chairs","house","houses","watch","watches","glass","glasses","potato","potatoes","dish","dishes","tree","trees"];
	let nieregRzecz = ["child","children","man","men","woman","women","person","people","foot","feet","tooth","teeth","fish","fish","mouse","mice","goose","geese","ox","oxen","deer","deer"];
	let klasaDiva = "";
	$('#regularne').html('REGULARNE<br/>dodawane <b>-s</b> lub <b>-es</b><br/><br/>');
	for (let i = 0; i < regRzecz.length; i ++)
	{
		if (i%2 == 0)
			klasaDiva = "pierwszyDoPary";
		else
			klasaDiva = "drugiDoPary";
		$('#regularne').append('<div class="' + klasaDiva + '">' + regRzecz[i] + '</div>');
	}
	$('#nieregularne').html('NIEREGULARNE<br/><br/>');
	for (let i = 0; i < nieregRzecz.length; i ++)
	{
		if (i%2 == 0)
			klasaDiva = "pierwszyDoPary";
		else
			klasaDiva = "drugiDoPary";
		$('#nieregularne').append('<div class="' + klasaDiva + '">' + nieregRzecz[i] + '</div>');
	}
}

function nieregularne()
{
	let formy = ["begin","began","begun","blow","blew","blown","break","broke","broken","bring","brought","brought","build","built","built","buy","bought","bought","catch","caught","caught","choose","chose","chosen","come","came","come","cut","cut","cut","dig","dug","dug","do","did","done","drink","drank","drunk","draw","drew","drawn","eat","ate","eaten","fall","fell","fallen","feel","felt","felt","find","found","found","fly","flew","flown","forget","forgot","forgotten","freeze","froze","frozen","get","got","gotten","give","gave","given","go","went","gone","grow","grew","grown","have","had","had","hear","heard","heard","hide","hid","hidden","hold","held","held","keep","kept","kept","know","knew","konwn","lay","laid","laid","leave","left","left","lose","lost","lost","make","made","made","meet","met","met","pay","paid","paid","put","put","put","read","read","read","ride","rode","ridden","ring","rang","rung","rise","rose","risen","run","ran","run","say","said","said","see","saw","seen","sell","sold","sold","send","sent","sent","set","set","set","shake","shook","shaken","sing","sang","sung","sit","sat","sat","sleep","slept","slept","speak","spoke","spoken","spend","spent","spent","stand","stood","stood","swim","swam","swum","take","took","taken","teach","taught","taught","tell","told","told","think","thought","thought","throw","threw","thrown","wake","woke","woken","wear","wore","worn","win","won","won","write","wrote","written"];
	let klasaDiva = "";
	for (let i = 0; i < formy.length; i ++)
	{
		if (i%3 == 0)
			klasaDiva = "pierwszyDoPary";
		else if (i%3 == 1)
			klasaDiva = "srodkowyWParze";
		else
			klasaDiva = "drugiDoPary";
		$('#opis').append('<div class="' + klasaDiva + '">' + formy[i] + '</div>');
	}
		
}


function przeliczalnosc()
{
	$('#opis').html('<div class="wysrodkowany">RZECZOWNIKI</div><div class="jednaZDwoch">POLICZALNE<br/><br/>można je zliczyć jako indywidualne jednostki:<br/><em>book, car, room, house, flower,</em> itd.</div><div class="jednaZDwoch">NIEPOLICZALNE<br/><br/>nie można ich tak policzyć jak policzalnych:<br/><em>water, sugar, honey, salt, air,</em> itd.</div><div style="clear: both;"></div><div class="wysrodkowany">PYTANIE</div><div class="jednaZDwoch">How many...?<br/><em>How many flowers are on the mountain?<br/>How many parrots does he have at home?<br/>How many books do we need to read?</em></div><div class="jednaZDwoch">How much...?<br/><em>How much does it cost?<br/>How much sky is above us?<br/>How much salt do you need for the soup?</em></div><div style="clear: both;"></div><div class="wysrodkowany">OKREŚLNIKI</div><div class="jednaZDwoch">few, not many, many, a lot of/lots of<br/><em>I have a few shoes.<br/>Not many hours until the new day.<br/>There are a lot of cucumbers for dinner.<br/>There are many clothes in the shop.</em></div><div class="jednaZDwoch">little, not much, much, a lot of/lots of<br/><em>May I have a little honey for breakfast?<br/>Bread costs not much.<br/>We need a lot of love in the family.<br/>She doesn&apos;t drink much</em></div><div style="clear: both;"></div>');
} //<div class="wysrodkowany"></div><div class="jednaZDwoch"></div><div class="jednaZDwoch"></div><div style="clear: both;"></div>

function someAny()
{
	$('#opis').html('<div class="jednaZDwoch">SOME<br/><br/>używane w zdaniach twierdzących do wyrażenia nieokreślonej ilości czegoś:<br/><em>We eat some fruits.<br/>I buy some water.<br/>I have some shirts.<br/>We cook some rice for dinner.</em></div><div class="jednaZDwoch">ANY<br/><br/>używane w pytaniach i przeczeniach:<br/><em>Do you have any books?<br/>Is there any milk left?<br/>I don&apos;t have any money.<br/>The museum doesn&apos;t open any doors until 10 am.</em></div><div style="clear: both;"></div>');
}

function preferencje()
{
	$('#opis').html('Po czasowniku wyrażającym stopień przyjemności lub niechęci można stosować czasownik czynności z końcówką <b>-ing</b>:<br/><br/><em>I like eating sausage. = I like to eat sausage.<br/>We hate being sad. = We hate to be sad.<br/>She enjoys playing with her sisters. = She enjoys to play with her sisters.<br/>He doesn&apos;t like wearing yellow clothes. = He doesn&apos;t like to wear yellow clothes.</em>');
}

function stopniowanie()
{
	$('#opis').html('stopniu wyższemu krótkich przymiotników dodajemy <b>-er</b> ewentualnie dwojąc ostatnią spółgłoskę, a przed dłuższymi dodajemy słowo <b>more</b>:<br/><br/><em>bigger, happier, more beautiful, faster, taller, more interesting, more delicious</em><br/><br/><br/>przed stopniem najwyższym stawiamy <b>the</b>, krótkim przymiotnikom dodajemy <b>-est</b> ewentualnie dwojąc ostatnią spółgłoskę, a przed dłuższymi dodajemy słowo <b>most</b>:<br/><br/><em>the biggest, the happiest, the most beautiful, the fastest, the tallest, the most interesting, the most delicious</em><br/><br/><br/>WYJĄTKI:<br/><br/><em>good - better - the best<br/>bad - worse - the worst<br/>little - less - the least<br/>old - older/elder - the oldest/the eldest (elder - the eldest</em> stosowany w relacjach rodzinnych<em>)<br/>many/much - more - the most<br/>far - farther/further - the farthest/the furthest</em>');
}

var food = ["apple","banana","tomato","potato","carrot","onion","garlic","pepper","cucumber","meat","rice","pasta","bread","plum","pear","peach","orange","lemon","egg","milk","juice","tea","water","coffee","wine","breakfast","dinner","supper","strawberry","berry","raspberry","fruit","vegetable","cake","salt","dessert","cheese","butter","soup","food","saucepan","kettle","plate","spoon","fork","knife","mug","cup","glass","lid","frying pan","seasoning","sausage","beef","pork","pineapple","grapes","salad","chips","dressing","ham","crisps","beer","meal","oil","chewing gum","biscuit","sweets","jelly","jam","cottage cheese","bun","flour","watermelon","cherry","tuna","honey","raisin","seed","nut","broccoli","beans","peas","spinach","cabbage","lettuce","dish","serving","vegetarian","hungry","thirsty","sweet","salty","sour","bitter","tasty","spicy","juicy","ripe","fresh","fatty","low-fat","eat","drink","cook","bake","fry","cut","slice","peet","chop"];
function jedzenie()
{
	let jedzenieElement = $('#slowka');
    jedzenieElement.empty();
	for (let i = 0; i < food.length; i++) 
	{
        jedzenieElement.append('<div class="slowko">' + food[i] + '</div>');
    }
}

var animals = ["pet","animal","cat","dog","fish","hamster","cow","horse","duck","donkey","monkey","bird","parrot","chicken","snail","butterfly","fly","lion","mouse","elephant","bee","wolf","fox","rabbit","mosquito","frog","pig","tiger","sheep","kitten","puppy","turtle","deer","giraffe","rat","turkey","goat","owl","pigeon","eagle","crocodile","shark","dolphin","penguin","bear","ant","spider"];
function zwierzeta()
{
	let zwierzetaElement = $('#slowka');
    zwierzetaElement.empty();
	for (let i = 0; i < animals.length; i++) 
	{
        zwierzetaElement.append('<div class="slowko">' + animals[i] + '</div>');
    }
}

var family = ["family","father","mother","daughter","son","uncle","aunt","brother","sister","grandmother","grandfather","parent","man","woman","husband","wife","child","boy","girl","cousin","boyfriend","girlfriend","divorced","married","widow","friend","grandchild","father-in-law","sister-in-law","brother-in-law","godmother","relative","nephew","niece","siblings","only child","twins","fiance","wedding","pregnant","ex-boyfriend","be together","be born","be related","marry someone","get engaged","propose","fall in love","kiss","hug","cuddle","go on a date","break up","get back together","make love","bring up","grow up","couple","relationship"];
function rodzina()
{
	let rodzinaElement = $('#slowka');
    rodzinaElement.empty();
	for (let i = 0; i < family.length; i++) 
	{
        rodzinaElement.append('<div class="slowko">' + family[i] + '</div>');
    }
}

var clothes = ["jacket","sock","belt","glasses","scarf","glove","shoe","trousers","umbrella","T-shirt","dress","cap","hat","skirt","shirt","coat","handbag","button","high heels","leggings","tracksuit","sweatshirt","polo neck","sweater","ring","necklace","earring","tie","underwear","blouse","clothes","fur","silk","wool","cotton","chain","bracelet","swimming trunks","swimsuit","bra","boots","sandals","mask","costume","try on","wear","take off","put on","do up","button up","match","get dressed"];
function ubrania()
{
	let ubraniaElement = $('#slowka');
    ubraniaElement.empty();
	for (let i = 0; i < clothes.length; i++) 
	{
        ubraniaElement.append('<div class="slowko">' + clothes[i] + '</div>');
    }
}

var partsBody = ["head","hair","ear","eye","nose","tooth","lips","face","neck","arm","stomach","back","hand","leg","knee","foot","toe","finger","beard","tan","skin","muscle","cheek","chin","forehead","wrist","elbow","ankle","pimple","freckles","body","fringe","plait","ponytail","haircut","moustache","nail","chest","mouth","comb","take a step","jump","stand","wash","wake up","sleep","hurry","wave","point","shake","fall","drop","hold","sit down","stand up","lie down","pass (a ball)","hit","bend down","bend","put down","pick up","pull","push","touch","seem","taste","smell","sound","hear","sense","look around","look like","look at","see","average","handsome","pretty","elegant","straight","curly","beautiful","ugly","fat","slim","pale","delicate","athletic","figure","skinny","overweight","obese","bald","fair","dark","wavy","thick","greasy","fit","well-built","broad-shouldered","medium height","attractive","good-looking","gorgeous","pierced","tattoo","wrinkles","tiny","huge","skin and bone","blonde","brumette","ginger hair","nail polish","makeup","hobbies","relax","sing","swim","play","take photos","paint","listen","read","watch","do sports","run","dance","lie","sit","have fun","get some rest","gossip","meet up with friends","meet new people","invite","introduce","party","do puzzles","draw","go out of town","see a play","take your time","get enough sleep","skateboard","dive","brain","go to bed","get up","shave","brush your teeth","get undressed","rest"];
function cialo()
{
	let cialoElement = $('#slowka');
    cialoElement.empty();
	for (let i = 0; i < partsBody.length; i++) 
	{
        cialoElement.append('<div class="slowko">' + partsBody[i] + '</div>');
    }
}

var time = ["half","time","night","morning","afternoon","evening","season","year","month","week","day","hour","minute","second","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","January","February","March","April","May","June","July","August","September","October","November","December","spring","summer","autumn","winter","today","yesterday","tomorrow","holiday","date","quarter","the clock is slow","the clock is fast","clock","set the alarm","noon","midnight","recently","day before yesterday","day after tomorrow","every other night","every two days","some time ago","age","present","past","future","last","late","early"];
function czas()
{
	let czasElement = $('#slowka');
    czasElement.empty();
	for (let i = 0; i < time.length; i++) 
	{
        czasElement.append('<div class="slowko">' + time[i] + '</div>');
    }
}

var numbers =["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred","thousand","million","number","first","second","third","fourth","fifth","ninth","twelfth","twentieth","twenty-first","thirtieth","metre","square metre","milimetre","centimetre","inch","drop","litre","mile","kilometre","degree"];
function liczebniki()
{
	let liczebnikiElement = $('#slowka');
    liczebnikiElement.empty();
	for (let i = 0; i < numbers.length; i++) 
	{
        liczebnikiElement.append('<div class="slowko">' + numbers[i] + '</div>');
    }
}

var house=["garden","key","room","fridge","living room","bedroom","bathroom","kitchen","wardrobe","book","bookshelf","washing machine","sink","shower","bathtub","table","chair","bed","sofa","window","wall","floor","ground floor","door","ceiling","carpet","garage","cellar","mirror","house","flat","curtains","yard","ladder","heater","shelf","vacuum cleaner","wallpaper","toilet","stairs","armchair","desk","furniture","vase","lift","rubbish","blanket","sheet","pillow","towel","lawn","terrace","balcony","fireplace","chimney","roof","attic","box","bucket","bottle","scissors","hammer","tool","answering machine","clothes hanger","hairdryer","central heating","radiator","AC","flower pot","tin opener","food processor","coffee maker","juicer","freezer","dishwasher","microwave","oven","cooker","toaster","bowl","stain","mess","cloth","sponge","washing-up liquid","washing powder","soap","housework","toothbrush","tidy","messy","cosy","comfortable","measure","open","close","build","renovate","decorate","let","rent","water the plants","walk the dog","clear away the toys","hang the laundry","fold clothes","sweep the floor","do the laundry","clear","clean","do the dishes","iron","keep animals","live","make the bed","dust","tidy up"];
function dom()
{
	let domElement = $('#slowka');
    domElement.empty();
	for (let i = 0; i < house.length; i++) 
	{
        domElement.append('<div class="slowko">' + house[i] + '</div>');
    }
}

var trip=["trip","bike","ferry","airport","bus stop","underground","luggage","tourist","flight","bus","train","car","plane","ticket","passport","station","suitcase","hand luggage","flight attendant","travel agent's","on board","boarding card","aisle seat","window seat","cruise","boat","border","visa","platform","package holiday","traveller","tinned food","hiking boots","hammock","sun cream","first aid kit","compass","map","pocketknife","rope","backpack","campfire","sleeping bag","torch","tent","campsite","tracks","tram","car wash","passenger","driving license","one-way street","road sign","lane","motorway","jet","helicopter","van","lorry","motor scooter","motorbike","place","way","west","east","south","north","picnic","send a postcard","get off a train","get on a bus","pack","catch a bus","miss a train","check in","do sightseeing","visit","stay","fly","arrive","leave","go fishing","go hiking","go camping","climb","ask for directions","get lost","get to","land","travel","come","book"];
function turystyka()
{
	let turystykaElement = $('#slowka');
    turystykaElement.empty();
	for (let i = 0; i < trip.length; i++) 
	{
        turystykaElement.append('<div class="slowko">' + trip[i] + '</div>');
    }
}

var speak=["goodbye","thank you","How are you?","good evening","good morning","good afternoon","sorry","excuse me","please","yes","no","hello","How many?","Who?","What?","Where?","How?","you are welcome","Why?","How much?","When?","at least","at all","even","maybe","probably","definitely","on the other hand","on the one hand","because of","as a result","unless","however","although","so","also","very much","only","part","group","a lot of","a pair of","almost","enough","too much","too many","too little","too few","little","a little","few","a few","most","next","too","lie","truth","hang up","answer the phone","ring","call","beg","explain","offer","suggest","recommend","refuse","promise","communicate","talk","tell","say","pay back","write down","call back","find out","know","speak","get on with someone","phone","How long?","What time?","Where...from?","this"];
function mowa()
{
	let mowaElement = $('#slowka');
    mowaElement.empty();
	for (let i = 0; i < speak.length; i++) 
	{
        mowaElement.append('<div class="slowko">' + speak[i] + '</div>');
    }
}

var city=["road","park","field","capital","street","farm","square","neighbour","bridge","city","village","post office","countryside","church","library","museum","bank","skyscraper","escalator","factory","monument","opera","public transport","gate","centre","pedestrian crossing","traffic lights","traffic","petrol station","neighbourhood","crossroads","district","pavement","suburb","building","city hall","canal","motel","fountain","police station","corner","bench","lamp post","roundabout","rush hour","statue","crowd","area","distance","cinema","theatre","gallery","restaurant","cafe","pub","crowded","cemetery","car park","go for a walk"];
function miasto()
{
	let miastoElement = $('#slowka');
	miastoElement.empty();
	for (let i = 0; i < city.length; i++)
	{
		miastoElement.append('<div class="slowko">' + city[i] + '</div>');
	}
}

var school=["ruler","exam","mark","pencil","school","student","word","language","maths","history","geography","break","blackboard","class","pen","homework","copybook","teacher","university","exercise","test results","course","grammar","vocabulary","lecture","professor","answer","question","head teacher","caretaker","PE (Physical Education)","essay","chemistry","faculty","textbook","nursery","advanced","intermediate","beginner","teach","learn","understand","pass","fail","revise","correct","memorise","learn by heart","graduate","study","science","class"];
function szkola()
{
	let szkolaElement = $('#slowka');
	szkolaElement.empty();
	for (let i = 0; i < school.length; i++)
	{
		szkolaElement.append('<div class="slowko">' + school[i] + '</div>');
	}
}

var nature=["nature","sky","cloud","sun","moon","lake","river","sea","tree","leaf","flower","plant","grass","forest","mountain","wind","weather","rain","snow","storm","sunrise","wave","desert","sand","beach","island","volcano","waterfall","fog","peak","lightning","thunder","air","rainforest","hill","ice","earth","the universe","star","planet","environment","world","daylight","shade","boiling hot","showers","breeze","root","bush","branch","hot","rocky","polluted","chilly","wild","freezing","frosty","bloom","plant","cloudy","sunny"];
function przyroda()
{
	let przyrodaElement = $('#slowka');
	przyrodaElement.empty();
	for (let i = 0; i < nature.length; i++)
	{
		przyrodaElement.append('<div class="slowko">' + nature[i] + '</div>');
	}
}

var countries=["Poland","Polish","Germany","German","Great Britain","British","England","English","Ireland","Irish","United Kingdom","Japanese","Japan","Russian","Russia","Canadian","Canada","American","United States of America","Australian","Australia","Greek","Greece","Europe","Africa","Asia","Spain","Spanish","France","French","Italy","Italian"];
function kraje()
{
	let krajeElement = $('#slowka');
	krajeElement.empty();
	for (let i = 0; i < countries.length; i++)
	{
		krajeElement.append('<div class="slowko">' + countries[i] + '</div>');
	}
}

var shopping=["wallet","shopping center","bookshop","bakery","cashpoint","shop","money","market","price","basket","shelf","change","shopping","item","product","stall","consumer","customer","receipt","checkout","changing room","delivery","price tag","opening hours","department store","budget","debt","pound","euro","savings","banknote","coin","online banking","bank account","pay","sell","buy","queue","pay by credit card","pay cash","exchange","return something","shop online","borrow","lend"];
function zakupy()
{
	let zakupyElement = $('#slowka');
	zakupyElement.empty();
	for (let i = 0; i < shopping.length; i++)
	{
		zakupyElement.append('<div class="slowko">' + shopping[i] + '</div>');
	}
}

var job=["designer","musician","painter","scientist","police officer","fireman","nurse","architect","secretary","mechanic","IT specialist","computer programmer","engineer","actor","artist","doctor","journalist","shop assistant","hairdresser","lawyer","boss","poet","writer","carpenter","editor","cleaner","gardener","lifeguard","singer","electrician","waiter","accountant","CEO","director","project manager","postman","courier","therapist","guard","translator","coach","psychologist","surgeon","graphic designer","dentist","builder","plumber","profession"];
function zawody()
{
	let zawodyElement = $('#slowka');
	zawodyElement.empty();
	for (let i = 0; i < job.length; i++)
	{
		zawodyElement.append('<div class="slowko">' + job[i] + '</div>');
	}
}

var character=["rude","cheerful","shy","crazy","stubborn","intelligent","calm","outgoing","brave","nice","friendly","honest","clever","patient","selfish","generous","smart","funny","sense of humour", "lazy","hard-working","open-minded","stupid","silly","mean","polite","energetic","gentle","responsible","helpful","careful","moody","optimistic","pessimistic","mature","frank","lively","sensitive","sensible","naive","wise","modest","ambitious","aggressive","bright","imagination","positive attitude","talented","creative","self-discipline","well-organised","motivation","motivated","kind","serious","spoilt","charming","talkative","self-confident","personality trait","personality","noisy","silent","faithful","loyal","peaceful"];
function charakter()
{
	let charakterElement = $('#slowka');
	charakterElement.empty();
	for (let i = 0; i < character.length; i++)
	{
		charakterElement.append('<div class="slowko">' + character[i] + '</div>');
	}
}

var przeciwienstwo=["big","small","wide","narrow","shallow","deep","full","empty","light","heavy","hard","soft","slow","fast","good","bad","safe","dangerous","wrong","correct","difficult","easy","old","young","tall","short","clean","dirty","strong","weak","warm","cold","wet","dry","loose","tight","quiet","loud","expensive","cheap","rich","poor","sick","healthy","alive","dead"];
function przeciwienstwa()
{
	let przeciwienstwaElement = $('#slowka');
	przeciwienstwaElement.empty();
	for (let i = 0; i < przeciwienstwo.length; i++)
	{
		if (i%2 === 1)
			przeciwienstwaElement.append('<div class="slowko" style="background: brown; color: white; margin-left: 2px;">' + przeciwienstwo[i] + '</div>');
		else
			przeciwienstwaElement.append('<div class="slowko" style="background: yellow; color: black; margin-right: 2px;">' + przeciwienstwo[i] + '</div>');
	}
}

var computer=["screen","file","folder","keyboard","computer","video camera","camera","MP3 player","TV","mobile phone","browser","password","profile","account","social media","website","online","technology","text message","comment","e-mail address","speaker","desktop","copy","print","save","turn on","turn off","delete","install","upload","download","charge","check your e-mails","surf the internet","e-mail someone","log in","post","share"];
function komputer()
{
	let komputerElement = $('#slowka');
	komputerElement.empty();
	for (let i = 0; i < computer.length; i++)
	{
		komputerElement.append('<div class="slowko">' + computer[i] + '</div>');
	}
}

var przyimek=["close by","far away","over","next to","between","in front of","under","in","on","behind","around","out of","past","across","into","along","through","towards","everywhere","somewhere"];
function przyimki()
{
	let przyimkiElement = $('#slowka');
	przyimkiElement.empty();
	for (let i = 0; i < przyimek.length; i++)
	{
		przyimkiElement.append('<div class="slowko">' + przyimek[i] + '</div>');
	}
}

var dana=["ID","name","nationality","country","address","citizen","come from","person"];
function dane()
{
	let daneElement = $('#slowka');
	daneElement.empty();
	for (let i = 0; i < dana.length; i++)
	{
		daneElement.append('<div class="slowko">' + dana[i] + '</div>');
	}
}

var przyslowek=["always","sometimes","often","usually","rarely","every day","never","from time to time","most of the time","all the time","every time","hardly ever","forever","until","during","after","before","soon","finally","at the moment","but","and"];
function przyslowki()
{
	let przyslowkiElement = $('#slowka');
	przyslowkiElement.empty();
	for (let i = 0; i < przyslowek.length; i++)
	{
		przyslowkiElement.append('<div class="slowko">' + przyslowek[i] + '</div>');
	}
}

var tezDzierzawcze=["I","you","it","he","she","we","they","me","you","him","her","it","us","them","my","your","his","her","its","our","their"];
function zaimki()
{
	let zaimkiElement = $('#slowka');
	zaimkiElement.empty();
	for (let i = 0; i < tezDzierzawcze.length; i++)
	{
		zaimkiElement.append('<div class="slowko">' + tezDzierzawcze[i] + '</div>');
	}
}

var wf=["failure","extreme sports","gymnastics","athletics","horse racing","race","rollerblades","martial arts","water-skiing","body-building","wrestling","goal","whistle","boxing","bowling","stadium","chess"];
function sport()
{
	let sportElement = $('#slowka');
	sportElement.empty();
	for (let i = 0; i < wf.length; i++)
	{
		sportElement.append('<div class="slowko">' + wf[i] + '</div>');
	}
}

var przymiotnik=["black","white","red","yellow","green","blue","grey","pink","orange","brown","purple","gold","silver","big","small","wide","narrow","shallow","deep","full","empty","light","heavy","hard","soft","slow","fast","good","bad","safe","dangerous","wrong","correct","difficult","easy","old","young","tall","short","clean","dirty","strong","weak","warm","cold","wet","dry","loose","tight","quiet","loud","expensive","cheap","rich","poor","sick","healthy","alive","dead","long","round","tidy","messy","cosy","comfortable","hungry","thirsty","sweet","salty","sour","bitter","tasty","spicy","juicy","ripe","fresh","fatty","low-fat","great","crowded","advanced","intermediate","beginner","hot","rocky","polluted","chilly","wild","freezing","frosty","plain","multicoloured","traditional","classic","stylish","fashionable","favourite","tired","nervous","sleepy","angry","sad","happy","proud","boring","depressed","frustrated","upset","shout","curious","excited","amused","smooth","rough","noisy","silent","faithful","loyal","confused","lonely","disappointed","embarassed","annoyed","fascinated","furious","glad","jealous","stressed","own","busy","rude","cheerful","shy","crazy","stubborn","intelligent","calm","outgoing","brave","nice","friendly","honest","clever","patient","selfish","generous","smart","funny","lazy","hard-working","open-minded","stupid","silly","mean","polite","energetic","gentle","responsible","helpful","careful","moody","optimistic","pessimistic","mature","frank","lively","sensitive","sensible","naive","wise","modest","ambitious","aggressive","bright","talented","creative","well-organised","motivated","kind","serious","spoilt","charming","talkative","self-confident","allergic to something","important","different","peaceful"];
function przymiotniki()
{
	let przymiotnikiElement = $('#slowka');
	przymiotnikiElement.empty();
	for (let i = 0; i < przymiotnik.length; i++)
	{
		przymiotnikiElement.append('<div class="slowko">' + przymiotnik[i] + '</div>');
	}
}

var czasownik=["grow","measure","be together","be born","be related","marry someone","get engaged","propose","fall in love","kiss","hug","cuddle","go on a date","break up","get back together","make love","open","close","build","renovate","decorate","let","rent","use","throw away","water the plants","walk the dog","clear away the toys","hang the laundry","fold clothes","sweep the floor","do the laundry","clear","clean","help","do the dishes","iron","keep animals","drive","come back","turn","lose","go","send a postcard","get off a train","get on a bus","pack","catch a bus","miss a train","check in","do sightseeing","visit","stay","fly","arrive","leave","go fishing","go hiking","go camping","eat","drink","cook","bake","fry","cut","slice","peet","chop","have","want","take","make","know","speak","live","be","do","give","move","take a step","climb","carry","bring","jump","stand","hang up","answer the phone","ring","call","beg","explain","offer","suggest","recommend","refuse","promise","communicate","talk","tell","say","pay back","write down","call back","find out","fill in","look for","look after","turn up","turn down","put away","get on with someone","bring up","grow up","go away","come in","come from","be over","ask for directions","get lost","get to","mean","teach","learn","understand","pass","fail","write","repeat","revise","correct","forget","remember","memorise","learn by heart","graduate","study","bloom","plant","try on","wear","take off","put on","do up","button up","match","be late","make the bed","comb","dust","wash","wake up","sleep","hurry","wave","point","shake","land","fall","drop","hold","sit down","stand up","lie down","pass (a ball)","hit","bend down","bend","put down","pick up","pull","push","relax","sing","swim","play","take photos","paint","listen","read","watch","do sports","run","dance","lie","sit","have fun","get some rest","gossip","meet up with friends","meet new people","invite","introduce","party","do puzzles","draw","go out of town","see a play","take your time","get enough sleep","skateboard","dive","be scared","cry","laugh","smile","hate","love","like","surprise","think","worry","sigh","regret","feel down","be in a good mood","shout","doubt","look forward to something","don't mind","agree","argue","be frightened","hope","believe","rely on someone","trust","enjoy","touch","seem","taste","smell","sound","hear","sense","look around","look like","look at","see","be fed up with","be fond of something","be keen on something","accept","admire","pay","sell","buy","choose","queue","pay by credit card","pay cash","exchange","return something","shop online","invest","make a profit","spend money","waste money","borrow","lend","sign","transfer money","phone","copy","print","save","turn on","turn off","retire","earn","get promoted","sack","employ","look for a job","get a job","spend time","stop","finish","start","plan","decide","achieve","take a day off","negotiate","work overtime","apply for a job","break","catch a cold","make an appointment","hurt","feel","examine","heal","treat","die","sweat","get well","fall ill","check temperature","breathe","drown","survive","twist an ankle","swell","disinfect","vomit","feel dizzy","burn","stay in shape","lose weight","put on weight","keep to a diet","go on a diet","eat well","delete","install","upload","download","charge","check your e-mails","surf the internet","e-mail someone","log in","post","share","rule","vote","fight","improve","protest","pray","celebrate","play the instrument","perform","compose","try","pay a fine","arrest","rob","blow up","shoot","kill","attack","steal","commit","travel","come","book","walk","tidy up","go to bed","get up","shave","brush your teeth","get undressed","rest","go for a walk","know","can"];
function czasowniki()
{
	let czasownikiElement = $('#slowka');
	czasownikiElement.empty();
	for (let i = 0; i < czasownik.length; i++)
	{
		czasownikiElement.append('<div class="slowko">' + czasownik[i] + '</div>');
	}
}

var feeling=["feeling","joy","disappointment","tired","nervous","sleepy","angry","sad","happy","proud","boring","depressed","frustrated","upset","shout","curious","excited","amused","confused","lonely","disappointed","embarassed","annoyed","fascinated","furious","glad","jealous","stressed","be scared","cry","laugh","smile","hate","love","like","surprise","think","worry","sigh","regret","feel down","be in a good mood","shout","doubt","look forward to something","don't mind","agree","argue","be frightened","hope","believe","rely on someone","trust","enjoy","be fed up with","be fond of something","be keen on something","accept","admire"];
function uczucia()
{
	let uczuciaElement = $('#slowka');
	uczuciaElement.empty();
	for (let i = 0; i < feeling.length; i++)
	{
		uczuciaElement.append('<div class="slowko">' + feeling[i] + '</div>');
	}
}

var health=["healthy lifestyle","pill","illness","medicine","ambulance","pharmacy","cough","flu","fever","pain","headache","sore throat","hospital","runny nose","symptom","therapy","surgery","disease","blood test","blood","vitamins","virus","cancer","infection","syrup","painkiller","injection","breath","GP","clinic","death","life","accident","bruise","injury","heart attack","cut","rash","toothache","migraine","plaster cast","plaster","junk food","thermometer","allergic to something","catch a cold","hurt","feel","examine","heal","treat","die","sweat","get well","fall ill","check temperature","breathe","drown","survive","twist an ankle","swell","disinfect","vomit","feel dizzy","burn","stay in shape","lose weight","put on weight","keep to a diet","go on a diet","eat well"];
function zdrowie()
{
	let zdrowieElement = $('#slowka');
	zdrowieElement.empty();
	for (let i = 0; i < health.length; i++)
	{
		zdrowieElement.append('<div class="slowko">' + health[i] + '</div>');
	}
}

var inWork=["retire","earn","get promoted","sack","employ","look for a job","get a job","take a day off","negotiate","work overtime","apply for a job","qualifications","experience","skill"];
function wPracy()
{
	let wPracyElement = $('#slowka');
	wPracyElement.empty();
	for (let i = 0; i < inWork.length; i++)
	{
		wPracyElement.append('<div class="slowko">' + inWork[i] + '</div>');
	}
}