var wynik1 = 0;
var wynik2 = 0;
var nrKolejki = 0;
var ukladPionkowBialych = [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0];
var ukladPionkowCzarnych = [0, 0, 0, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0];
var ukladPionkowBialychStartowy = ukladPionkowBialych.slice();
var ukladPionkowCzarnychStartowy = ukladPionkowCzarnych.slice();
var nrGracza;
var wszystkieNaFiniszu;
var najdalszyOdMety = 0;
var wynikRzutu;
var mozliwyRuch = false;
var nazwaGracza1;
var nazwaGracza2;

function graj()
{
	$('#ktoGra').hide();
	nazwaGracza1 = $('#NazwaGracza1').val();
    nazwaGracza2 = $('#NazwaGracza2').val();
	nrGracza = nrKolejki % 2 + 1;
	wynik1 = Math.floor(Math.random() * 6) + 1;
	wynik2 = Math.floor(Math.random() * 6) + 1;
	$('#button').html('<button onclick="rzutKoscmi();">Rzuć kostkami</button>');
	rysujPlansze();
}

function czyNaFiniszu()
{
	wszystkieNaFiniszu = true;
	if (nrGracza == 1)
	{
		for (let i = 1; i < 20; i++)
			if (ukladPionkowBialych[i] > 0)
				wszystkieNaFiniszu = false;
		if (wszystkieNaFiniszu)	
		{
			for (let j = 20; j < 26; j++)
			{
				if (ukladPionkowBialych[j] > 0)
				{
				najdalszyOdMety = j;
				break;
				}
			}
		}
	}
	if (nrGracza == 2)
	{
		for (let i = 26; i > 7; i--)
			if (ukladPionkowCzarnych[i] > 0)
				wszystkieNaFiniszu = false;
		if (wszystkieNaFiniszu)
		{
			for (let j = 7; j > 1; j--)
			{
				if (ukladPionkowCzarnych[j] > 0)
				{
				najdalszyOdMety = j;
				break;
				}
			}
		}
	}
}

function rysujPlansze()
{  
	$('#plansza').html('');
	let j = 13;
    for (let i = 0; i < 28; i++)
    {
        let startoweI = i;
		if (i < 14)
		{
			i = i + j;
			j = j - 2;
		}
		$('#plansza').append('<div class="pole" data-identyfikator="' + i + '" id="pole' + i + '"></div>');
		if (i == 8 || i == 19)
			$('#plansza').append('<div class="srodek"></div>');
		if (i == 0 || i == 27)		
			$('#plansza').append('<div style="clear: both;"></div>');		
        let ostatniePole = $('.pole').last();
		if (i === 0 || i === 27)
			ostatniePole.css('background-color', 'forestgreen');		
		else if (i === 1 || i === 26)	
			ostatniePole.css('background-color', 'tomato');
        else if (i % 2 === 0)
            ostatniePole.css('background-color', 'saddlebrown');
        else
            ostatniePole.css('background-color', 'black');    
		i = startoweI;
    }
	for (let i = 0; i < 28; i ++)
	{
		$('#pole' + i).html('');
		if (ukladPionkowBialych[i] != 0)
		{
			for (let j = 0; j < ukladPionkowBialych[i]; j++)
				$('#pole' + i).append('<div class="pionBialy"></div>');
		}
		if (ukladPionkowCzarnych[i] != 0)
		{
			for (let j = 0; j < ukladPionkowCzarnych[i]; j++)
				$('#pole' + i).append('<div class="pionCzarny"></div>');
		}
	}
	if (nrGracza == 1)
		$('#czyjaKolej').html('Teraz gra: <span style="font-size: 60px;"><b>' + nazwaGracza1 + '</b></span>');
	if (nrGracza == 2)
		$('#czyjaKolej').html('Teraz gra: <span style="font-size: 60px;"><b>' + nazwaGracza2 + '</b></span>');
	if ($('#kosc1').data("czyRzucano") == true)
		$('#kosc1 img').attr('src', '1' + wynik1 + '.jpg');
	if ($('#kosc2').data("czyRzucano") == true)
		$('#kosc2 img').attr('src', '1' + wynik2 + '.jpg');
}

