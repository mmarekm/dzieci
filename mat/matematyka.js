var zagadnienia = [["klasa V","iloczyn potęg", "cechy podzielności przez 6, 12, 15", "liczby pierwsze/złożone", "rozkład na czynniki pierwsze i wskazanie dzielników liczby", "dodawanie i odejmowanie ułamków zwykłych o różnych mianownikach", "mnożenie i dzielenie ułamków dziesiętnych", "zamiana jednostek(zł/gr, t/kg/dag/g, km/m/dm/cm/mm)", "proste równoległe i prostopadłe", "mierzenie kątów i ich rodzaje", "kąty wierzchołkowe i przyległe", "rodzaje i własności trójkątów(suma kątów, z jakich boków można zbudować), wysokość, pole", "pole i wysokość równoległoboków, trapezu", "klasyfikacja czworokątów", "Prostopadłościan - objętość, pole powierzchni bocznej/podstawy/całkowitej", "siatki graniastosłupów"],
["klasa IV","liczby naturalne na osi liczbowej", "zapis liczb", "obliczanie potęgi 2 i 3", "dzielenie z resztą", "cechy podzielności przez 2, 3, 5, 9, 10", "obliczenia pod (i nad) kreską", "obliczenia kalendarzowe", "ułamki zwykłe (ilorazy), skracanie/rozszerzanie", "ułamki właściwe/niewłaściwe/liczby mieszane", "dodawanie i odejmowanie ułamków o tych samych mianownikach", "mnożenie przez liczbę naturalną", "zamiana ułamka dziesiętnego na zwykły", "porównywanie ułamków dziesiętnych", "dodawanie i odejmowanie ułamków dziesiętnych", "mnożenie ułamków dziesiętnych przez 10, 100,...", "pojęcia: prosta, półprosta, odcinek, punkt. wielokąt, okrąg, koło", "zamiana jednostek (m/cm)", "obwód i pole wielokąta", "mapa/plan/skala", "rozpoznanie: stożek, kula, prostopadłościan, ostrosłup, sześcian, walec", "własności prostopadłościanu i sześcianu"],
["klasa III","tabliczka mnożenia w zakresie 100", "znaki rzymskie", "obliczenia zegarowe", "jednostki miary i masy", "rozwiązywanie zadań tekstowych"],
["klasa II","dodawanie i odejmowanie liczb dwucyfrowych", "tabliczka mnożenia w zakresie 50", "obliczenia pieniężne"],
["klasa I","podstawowe figury geometryczne", "klasyfikacja obiektów i określanie położenia ich względem innych", "porównywanie liczb (<,>,=), zapisywanie prostych działań", "liczenie w zakresie 10, a dziesiątkami w zakresie 100", "odczytywanie pełnych godzin", "określanie długości i wagi przedmiotów"]];

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