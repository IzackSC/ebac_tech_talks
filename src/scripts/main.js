AOS.init();

const dataDoEvento = new Date("aug 17, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const HorasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / HorasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % HorasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    console.log(horasAteOEvento);
    console.log(diasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Bah você perdeu hein, você chegou atrasado e o evento ja começou laje pra ti, espere até o ano que vem :)'
    }
}, 1000);