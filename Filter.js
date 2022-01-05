NoseX = 0;
NoseY = 0;
function preload()
{    
    LipStick = loadImage('https://i.postimg.cc/nMfM2WXD/Lip.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is Initialized");
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
NoseX = results[0].pose.nose.x;
NoseX = NoseX - 30;
NoseY = results[0].pose.nose.y;
NoseY = NoseY + 20;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}
function draw()
{
    image(video ,0,0,300,300);
    image(LipStick ,NoseX ,NoseY ,60 ,40)
}
function take_snapshot()
{
    save("MyFilterImg.png");
}
