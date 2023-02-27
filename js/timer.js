import { Sounds } from "./sounds.js"

export default function Timer({ 
    minutsDisplay, 
    secondsDisplay,
    resetControls
    }) {
        let timerTimeOut
        let minuts = Number(minutsDisplay.textContent)

        function updateDisplay(newMinutes, seconds) {

            newMinutes = newMinutes === undefined ? minuts : newMinutes
            seconds = seconds === undefined ? 0 : seconds
            minutsDisplay.textContent = String(newMinutes).padStart(2, "0")
            secondsDisplay.textContent = String(seconds).padStart(2, "0")
        }

        function reset() {
            updateDisplay(minuts, 0)
            clearTimeout(timerTimeOut)
        }

        function countDown() {
            timerTimeOut = setTimeout(function() {
                let seconds = Number(secondsDisplay.textContent)
                let minuts = Number(minutsDisplay.textContent)
                let isFinishid = minuts <= 0 && seconds <= 0
                
                updateDisplay(minuts, 0)
                
                if(isFinishid) {
                    resetControls
                    updateDisplay()
                    Sounds().timeEnd()
                    return
                }
                
                if( seconds <= 0 ) {
                    seconds = 60
                    --minuts
                }

                updateDisplay(minuts, String(seconds -1))
                
                countDown()
            }, 1000)
        }

        function updateMinuts(newMinutes) {
            minuts = newMinutes
        }

        function hold() {
            clearTimeout(timerTimeOut)
        }

        return {
            countDown,
            reset,
            updateDisplay,
            updateMinuts,
            hold
        }

}