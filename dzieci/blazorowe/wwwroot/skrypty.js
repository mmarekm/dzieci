window.initializeAudio = () => {
    window.audioElements = new Map();
    const loadAudio = async (id, src, shouldLoop = false) => {
        const audio = new Audio();
        const response = await fetch(src);
        const blob = await response.blob();
        audio.src = URL.createObjectURL(blob);
        audio.loop = shouldLoop;
        window.audioElements.set(id, audio);
    };
    Promise.all([
        loadAudio('tlo', 'mp3/muzykaTlo.mp3', true),
        loadAudio('klik', 'mp3/klik.mp3', false),
        loadAudio('rykMalpy', 'mp3/rykMalpy.mp3', false),
        loadAudio('krojenie', 'mp3/krojenie.mp3', false),
        loadAudio('bum', 'mp3/bum.mp3', false),
        loadAudio('bocianieGniazdo', 'mp3/bocianieGniazdo.mp3', false),
        loadAudio('ciesla', 'mp3/ciesla.mp3', false),
        loadAudio('kartograf', 'mp3/kartograf.mp3', false),
        loadAudio('potrojnyBum', 'mp3/potrojnyBum.mp3', false),
        loadAudio('skrzekPapugi', 'mp3/skrzekPapugi.mp3', false)
    ]);
};
window.playAudio = async (elementId) => {
    const audio = window.audioElements.get(elementId);
    if (!audio) return;

    try {
        audio.currentTime = 0;
        await audio.play();
    } catch { }
};

window.setVolume = (elementId, volume) => {
    const audio = window.audioElements.get(elementId);
    if (audio) {
        audio.volume = volume;
    }
};
window.stopAudio = (elementId) => {
    const audio = window.audioElements.get(elementId);
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
};