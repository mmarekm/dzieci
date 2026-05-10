const klucz = {'20260510':'Ndz6WlkA', '20260511':'pn6Wlk', '20260512':'wt6Wlk', '20260513':'sr6Wlk', '20260514':['WniebowstapieniePanskieA', 'MaciejaApostola'], '20260515':'pt6Wlk', '20260516':'AndrzejaBoboliPatronaPolskiMetropoliiWarszawskiej', '20260517':['WniebowstapieniePanskieA', 'Ndz7WlkA'], '20260518':'pn7Wlk', '20260519':'wt7Wlk', '20260520':'sr7Wlk', '20260521':'cz7Wlk', '20260522':'pt7Wlk', '20260523':['sb7Wlk', 'WigiliaZeslaniaDuchaSwietego'], '20260524':'ZeslanieDuchaSwietegoA', '20260525':'NMPMatkiKosciola', '20260526':'wt8zwII', '20260527':'sr8zwII', '20260528':'JezusaChrystusaNajwyzszegoIWiecznegoKaplanaA', '20260529':['pt8zwII', 'UrszuliLedochowskiejzw'], '20260530':'sb8zwII', '20260531':'NajswietszejTrojcyA', '20260601':'pn9zwII', '20260602':'wt9zwII', '20260603':'sr9zwII', '20260604':'NajswietszegoCialaIKrwiChrystusaA', '20260605':'pt9zwII', '20260606':'sb9zwII', '20260607':'Ndz10zwA', '20260608':'pn10zwII', '20260609':'wt10zwII', '20260610':'sr10zwII', '20260611':['cz10zwII', 'BarnabyApostola'], '20260612':'NajswietszegoSercaPanaJezusaA', '20260613':['sb10zwII', 'NiepokalanegoSercaNMP'], '20260614' :'Ndz11zwA', '20260615':'pn11zwII', '20260616':'wt11zwII', '20260617':['sr11zwII', 'BrataAlbertaChmielowskiego'], '20260618':'cz11zwII', '20260619':'pt11zwII', '20260620':'sb11zwII', '20260621':'Ndz12zwA', '20260622':'pn12zwII', '20260623':['wt12zwII', 'WigiliaNarodzeniaJanaChrzciciela'], '20260624':'NarodzenieJanaChrzciciela', '20260625':'cz12zwII', '20260626':'pt12zwII', '20260627':'sb12zwII', '20260628':['Ndz13zwA', 'WigiliaApostolowPiotraIPawla'], '20260629':'ApostolowPiotraIPawla', '20260630':'wt13zwII', '20260701':'sr13zwII', '20260702':'cz13zwII', '20260703':'TomaszaApostola', '20260704':'sb13zwII', '20260705':'Ndz14zwA', '20260706':'pn14zwII', '20260707':'wt14zwII'};

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