leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;
function setup(){
    video=createCapture(VIDEO)
    video.size(500,500)
    video.position(100,100)
    
    canvas=createCanvas(550,550)
    canvas.position(700,120)
    
    poseNet=ml5.poseNet(video,modeloaded)
    poseNet.on('pose',gotResults)
    
    }
    function gotResults(results){
    if(results.length>0){console.log(results)}
    }
    
    function modeloaded(){
        console.log("modeloaded")
    }
    
    function draw(){
    background('#f294e6');
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('priyanshi',50,500);
    }
    function modelLoaded(){
        console.log("PoseNet Is Initialized And Loaded");
    }
    
    function gotResults(results,error){
        if(error){
            console.error(error);
        }
        if(results.length > 0){
            console.log(results);
    
            leftWrist_x = results[0].pose.leftWrist.x;
            rightWrist_x = results[0].pose.rightWrist.x;
    
            difference = floor(leftWrist_x - rightWrist_x);
    
            console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
            console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
        }
    }