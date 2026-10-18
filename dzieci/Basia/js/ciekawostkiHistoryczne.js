document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.maCiekawostke').forEach(element => {
        const nazwaPliku = element.dataset.ciekawostka;
        const miejsce = element.querySelector('.miejsceNaCiekawostke');

        if (!nazwaPliku || !miejsce) return;

        fetch(`ciekawostkiHistoryczne/${nazwaPliku}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Nie udało się wczytać: ${nazwaPliku}`);
                }

                return response.text();
            })
            .then(html => {
                miejsce.innerHTML = html;
            })
            .catch(error => {
                console.error('Błąd wczytywania ciekawostki:', error);
            });
    });
});
