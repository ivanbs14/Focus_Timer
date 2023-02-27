import {
    btnPause,
    btnPlay,
    btnSet,
    btnStop,
    btnSounOff,
    btnSounOn
} from "./elements.js"

export default function({controls, timer, sounds}) {

    btnPlay.addEventListener('click', function() {
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })
    
    btnPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })
    
    btnStop.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sounds.pressButton()
    })
    
    btnSounOn.addEventListener('click', function() {
        btnSounOn.classList.add('hide')
        btnSounOff.classList.remove('hide')
        sounds.bgAudio.pause()
    })
    
    btnSounOff.addEventListener('click', function() {
        btnSounOn.classList.remove('hide')
        btnSounOff.classList.add('hide')
        sounds.bgAudio.play()
    })
    
    btnSet.addEventListener('click', function() {
        let newMinuts = controls.getMinutes()
        if(!newMinuts) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinuts, 0)
        timer.updateMinuts(newMinuts)
    })
}