function rzutKoscmi()
{
	$('#button').html('');
	$('#kosc1').html('<img src="' + wynik1 + '.jpg" width="80" height="80" />').data("wynikRzutu", wynik1).data("czyRzucano", false).data("aktywnyDublet", "2").on("click", wybranaKostka);
	$('#kosc2').html('<img src="' + wynik2 + '.jpg" width="80" height="80" />').data("wynikRzutu", wynik2).data("czyRzucano", false).data("aktywnyDublet", "2").on("click", wybranaKostka);
	czyNaFiniszu();
	czyMozliwyRuch();
	rysujPlansze();
}

function czyMozliwyRuch()
{
	if (ukladPionkowBialych[27] > 14)
	{
		alert('koniec gry, wygrał Gracz ' + nazwaGracza1);
		koniecGry();
		return;
	}
	if (ukladPionkowCzarnych[0] > 14)
	{
		alert('koniec gry, wygrał Gracz ' + nazwaGracza2);
		koniecGry();
		return;
	}
	if ($('#kosc1').data("czyRzucano") == false && $('#kosc2').data("czyRzucano") == false)
	{
		if (nrGracza == 1)
		{
			if (!(ukladPionkowBialych[1] > 0 && (ukladPionkowCzarnych[wynik1 + 1] > 1 && ukladPionkowCzarnych[wynik2 + 1] > 1)))
			{
				for (let i = 2; i < 26; i++)
				{
					if (ukladPionkowBialych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i + wynik1, i + wynik2);					
						for (let j = 0; j < mozliweRuchy.length; j++)
						{
							if ((mozliweRuchy[j] < 26) && (ukladPionkowCzarnych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] > 25) && wszystkieNaFiniszu))
							{	
								mozliwyRuch = true;
								return;
							}
						}
						
					}
				}
			}
		}
		else if (nrGracza == 2)
		{
			if (!(ukladPionkowCzarnych[26] > 0 && (ukladPionkowBialych[26 - wynik1] > 1 && ukladPionkowBialych[26 - wynik2] > 1)))
			{
				for (let i = 25; i > 1; i--)
				{
					if (ukladPionkowCzarnych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i - wynik1, i - wynik2); 
						for (let j = 0; j < mozliweRuchy.length; j++)
						{
							if ((mozliweRuchy[j] > 1) && (ukladPionkowBialych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] < 2) && wszystkieNaFiniszu))
							{
								mozliwyRuch = true;
								return;
							}
						}
					}
				}
			}
		}
	}
	else if ($('#kosc1').data("czyRzucano") == true && $('#kosc2').data("czyRzucano") == false)
	{
		if (nrGracza == 1)
		{
			if (!(ukladPionkowBialych[1] > 0 && ukladPionkowCzarnych[wynik2 + 1] > 1))
			{
				for (let i = 2; i < 26; i++)
				{
					if (ukladPionkowBialych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i + wynik2); 
						for (let j = 0; j < mozliweRuchy.length; j++)
						{
							if ((mozliweRuchy[j] < 26) && (ukladPionkowCzarnych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] > 25) && wszystkieNaFiniszu))
							{
								mozliwyRuch = true;
								return;
							}
						}
					}
				}
			}
		}
		else if (nrGracza == 2)
		{
			if (!(ukladPionkowCzarnych[26] > 0 && ukladPionkowBialych[26 - wynik2] > 1))
			{
				for (let i = 25; i > 1; i--)
				{
					if (ukladPionkowCzarnych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i - wynik2); 
						for (let j = 0; j < mozliweRuchy.length; j++)
						{			
							if ((mozliweRuchy[j] > 1) && (ukladPionkowBialych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] < 2) && wszystkieNaFiniszu))
							{
								mozliwyRuch = true;
								return;
							}
						}
					}
				}
			}
		}
	}
	else if ($('#kosc1').data("czyRzucano") == false && $('#kosc2').data("czyRzucano") == true)
	{
		if (nrGracza == 1)
		{
			if (!(ukladPionkowBialych[1] > 0 && ukladPionkowCzarnych[wynik1 + 1] > 1))
			{
				for (let i = 2; i < 26; i++)
				{
					if (ukladPionkowBialych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i + wynik1); 
						for (let j = 0; j < mozliweRuchy.length; j++)
						{
							mozliwyRuch = false;
							if ((mozliweRuchy[j] < 26) && (ukladPionkowCzarnych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] > 25) && wszystkieNaFiniszu))
							{
								mozliwyRuch = true;
								return;
							}
						}
					}
				}
			}
		}
		else if (nrGracza == 2)
		{
			if (!(ukladPionkowCzarnych[26] > 0 && ukladPionkowBialych[26 - wynik1] > 1))
			{
				for (let i = 25; i > 1; i--)
				{
					if (ukladPionkowCzarnych[i] != 0)
					{
						let mozliweRuchy = []; 
						mozliweRuchy.push(i - wynik1); 
						for (let j = 0; j < mozliweRuchy.length; j++)
						{
							mozliwyRuch = false;
							if ((mozliweRuchy[j] > 1) && (ukladPionkowBialych[mozliweRuchy[j]] < 2) || ((mozliweRuchy[j] < 2) && wszystkieNaFiniszu))
							{
								mozliwyRuch = true;
								return;
							}
						}
					}
				}
			}
		}
	}
	else
		mozliwyRuch = false;
	if (!mozliwyRuch)
		koniecKolejki();
}

