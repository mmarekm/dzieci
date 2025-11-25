var UlaSlowka=["miska","plama","bałagan","ścierka","gąbka","płyn do zmywania naczyń","proszek do prania","mydło","prace domowe","szczoteczka do zębów","posprzątany","niechlujny","przytulny","wygodny","mierzyć, robić pomiar","otwierać","zamykać","budować","odnawiać","dekorować","wynajmować (komuś)","wynajmować (od kogoś)","podlewać rośliny","wyprowadzać psa na spacer","posprzątać zabawki","wieszać pranie","składać ubrania","zamiatać podłogę","robić pranie","uprzątnąć","czyścić","myć naczynia","prasować","hodować zwierzęta","mieszkać","ścielić łóżko","ścierać kurz","sprzątać"];
var BasiaSlowka=["wycieczka","rower","prom","lotnisko","przystanek autobusowy","metro","bagaż","turysta","lot","autobus","pociąg","samochód","samolot","bilet","paszport","dworzec","walizka","bagaż podręczny","steward","biuro podróży","na pokładzie","karta pokładowa","miejsce przy przejściu","miejsce przy oknie","rejs","łódka","granica","wiza","peron","wakacje zorganizowane","podróżnik","jedzenie w puszce","buty trekkingowe","hamak","krem z filtrem","apteczka","kompas","mapa","scyzoryk","lina","plecak","ognisko","śpiwór","latarka","namiot","pole namiotowe","tory","tramwaj","myjnia samochodowa","pasażer"];

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