window.saveDataAcrossSessions = false

const LOOK_DELAY = 1000
const TOP_CUTOFF = window.innerHeight / 4
const BOTTOM_CUTOFF = window.innerHeight - window.innerHeight / 4

let startTime = Number.POSITIVE_INFINITY
let lookDirection = null

webgazer.setGazeListener((data, timestamp) => {
    if(data.y == null) return

    if(data.y < BOTTOM_CUTOFF && lookDirection !== 'BOTTOM') {
        startTime = timestamp
        lookDirection = 'BOTTOM'
    } else if(data.y > TOP_CUTOFF && lookDirection !== 'TOP'){
        startTime = timestamp
        lookDirection = 'TOP'
    } else if(data.y >= BOTTOM_CUTOFF && data.y <= TOP_CUTOFF){
        startTime = Number.POSITIVE_INFINITY
        lookDirection = null
    }

    if(startTime + LOOK_DELAY < timestamp) {
        console.log("here")
    }

}).begin()