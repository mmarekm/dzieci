const klucz = {'20261027':'wt30zwII', '20261028':'ApostolowSzymonaIJudyTadeusza', '20261029':'cz30zwII', '20261030':'pt30zwII', '20261031':'sb30zwII', '20261101':'WszystkichSwietych', '20261102':'WszystkichWiernychZmarlych', '20261103':'wt31zwII', '20261104':['sr31zwII', 'KarolaBoromeusza'], '20261105':'cz31zwII', '20261106':'pt31zwII', '20261107':'sb31zwII', '20261108':'Ndz32zwA', '20261109':'RocznicaPoswieceniaBazylikiLateranskiej', '20261110':['wt32zwII', 'LeonaWielkiegoPapiezaDoktoraKosciola'], '20261111':['sr32zwII', 'Marcina'], '20261112':['cz32zwII', 'Jozafata'], '20261113':['pt32zwII', 'BenedyktaJanaMateuszaIzaakaIKrystynaPierwszychMeczennikowPolski'], '20261114':'sb32zwII', '20261115':'Ndz33zwA', '20261116':'pn33zwII', '20261117':['wt33zwII', 'ElzbietyWegierskiej'], '20261118':['sr33zwII', 'KarolinyKozki'], '20261119':'cz33zwII', '20261120':['pt33zwII', 'RafalaKalinowskiego'], '20261121':['sb33zwII', 'OfiarowanieNMP'], '20261122':'JezusaChrystusaKrolaWszechswiataA', '20261123':'pn34zwII', '20261124':['wt34zwII', 'AndrzejaDungLacITowarzyszy'], '20261125':'sr34zwII', '20261126':'cz34zwII', '20261127':'pt34zwII', '20261128':'sb34zwII', '20261129':'Ndz1AdwB', '20261130':'AndrzejaApostola', '20261201':'wt1Adw', '20261202':'sr1Adw', '20261203':['cz1Adw', 'FranciszkaKsawerego'], '20261204':['pt1Adw', 'Barbary'], '20261205':'sb1Adw', '20261206':'Ndz2AdwB', '20261207':['pn2Adw', 'AmbrozegoBiskupaDoktoraKosciola'], '20261208':'NiepokalanePoczecieNMP', '20261209':'sr2Adw', '20261210':'cz2Adw', '20261211':'pt2Adw', '20261212':['sb2Adw', 'NMPZGuadalupe'], '20261213':'Ndz3AdwB', '20261214':['pn3Adw', 'JanaOdKrzyzaPrezbiteraIDoktoraKosciola'], '20261215':'wt3Adw', '20261216':'sr3Adw', '20261217':'grudzien17', '20261218':'grudzien18', '20261219':'grudzien19', '20261220':'Ndz4AdwB', '20261221':'grudzien21', '20261222':'grudzien22', '20261223':'grudzien23', '20261224':['grudzien24', 'WigiliaNarodzeniaPanskiego'], '20261225':['NocNarodzeniaPanskiego', 'SwitNarodzeniaPanskiego', 'DzienNarodzeniaPanskiego'], '20261226':'SzczepanaPierwszegoMeczennika', '20261227':'NdzSwietejRodzinyB', '20261228':'MlodziankowMeczennikow', '20261229':'grudzien29', '20261230':'grudzien30', '20261231':'grudzien31', '20270101':'SwietejBozejRodzicielkiMaryi', '20270102':['styczen2', 'BazylegoWielkiegoIGrzegorzaZNazjanzuBiskupowDoktorowKosciola'], '20270103':'Ndz2PoNarodzeniuPanskim', '20270104':'styczen4', '20270105':'styczen5', '20270106':'ObjawieniePanskie', '20270107':'styczen7', '20270108':'styczen8', '20270109':'styczen9', '20270110':'ChrzestPanskiB', '20270111':'pn1zwI', '20270112':'wt1zwI', '20270113':'sr1zwI', '20270114':'cz1zwI', '20270115':'pt1zwI', '20270116':'sb1zwI', '20270117':'Ndz2zwB', '20270118':'pn2zwI', '20270119':['wt2zwI', 'JozefaSebastianaPelczara'], '20270120':'sr2zwI', '20270121':['cz2zwI', 'Agnieszki'], '20270122':'pt2zwI', '20270123':'sb2zwI', '20270124':'Ndz3zwB'};

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