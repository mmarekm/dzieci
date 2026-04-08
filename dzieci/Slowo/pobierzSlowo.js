const klucz = {'20260408':'SrWlk', '20260409':'CzWlk', '20260410':'PtWlk', '20260411':'SbWlk', '20260412':'Ndz2WlkA', '20260413':'pn2Wlk', '20260414':'wt2Wlk', '20260415':'sr2Wlk', '20260416':'cz2Wlk', '20260417':'pt2Wlk', '20260418':'sb2Wlk', '20260419':'Ndz3WlkA', '20260420':'pn3Wlk', '20260421':'wt3Wlk', '20260422':'sr3Wlk', '20260423':'WojciechaBiskupaMeczennikaPatronaPolski', '20260424':'pt3Wlk', '20260425':'MarkaEwangelisty', '20260426':'Ndz4WlkA', '20260427':'pn4Wlk', '20260428':'wt4Wlk', '20260429':'KatarzynySienenskiej', '20260430':'cz4Wlk', '20260501':['pt4Wlk', 'JozefaRzemieslnika'], '20260502':'NMPKrolowejPolski', '20260503':'Ndz5WlkA', '20260504':'pn5Wlk', '20260505':'wt5Wlk', '20260506':'FilipaJakubaApostolow', '20260507':'cz5Wlk', '20260508':'StanislawaBiskupaMeczennikaPatronaPolski', '20260509':['sb5Wlk', 'NMPLaskawejPatronkiWarszawy'], '20260510':'Ndz6WlkA'};

function dataDoStr(data) {
    const rok = data.getFullYear();
    const miesiac = String(data.getMonth() + 1).padStart(2, '0');
    const dzien = String(data.getDate()).padStart(2, '0');
    return `${rok}${miesiac}${dzien}`;
}

const cacheJson = {};

function pobierzJson(ksiega) {
    if (cacheJson[ksiega]) {
        return Promise.resolve(cacheJson[ksiega]);
    }
    return fetch(`Biblia/${ksiega}.json`)
        .then(r => r.json())
        .then(dane => {
            cacheJson[ksiega] = dane;
            return dane;
        });
}

function wypelnijWersety() {
    const elementy = document.querySelectorAll('.werset');
    elementy.forEach(p => {
        const ref = p.getAttribute('data-ref');
        if (!ref) return;
        const czesci = ref.trim().split(' ');
        const ksiega = czesci[0];
        const zakresy = czesci[1].split('.');
        const rozdzial = zakresy[0].split(',')[0];
        pobierzJson(ksiega).then(dane => {
            const tekstoweKlucze = p.classList.contains('psalm');
            if (tekstoweKlucze) {
                const linie = [];
                zakresy.forEach(zakres => {
                    const klucz = zakres.includes(',')
                        ? zakres.split(',')[1]
                        : zakres;
                    if (dane[rozdzial] && dane[rozdzial][klucz]) {
                        linie.push(dane[rozdzial][klucz]);
                    }
                });
                p.innerHTML = linie.join('<br>');
            } else {
                let tekst = '';
                zakresy.forEach(zakres => {
                    let wersety_str = zakres.includes(',')
                        ? zakres.split(',')[1]
                        : zakres;
                    if (/^\d+[a-z]$/.test(wersety_str)) {
                        if (dane[rozdzial] && dane[rozdzial][wersety_str]) {
                            tekst += dane[rozdzial][wersety_str] + ' ';
                        }
                    } else if (wersety_str.includes('-')) {
                        const czesciZakresu = wersety_str.split('-');
                        const odStr = czesciZakresu[0];
                        const doStr = czesciZakresu[1];
                        const od = parseInt(odStr);
                        const doNum = parseInt(doStr);
                        if (/[a-z]$/.test(odStr)) {
                            if (dane[rozdzial] && dane[rozdzial][odStr]) {
                                tekst += dane[rozdzial][odStr] + ' ';
                            }
                        }
                        const odNum = /[a-z]$/.test(odStr) ? od + 1 : od;
                        for (let i = odNum; i <= doNum; i++) {
                            if (dane[rozdzial] && dane[rozdzial][String(i)]) {
                                tekst += dane[rozdzial][String(i)] + ' ';
                            }
                        }
                        if (/[a-z]$/.test(doStr)) {
                            if (dane[rozdzial] && dane[rozdzial][doStr]) {
                                tekst += dane[rozdzial][doStr] + ' ';
                            }
                        }
                    } else {
                        const i = Number(wersety_str);
                        if (dane[rozdzial] && dane[rozdzial][String(i)]) {
                            tekst += dane[rozdzial][String(i)] + ' ';
                        }
                    }
                });
                p.textContent = tekst.trim();
            }
        }).catch(() => {
            p.textContent = `Brak tekstu: ${ref}`;
        });
    });
}

function pobierzFragment(nazwaPliku, idElementu) {
    const element = document.getElementById(idElementu);
    if (!element) return;

    const pliki = Array.isArray(nazwaPliku) ? nazwaPliku : (nazwaPliku ? [nazwaPliku] : []);

    if (pliki.length === 0) {
        element.innerHTML = '';
        return;
    }

    element.innerHTML = '';

    pliki.forEach(plik => {
        fetch(`Slowo/${plik}.html`)
            .then(r => r.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const div = document.createElement('div');
                div.innerHTML = doc.getElementById('fragment').innerHTML;
                element.appendChild(div);
                wypelnijWersety();
            })
            .catch(() => {});
    });
}

const dzis = new Date();
const jutro = new Date(dzis);
jutro.setDate(dzis.getDate() + 1);

const kluczDzis = klucz[dataDoStr(dzis)];
const kluczJutro = klucz[dataDoStr(jutro)];

pobierzFragment(kluczDzis, 'trescDzis');
pobierzFragment(kluczJutro, 'trescJutro');