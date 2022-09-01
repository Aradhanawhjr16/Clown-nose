nose_X = 0;
nose_Y = 0;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/QNPPSr8s/clown-nose.png");
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded() 
{
   console.log('PoseNet Is Initialized')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x - 5;
        nose_Y = results[0].pose.nose.y - 5;
        console.log("nose_x " + nose_X);
        console.log("nose_y = " + nose_Y);
    }
}
function draw()
{
   image(video,0 ,0 ,300 ,300);
   image(clown_nose,nose_X,nose_Y,30,30)
}
function take_snapshot()
{
    save('myfilterimage.png');
}
