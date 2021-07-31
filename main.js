img ="";
status="";
object = [];

function preload () {
 img = loadImage ('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:DetectingObjects";
}

function draw () {
    image(video,0,0,380,380);
    if(status !="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult)
        for(i = 0; i < object.length; i++ )
    {
        document.getElementById("status").innerHTML ="status:ObjectDetected"
        document.getElementById("number_of_objects").innerHTML ="Number of objects detected are :"+objects.length;
        fill(r,g,b);
        percent = floor(object[i].confidence * 100);
    text(objects[i].label +" " + percent + "%",objects[i].x,objects[i].y)
    noFill();
    stroke(r,g,b);
    rect (objects[i].x,objects[i].y,objects[i].width ,objects[i].length);
    }
    
    
    }
}

function modelLoaded() {
    console.log("Model Loaled!")
    status = true;
    objectDetector.detect(video, gotResults);
}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results
}