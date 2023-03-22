window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000
const PAGE_DELAY = 5000
const TOP_CUTOFF = window.innerHeight / 4
const BOTTOM_CUTOFF = window.innerHeight - window.innerHeight / 4
const LEFT_CUTOFF = window.innerHeight / 4
const RIGHT_CUTOFF = window.innerHeight - window.innerHeight / 4

let startTime = Number.POSITIVE_INFINITY
let lookDirection = null

webgazer.setGazeListener((data, timestamp) => {
    if(data.y == null) return
    if(data.x == null) return

    if(data.y < BOTTOM_CUTOFF && lookDirection !== 'BOTTOM') {
        startTime = timestamp
        lookDirection = 'BOTTOM'
    } else if(data.y > TOP_CUTOFF && lookDirection !== 'TOP'){
        startTime = timestamp
        lookDirection = 'TOP'
    // } else if(data.x < LEFT_CUTOFF && lookDirection !== 'LEFT') {
    //     startTime = timestamp
    //     lookDirection = 'LEFT'
    // }else if(data.x > RIGHT_CUTOFF && lookDirection !== 'RIGHT'){
    //     startTime = timestamp
    //     lookDirection = 'RIGHT'
    // }&& data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF
    }else if(data.y >= BOTTOM_CUTOFF && data.y <= TOP_CUTOFF){
        startTime = Number.POSITIVE_INFINITY
        lookDirection = null
    }

    if(startTime + LOOK_DELAY < timestamp) {
        if(lookDirection == 'TOP')
        {
            window.scrollBy(0,25);

        }else if(lookDirection == 'BOTTOM') {
            window.scrollBy(0,-25);
        }else if(lookDirection == 'RIGHT'){
            console.log("look right")
        }else{
            console.log("look left")
        }
    }

}).begin()