function koniecKolejki()
{
	for (let i = 0; i < 28; i++)
	{
		$('#pole' + i).off("click");
		$('#pole' + i).removeClass("aktywnePole");
	}
	$('#kosc1').off("click");
	$('#kosc2').off("click");
	$('#kosc1').html('');
	$('#kosc2').html('');
	aktualnaKostka = 0;
	$('#kosc1').data("czyRzucano", false);
	$('#kosc2').data("czyRzucano", false);
	$('#kosc1').data("aktywnyDublet", "2");
	$('#kosc2').data("aktywnyDublet", "2");
	alert("wyrzucono " + wynik1 + " i " + wynik2 + ".","KONIEC RUCHU");
	nrKolejki++;
	ukladPionkowBialychStartowy = ukladPionkowBialych.slice();
	ukladPionkowCzarnychStartowy = ukladPionkowCzarnych.slice();
	graj();
	return;
}

function restartKolejki()
{
	for (let i = 0; i < 28; i++)
	{
		$('#pole' + i).off("click");
		$('#pole' + i).removeClass("aktywnePole");
	}
	$('#kosc1').off("click");
	$('#kosc2').off("click");
	$('#kosc1').html('');
	$('#kosc2').html('');
	aktualnaKostka = 0;
	$('#kosc1').data("czyRzucano", false);
	$('#kosc2').data("czyRzucano", false);
	$('#kosc1').data("aktywnyDublet", "2");
	$('#kosc2').data("aktywnyDublet", "2");
	ukladPionkowBialych = ukladPionkowBialychStartowy.slice();
	ukladPionkowCzarnych = ukladPionkowCzarnychStartowy.slice();
	alert("spróbuj inaczej","POWTARZAMY RUCH");
	rzutKoscmi();
}

