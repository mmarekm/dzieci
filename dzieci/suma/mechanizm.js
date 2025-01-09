var BasiaSlowka=["tylko","część","grupa","dużo (czegoś)","para (czegoś)","prawie","wystarczająco","za dużo (niepoliczalne)","za dużo (policzalne)","za mało (niepoliczalne)","za mało (policzalne)","mało","nieco, trochę","niewiele","kilka","większość","następny","też","kłamstwo","prawda","rozłączać się (telefon)","odbierać telefon","dzwonić (telefon)","wołać, nazywać","błagać","wyjaśniać","oferować","sugerować","polecać","odmawiać","obiecać","komunikować się","rozmawiać","powiedzieć (komuś)","powiedzieć (coś)","zwracać pieniądze, spłacać","zapisać","oddzwaniać","dowiedzieć się","wiedzieć, znać","mówić, przemawiać","dogadywać się z kimś","dzwonić","Jak długo?","O której?","Skąd?","to","droga","park","pole","stolica","ulica","gospodarstwo","plac","sąsiad","most","miasto","wioska","poczta","tereny wiejskie","kościół","biblioteka","muzeum","bank","drapacz chmur","schody ruchome","fabryka","pomnik, zabytek","opera","transport publiczny","brama","centrum","przejście dla pieszych","światła drogowe","ruch uliczny","stacja benzynowa"];
var UlaSlowka=BasiaSlowka;
var UlaMat=[];
var BasiaMat=[];
function start()
{
    for (let i = 0; i < UlaSlowka.length; i++)
	{
        if (i < UlaSlowka.length / 2)
			$('#UlaAng1').append('<div class="slowko">' + UlaSlowka[i] + ' -</div>');
		else
			$('#UlaAng2').append('<div class="slowko">' + UlaSlowka[i] + ' -</div>');
	}
	for (let i = 0; i < BasiaSlowka.length; i++)
	{
        if (i < BasiaSlowka.length / 2)
			$('#BasiaAng1').append('<div class="slowko">' + BasiaSlowka[i] + ' -</div>');
		else
			$('#BasiaAng2').append('<div class="slowko">' + BasiaSlowka[i] + ' -</div>');
	}
	/*for (let i = 0; i < UlaMat.length; i++)	
		$('#UlaMat1').append('<div class="slowko">' + UlaMat[i] + '</div>');	
	for (let i = 0; i < BasiaMat.length; i++)
	{
        if (i < BasiaMat.length / 2)
			$('#BasiaMat1').append('<div class="slowko">' + BasiaMat[i] + ' =</div>');
		else
			$('#BasiaMat2').append('<div class="slowko">' + BasiaMat[i] + ' =</div>');
	}*/
}