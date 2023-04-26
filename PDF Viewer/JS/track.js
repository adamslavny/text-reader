const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("toggleVideo");

let isVideo = false;
let model = null;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            updateNote.innerText = "Click to Pause"
            isVideo = true
            runDetection()
        } else {
            updateNote.innerText = "Please enable video"
        }
    });
}

function toggleVideo() {
    if (!isVideo) {
        updateNote.innerText = "Starting video"
        startVideo();
    } else {
        updateNote.innerText = "Stopping video"
        handTrack.stopVideo(video)
        isVideo = false;
        updateNote.innerText = "Click to Resume"
    }
}


let canFlipPage = true;
function runDetection() {
    model.detect(video).then(predictions => {
        
        console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);
        
        const pointPredictions = predictions.filter(p => p.label === 'point');
        const closePredictions = predictions.filter(p => p.label === 'closed');
        
        if (pointPredictions.length === 1 && currentPDF.currentPage < currentPDF.countOfPages && canFlipPage) {
            currentPDF.currentPage += 1;
            renderCurrentPage();
            canFlipPage = false;
            setTimeout(() => {
                canFlipPage = true;
            }, 3000);
        } else if (closePredictions.length === 1 && currentPDF.currentPage > 1 && canFlipPage) {
            currentPDF.currentPage -= 1;
            renderCurrentPage();
            canFlipPage = false;
            setTimeout(() => {
                canFlipPage = true;
            }, 3000);
        }
        
        
        if (isVideo) {
            requestAnimationFrame(runDetection);
        }
    });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    updateNote.innerText = "Click to Begin"
    //trackButton.disabled = false
    //can choose to automatically start up here
    startVideo();
});


function visibility(){
    var x = document.getElementById("canvas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}