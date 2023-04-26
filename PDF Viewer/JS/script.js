window.saveDataAcrossSessions = true

const LOOK_DELAY = 1000
const PAGE_DELAY = 2000
const TOP_CUTOFF = window.innerHeight / 4
const BOTTOM_CUTOFF = window.innerHeight - window.innerHeight / 4
const LEFT_CUTOFF = window.innerWidth / 4
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4

let startTime = Number.POSITIVE_INFINITY
let lookDirection = null
let st2 = Number.POSITIVE_INFINITY
let ld2 = null
let update = document.getElementById("toggleVideo");
let x = document.getElementById("pauseButton");

webgazer.setGazeListener((data, timestamp) => {
    if(data.y == null) data.y = null
    if(data.x == null) data.x = null

    if(data.y < BOTTOM_CUTOFF && lookDirection !== 'BOTTOM') {
        startTime = timestamp
        lookDirection = 'BOTTOM'
    } else if(data.y > TOP_CUTOFF && lookDirection !== 'TOP'){
        startTime = timestamp
        lookDirection = 'TOP'
    } else if(data.y >= BOTTOM_CUTOFF && data.y <= TOP_CUTOFF ){
        startTime = Number.POSITIVE_INFINITY
        lookDirection = null
    }

    if(data.x < LEFT_CUTOFF && ld2 !== 'LEFT') {
        st2 = timestamp
        ld2 = 'LEFT'
   }else if(data.x > RIGHT_CUTOFF && ld2 !== 'RIGHT'){
        st2 = timestamp
        ld2 = 'RIGHT'
   }else if(data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF){
        st2 = timestamp
        ld2 = null
   }

    if(startTime + LOOK_DELAY < timestamp) {
        if(lookDirection == 'TOP')
        {
            window.scrollBy(0,25);
        }else if(lookDirection == 'BOTTOM') {
            window.scrollBy(0,-25);
        }
    }

    //making page turns faster at the bottom of the page
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page")
        if(lookDirection == 'BOTTOM' && data.x > RIGHT_CUTOFF)
        {
            console.log("shortcut")
            ld2 = null
            st2 = Number.POSITIVE_INFINITY
            const isValidPage = currentPDF.currentPage < currentPDF.countOfPages;
	        if (isValidPage) {
		    currentPDF.currentPage += 1;
		    renderCurrentPage();
            window.scrollTo(0,0)
            }
        }
    }

    if(st2 + PAGE_DELAY < timestamp){
        if(ld2 == 'RIGHT'){
            console.log("look right")
            ld2 = null
            const isValidPage = currentPDF.currentPage < currentPDF.countOfPages;
	        if (isValidPage) {
		    currentPDF.currentPage += 1;
		    renderCurrentPage();
	}
        }else{
            console.log("look left")
            ld2 = null
            const isValidPage = currentPDF.currentPage - 1 > 0;
	        if (isValidPage) {
		    currentPDF.currentPage -= 1;
		    renderCurrentPage();
            }
        }
    }

}).begin()

//This function toggles the video for the eye tracker on and off. It doesnt pause funcationality
 function togVideo()
 {

    var x = document.getElementById("webgazerVideoContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
        update.innerText = "Turn Video Off";
    } else {
        x.style.display = "none";
        update.innerText = "Turn Video On";
    }

 }

 //This function pauses the actual functionality of the eyetracker
 let p = true;
 function pause()
 {
    
    if(p == true)
    {
        webgazer.pause();
        x.innerText = "Click to Resume";
        p = false;
    }
    else if(p == false)
    {
        webgazer.resume();
        x.innerText = "Click to Pause";
        p = true;
    }
 }