const klucz = {
	'20260308': 'Ndz3WP',
    '20260309': 'pn3WP',
    '20260310': 'wt3WP',
    '20260311': 'sr3WP'
};

function dataDoStr(data) {
    const rok = data.getFullYear();
    const miesiac = String(data.getMonth() + 1).padStart(2, '0');
    const dzien = String(data.getDate()).padStart(2, '0');
    return `${rok}${miesiac}${dzien}`;
}

function pobierzFragment(nazwaPliku, idElementu) {
    const element = document.getElementById(idElementu);
    if (!element) return;
    if (nazwaPliku) {
        fetch(`Slowo/${nazwaPliku}.html`)
            .then(r => r.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                element.innerHTML = doc.getElementById('fragment').innerHTML;
            })
            .catch(() => { element.innerText = 'Brak słowa.'; });
    } else {
        element.innerText = 'Brak słowa.';
    }
}

const dzis = new Date();
const jutro = new Date(dzis);
jutro.setDate(dzis.getDate() + 1);
const kluczDzis = klucz[dataDoStr(dzis)];
const kluczJutro = klucz[dataDoStr(jutro)];
pobierzFragment(kluczDzis, 'trescDzis');
pobierzFragment(kluczJutro, 'trescJutro');