function wybranaKostka()
{	
	$('#kosc1').css("opacity","0");
	$('#kosc2').css("opacity","0");
	if (wynik1 == wynik2)
	{
		if ($('#kosc1').data("aktywnyDublet") == "2")
			$('#kosc1').data("aktywnyDublet", "1");
		if ($('#kosc2').data("aktywnyDublet") == "2")
			$('#kosc2').data("aktywnyDublet", "1");
	}	
	$(this).data("czyRzucano", true);
	$(this).off("click");
	if ($(this).data("aktywnyDublet") == "1")
	{
		$(this).on("click", wybranaKostka);
		$(this).data("czyRzucano", false);
		$(this).data("aktywnyDublet", "0");
	}
	wynikRzutu = $(this).data("wynikRzutu");
	if (nrGracza == 1 && ukladPionkowBialych[1] > 0)
		$('#pole1').addClass('aktywnePole').data("identyfikator", 1).on("click", function() { ruch(this, 1); });
	else if (nrGracza == 2 && ukladPionkowCzarnych[26] > 0)
		$('#pole26').addClass('aktywnePole').data("identyfikator", 26).on("click", function() { ruch(this, 26); });
	else
	{
		for (let i = 2; i < 26; i++)
		{
			if (nrGracza == 1 && ukladPionkowBialych[i] != 0)
				$('#pole' + i).addClass('aktywnePole').data("identyfikator", i).on("click", function() { ruch(this, i); });
			
			if (nrGracza == 2 && ukladPionkowCzarnych[i] != 0) 
				$('#pole' + i).addClass('aktywnePole').data("identyfikator", i).on("click", function() { ruch(this, i); });			
		}
	}
}

function ruch(element, identyfikator)
{
	let celBialych = identyfikator + wynikRzutu;
	let celCzarnych = identyfikator - wynikRzutu;
	if (nrGracza == 1)
	{
		if ((celBialych < 26) && (ukladPionkowCzarnych[celBialych] > 1) || (!wszystkieNaFiniszu && (celBialych > 25)))			
			restartKolejki();		
		else if (ukladPionkowCzarnych[celBialych] == 1)
		{
			ukladPionkowBialych[identyfikator] --;
			ukladPionkowBialych[celBialych] = 1;
			ukladPionkowCzarnych[celBialych] = 0;
			ukladPionkowCzarnych[26]++;
		}
		else if ((wszystkieNaFiniszu) && (celBialych > 25))
		{
			if (((identyfikator == najdalszyOdMety) && (celBialych >= 26) && najdalszyOdMety >= 26 - wynikRzutu) || (celBialych == 26))
			{
				ukladPionkowBialych[identyfikator] --;
				ukladPionkowBialych[27] ++;
			}
			else
				restartKolejki();
		}
		else if (celBialych != 26)
		{
		ukladPionkowBialych[identyfikator] --;
		ukladPionkowBialych[celBialych] ++;
		}
		else
		{
			alert('nieprzewidziana sytuacja, trzeba doprogramować!');
			restartKolejki();
		}
	}
	if (nrGracza == 2)
	{
		if ((celCzarnych > 1) && (ukladPionkowBialych[celCzarnych] > 1) || (!wszystkieNaFiniszu && (celCzarnych < 2)))
			restartKolejki();
		else if (ukladPionkowBialych[celCzarnych] == 1)
		{
			ukladPionkowCzarnych[identyfikator] --;
			ukladPionkowCzarnych[celCzarnych] = 1;
			ukladPionkowBialych[celCzarnych] = 0;
			ukladPionkowBialych[1]++;
		}
		else if ((wszystkieNaFiniszu) && (celCzarnych < 2))
		{
			if (((identyfikator == najdalszyOdMety) && (celCzarnych <= 1) && najdalszyOdMety <= wynikRzutu + 1) || (celCzarnych == 1))
			{
				ukladPionkowCzarnych[identyfikator] --;
				ukladPionkowCzarnych[0] ++;
			}
			else
				restartKolejki();
		}
		else if (celCzarnych != 1)
		{
		ukladPionkowCzarnych[identyfikator] --;
		ukladPionkowCzarnych[celCzarnych] ++;
		}
		else
		{
			alert('nieprzewidziana sytuacja, trzeba doprogramować!');
			restartKolejki();
		}
	}
	$(element).off("click");
	rysujPlansze();
	$('#kosc1').css("opacity","1");
	$('#kosc2').css("opacity","1");
	najdalszyOdMety = 0;
	czyNaFiniszu();
	mozliwyRuch = false;
	czyMozliwyRuch();
}

function koniecGry()
{
	$('#gra').html('<img src="Bombik.jpg" />');
}