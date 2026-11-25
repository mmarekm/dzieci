const klucz = {'20261125':'sr34zwII', '20261126':'cz34zwII', '20261127':'pt34zwII', '20261128':'sb34zwII', '20261129':'Ndz1AdwB', '20261130':'AndrzejaApostola', '20261201':'wt1Adw', '20261202':'sr1Adw', '20261203':['cz1Adw', 'FranciszkaKsawerego'], '20261204':['pt1Adw', 'Barbary'], '20261205':'sb1Adw', '20261206':'Ndz2AdwB', '20261207':['pn2Adw', 'AmbrozegoBiskupaDoktoraKosciola'], '20261208':'NiepokalanePoczecieNMP', '20261209':'sr2Adw', '20261210':'cz2Adw', '20261211':'pt2Adw', '20261212':['sb2Adw', 'NMPZGuadalupe'], '20261213':'Ndz3AdwB', '20261214':['pn3Adw', 'JanaOdKrzyzaPrezbiteraIDoktoraKosciola'], '20261215':'wt3Adw', '20261216':'sr3Adw', '20261217':'grudzien17', '20261218':'grudzien18', '20261219':'grudzien19', '20261220':'Ndz4AdwB', '20261221':'grudzien21', '20261222':'grudzien22', '20261223':'grudzien23', '20261224':['grudzien24', 'WigiliaNarodzeniaPanskiego'], '20261225':['NocNarodzeniaPanskiego', 'SwitNarodzeniaPanskiego', 'DzienNarodzeniaPanskiego'], '20261226':'SzczepanaPierwszegoMeczennika', '20261227':'NdzSwietejRodzinyB', '20261228':'MlodziankowMeczennikow', '20261229':'grudzien29', '20261230':'grudzien30', '20261231':'grudzien31', '20270101':'SwietejBozejRodzicielkiMaryi', '20270102':['styczen2', 'BazylegoWielkiegoIGrzegorzaZNazjanzuBiskupowDoktorowKosciola'], '20270103':'Ndz2PoNarodzeniuPanskim', '20270104':'styczen4', '20270105':'styczen5', '20270106':'ObjawieniePanskie', '20270107':'styczen7', '20270108':'styczen8', '20270109':'styczen9', '20270110':'ChrzestPanskiB', '20270111':'pn1zwI', '20270112':'wt1zwI', '20270113':'sr1zwI', '20270114':'cz1zwI', '20270115':'pt1zwI', '20270116':'sb1zwI', '20270117':'Ndz2zwB', '20270118':'pn2zwI', '20270119':['wt2zwI', 'JozefaSebastianaPelczara'], '20270120':'sr2zwI', '20270121':['cz2zwI', 'Agnieszki'], '20270122':'pt2zwI', '20270123':'sb2zwI', '20270124':'Ndz3zwB', '20270125':'NawroceniePawlaApostola', '20270126':['wt3zwI', 'BiskupowTymoteuszaITytusa'], '20270127':'sr3zwI', '20270128':['cz3zwI', 'TomaszaZAkwinuDoktoraKosciola'], '20270129':'pt3zwI', '20270130':'sb3zwI', '20270131':'Ndz4zwB', '20270201':'pn4zwI', '20270202':'OfiarowaniePanskie', '20270203':'sr4zwI', '20270204':'cz4zwI', '20270205':['pt4zwI', 'Agaty'], '20270206':['sb4zwI', 'PawlaMikiITowarzyszy'], '20270207':'Ndz5zwB', '20270208':'pn5zwI', '20270209':'wt5zwI', '20270210':'srPopielcowa', '20270211':['czPoPopielcu', 'NMPZLourdes'], '20270212':'ptPoPopielcu', '20270213':'sbPoPopielcu', '20270214':'Ndz1WPB', '20270215':'pn1WP', '20270216':'wt1WP', '20270217':'sr1WP', '20270218':'cz1WP', '20270219':'pt1WP', '20270220':'sb1WP', '20270221':'Ndz2WPB', '20270222':'KatedryPiotra', '20270223':['wt2WP', 'Polikarpa'], '20270224':'sr2WP', '20270225':'cz2WP', '20270226':'pt2WP', '20270227':'sb2WP', '20270228':'Ndz3WPB', '20270301':'pn3WP', '20270302':'wt3WP', '20270303':'sr3WP', '20270304':'KazimierzaKrolewicza', '20270305':'pt3WP', '20270306':'sb3WP', '20270307':'Ndz4WPB', '20270308':'pn4WP', '20270309':'wt4WP', '20270310':'sr4WP', '20270311':'cz4WP', '20270312':'pt4WP', '20270313':'sb4WP', '20270314':'Ndz5WPB', '20270315':['pn5WP', 'Klemensa'], '20270316':'wt5WP', '20270317':'sr5WP', '20270318':'cz5WP', '20270319':'JozefaOblubiencaNMP', '20270320':'sb5WP', '20270321':'NdzPalmowaB', '20270322':'wielkiPn', '20270323':'wielkiWt', '20270324':'wielkaSr', '20270325':'wielkiCz', '20270326':'wielkiPt', '20270327':'WigiliaPaschalnaB', '20270328':'ZmartwychwstaniePanskie', '20270329':'PnWlk', '20270330':'WtWlk', '20270331':'SrWlk', '20270401':'CzWlk', '20270402':'PtWlk', '20270403':'SbWlk', '20270404':'Ndz2WlkB', '20270405':'ZwiastowaniePanskie', '20270406':'wt2Wlk', '20270407':['sr2Wlk', 'JanaChrzcicielaDeLaSalle'], '20270408':'cz2Wlk', '20270409':'pt2Wlk', '20270410':'sb2Wlk'};

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