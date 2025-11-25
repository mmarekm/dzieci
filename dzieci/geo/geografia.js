var zagadnienia = [["klasa V","skale mapy: mianowana, liczbowa, obliczanie odległości rzeczywistej", "wysokość na mapie, bezwzględna/względna, poziomica", "niziny, wyżyny, góry w Polsce", "największe rzeki, jeziora w Polsce-rzeka główna, dopływ, ujście, źródło", "największe miasta w Polsce", "występowanie i wykorzystanie węgla kamiennego", "powstawanie wąwozów lessowych", "formy krasowe na Wyżynie Krakowsko-Częstochowskiej-jaskinia, stalaktyt, stalagmit, stalagnat", "pogoda w górach-halny", "różnice między Tatrami Wysokimi a Zachodnimi-wysokości bezwzględne, granity, wapienie, stawy, jaskinie", "kontynenty i oceany", "wielcy podróżnicy: Kolumb, Magellan, Vespucci, Cook, Amundsen, Peary", "lasy równikowe, lasy liściaste strefy umiarkowanej, tajga, sawanna i step, pustynie gorące i pustynie lodowe, krajobraz śródziemnomorski: ich położenie, temperatury i opady, roślinność, zwierzęta, działalność człowieka", "atrakcje turystyczne w krajach śródziemnomorskich", "piętra roślinności w górach-regiel dolny, regiel górny, kosodrzewina, hale, turnie, wieczne śniegi i lodowce"],
["klasa IV","główne i pośrednie kierunki geograficzne, wyznaczanie ich w dzień i noc, róża kierunków", "przyrządy do pomiaru składników pogody/meteorolog", "widnokrąg", "co znaczy <em>słońce wędruje po niebie</em>", "daty rozpoczęcia pór roku", "elementy krajobrazu okolicy", "funkcja mapy/planu, skala"]];

function wyswietl()
{
	for (let i = 0; i < zagadnienia.length; i++) 
	{
		for (let j = 0; j < zagadnienia[i].length; j++)
		{
			if (j == 0)
				$('#zawartosc').append('<div class="naglowek">' + zagadnienia[i][j] + '</div>');
			else
				$('#zawartosc').append('<div class="zagadnienie">' + zagadnienia[i][j] + '</div>');
		}
	}
}