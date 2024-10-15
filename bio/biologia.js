var zagadnienia = [["klasa V","biologia-nauka", "czynności życiowe organizmów żywych", "tkanka, co to i przykłady", "komórka i tkanka", "różnice między komórkami roślinnymi i zwierzęcymi", "najważniejsze składniki chemiczne z których zbudowany jest organizm żywy", "rola wody w organizmie", "fotosynteza", "wymiana gazowa u roślin i zwierząt i jej przebieg", "Królestwa organizmów", "różnice między bakteriami i wirusami", "wyjaśnienie różnorodnej budowy grzybów", "budowa porostów", "części rośliny i ich funkcje", "mchy-rośliny wodno-lądowe", "paprotniki, skrzypy i widłaki (przykłady)", "cechy roślin nasiennych i przykłady", "rozmnażanie się roślin nasiennych", "rozprzestrzenianie się roślin okrytonasiennych"],
["klasa IV","przyroda ożywiona i nieożywiona", "sposoby poznawania przyrody (przyrządy i pomoce)", "cechy organizmów żywych", "samożywność i cudzożywność (które organizmy)", "potrzeba tlenu człowiekowi", "układy w ciele człowieka i ich poszczególne odcinki", "omówienie wybranego łańcucha pokarmowego", "zdrowy styl życia", "przystosowanie do życia w wodzie i powietrzu na przykładzie ryb i ptaków", "organizm zwierzęcy żyjący na lądzie"]];

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