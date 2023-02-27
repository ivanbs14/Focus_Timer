export default function Controls({
    btnPlay,
    btnPause,
    btnStop,
    btnSet
}) {

    function play() {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')
        btnSet.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    function pause() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    }

    function reset() {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
        btnSet.classList.remove('hide')
        btnStop.classList.add('hide')
    }

    function getMinutes() {
        let newMinuts = prompt('qual o time?')
        if(!newMinuts) {
            return false
        }

        return newMinuts
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}