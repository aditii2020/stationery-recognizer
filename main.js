function setup(){
    canvas = createCanvas(300,300);
    canvas.position(500,400);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hatnMfS_B/model.json',modelLoaded);
}
function modelLoaded(){
    console.log("modelLoaded!");
}

function draw(){
    image(video, 0, 0, 300 ,300);
    classifier.classify(video ,gotResults)
}

function gotResults(error,results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}