import Timer from "./timer.js";
import Controls from './controls.js';
import { Sounds } from "./sounds.js";
import Events from "./events.js";

import { 
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    minutsDisplay,
    secondsDisplay,
} from "./elements.js";

const timer = Timer({
    minutsDisplay,
    secondsDisplay,
    resetControls: Controls.reset,
})

const controls = Controls({
    btnPlay,
    btnPause,
    btnStop,
    btnSet
})

const sounds = Sounds()

Events({controls, timer, sounds})

