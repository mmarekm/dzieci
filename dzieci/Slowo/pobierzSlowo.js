const klucz = {'20260617':['sr11zwII', 'BrataAlbertaChmielowskiego'], '20260618':'cz11zwII', '20260619':'pt11zwII', '20260620':'sb11zwII', '20260621':'Ndz12zwA', '20260622':'pn12zwII', '20260623':['wt12zwII', 'WigiliaNarodzeniaJanaChrzciciela'], '20260624':'NarodzenieJanaChrzciciela', '20260625':'cz12zwII', '20260626':'pt12zwII', '20260627':'sb12zwII', '20260628':['Ndz13zwA', 'WigiliaApostolowPiotraIPawla'], '20260629':'ApostolowPiotraIPawla', '20260630':'wt13zwII', '20260701':'sr13zwII', '20260702':'cz13zwII', '20260703':'TomaszaApostola', '20260704':'sb13zwII', '20260705':'Ndz14zwA', '20260706':['pn14zwII', 'MariiTeresyLedochowskiej'], '20260707':'wt14zwII', '20260708':['sr14zwII', 'JanaZDukli'], '20260709':'cz14zwII', '20260710':'pt14zwII', '20260711':'BenedyktaOpataPatronaEuropy', '20260712':'Ndz15zwA', '20260713':['pn15zwII', 'PustelnikowAndrzejaSwieradaIBenedykta'], '20260714':'wt15zwII', '20260715':['sr15zwII', 'BonawenturyBiskupaDoktoraKosciola'], '20260716':['cz15zwII', 'NMPZGoryKarmel'], '20260717':'pt15zwII', '20260718':'sb15zwII', '20260719':'Ndz16zwA', '20260720':'pn16zwII', '20260721':'wt16zwII', '20260722':'MariiMagdaleny', '20260723':'BrygidyPatronkiEuropy', '20260724':['pt16zwII', 'Kingi'], '20260725':'JakubaApostola', '20260726':'Ndz17zwA', '20260727':'pn17zwII', '20260728':'wt17zwII', '20260729':['sr17zwII', 'MartyMariiILazarza'], '20260730':'cz17zwII', '20260731':['pt17zwII', 'IgnacegoZLoyoli'], '20260801':['sb17zwII', 'AlfonsaMariiLiguoriegoBiskupaDoktoraKosciola'], '20260802':'Ndz18zwA', '20260803':'pn18zwIIA', '20260804':['wt18zwIIA', 'JanaMariiVianneya'], '20260805':'sr18zwII', '20260806':'PrzemienieniePanskieA', '20260807':'pt18zwII', '20260808':['sb18zwII', 'Dominika'], '20260809':'Ndz19zwA', '20260810':'Wawrzynca', '20260811':['wt19zwII', 'Klary'], '20260812':'sr19zwII', '20260813':'cz19zwII', '20260814':['pt19zwII', 'MaksymilianaMariiKolbego', 'WigiliaWniebowzieciaNMP'], '20260815':'WniebowziecieNMP', '20260816':'Ndz20zwA', '20260817':['pn20zwII', 'Jacka'], '20260818':'wt20zwII', '20260819':'sr20zwII', '20260820':['cz20zwII', 'BernardaOpataDoktoraKosciola'], '20260821':['pt20zwII', 'PiusaX'], '20260822':['sb20zwII', 'NMPKrolowej']};

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