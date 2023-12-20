// https://teachablemachine.withgoogle.com/models/byJwUtEsr/

// Math.floor()

function start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/byJwUtEsr/model.json", modelready)

}

function modelready() {
    console.log("succes")
    classifier.classify(gotresults)
}

function gotresults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        sound = results[0].label
        confidence = results[0].confidence
        document.getElementById("sound").innerHTML = sound
        document.getElementById("accuracy").innerHTML = Math.floor(confidence * 100) + "%"
        animal = document.getElementById("animal")

        if (sound == "tiger") {
            animal.src = "tiger.gif"
        }
        else if (sound == "dog") {
          animal.src="dog.gif"
        }
        else if (sound == "cat") {
          animal.src="cat.gif"
        }
        else if (sound == "Background Noise") {
           animal.src="ok.webp"
        }
    }





}



