var zagadnienia = [["klasa V","Power Point: tytuł, motywy, formatowanie, animacje/przejścia, muzyka/wideo na której karcie, zapis jako video", "Pivot Animator: tworzenie figury/co to klatka, pętla/dodanie tła/funkcje AVI i GIF", "Scratch: rysunek figur/kształtów, tło, co to algorytm", "Word: interlinia/kontrola bękartów i wdów/format obrazów/tabela i jej ustawienia"],
["klasa IV","Paint: piksel/właściwości obrazu/narzędzia/obszar roboczy/kopiowanie bez tła", "Internet: czym jest/przeglądarka-wyszukiwarka(najpopularniejsze)/antywirus/zasady korzystania z obrazów/reakcja na hejt i inne zagrożenia/jak nie uzależnić się", "Scratch: do czego służy programowanie/interfejs/duszek(zmiany-ruch)/scena(zmiany)/polecenia ZAWSZE-JEŻELI NA BRZEGU, ODBIJ SIĘ.../współrzędne", "Word: co to/interfejs/styl tekstu/numerowanie/lista wielopoziomowa/skróty klawiaturowe/liczenie wyrazów/akapit/znaki niedrukowane/twarda spacja/miękki enter"],
["klasa III","podstawy Scratch"],
["klasa II","bezpieczne korzystanie z komputera/internetu", "programowanie wizualne"],
["klasa I","podstawy Word/Paint", "zapis pliku"]];

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