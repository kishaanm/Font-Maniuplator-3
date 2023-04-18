difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(400, 400);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    background('#6C91C2')
    document.getElementById("font_size").innerHTML = "Font size of the text of the text will be ="+ difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Krishaan', 50, 300);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX+ "difference = "+ difference);
    }
}