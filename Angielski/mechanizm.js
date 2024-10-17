var BasiaSlowka=["kurtka","skarpetka","pasek","okulary","szalik","rękawiczka","but","spodnie","parasol","koszulka","sukienka","czapka","kapelusz","spódnica","koszula","płaszcz","torebka","guzik","wysokie obcasy","ubierać się","leginsy","dres","bluza","golf","sweter","pierścionek","naszyjnik","kolczyk","krawat","bielizna","bluzka","ubrania","futro","jedwab, jedwabny","wełna","bawełna, bawełniany","łańcuszek","bransoletka","kąpielówki","kostium kąpielowy","biustonosz","kozaki, buty z wysoką cholewą","sandały","maska","kostium","przymierzać","nosić (na sobie)","zdejmować","zakładać","zapinać, zawiązywać","zapinać guziki","pasować"];
var UlaSlowka=["głowa","włosy","ucho","oko","nos","ząb","usta","twarz","szyja","ramię","brzuch","plecy","ręka","noga","kolano","stopa","palec u nogi","palec u ręki","broda","łokieć","opalenizna","skóra","mięsień","policzek","podbródek","czoło","nadgarstek","kostka","pryszcz","piegi","ciało","grzywka","warkocz","kucyk","fryzura","wąsy","paznokieć","klatka piersiowa","usta, buzia","czesać się","robić krok","skakać","stać","myć","budzić się","spać","śpieszyć się","machać","wskazywać","trząść","upadać","upuścić","trzymać","siadać","wstawać","położyć się"];
function start()
{
    for (let i = 0; i < UlaSlowka.length; i++)
	{
        if (i < UlaSlowka.length / 2)
			$('#Ula1').append('<div class="slowko">' + UlaSlowka[i] + ' -</div>');
		else
			$('#Ula2').append('<div class="slowko">' + UlaSlowka[i] + ' -</div>');
	}
	for (let i = 0; i < BasiaSlowka.length; i++)
	{
        if (i < BasiaSlowka.length / 2)
			$('#Basia1').append('<div class="slowko">' + BasiaSlowka[i] + ' -</div>');
		else
			$('#Basia2').append('<div class="slowko">' + BasiaSlowka[i] + ' -</div>');
	}
}