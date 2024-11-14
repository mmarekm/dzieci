var BasiaSlowka=["fotel","biurko","meble","wazon","winda","śmieci","koc","prześcieradło","poduszka","ręcznik","trawnik","taras","balkon","kominek","komin","dach","strych","pudełko","wiadro","butelka","nożyczki","młotek","narzędzie","automatyczna sekretarka","wieszak","suszarka do włosów","ogrzewanie centralne","kaloryfer","klimatyzacja","doniczka","otwieracz do puszek","robot kuchenny","ekspres do kawy","sokowirówka","zamrażarka","zmywarka","mikrofalówka","piekarnik","kuchenka","toster"];
var UlaSlowka=["ogród","klucz","pokój","lodówka","salon","sypialnia","łazienka","kuchnia","szafa","książka","regał","pralka","zlew","prysznic","wanna","stół","krzesło","łóżko","kanapa","okno","ściana","podłoga","parter","drzwi","sufit","dywan","garaż","piwnica","lustro","dom","mieszkanie","zasłony","podwórko (dziedziniec)","drabina","grzejnik","półka","odkurzacz","tapeta","toaleta","schody"];
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