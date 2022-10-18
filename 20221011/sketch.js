function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F9E07F");
  stroke(225)
  noFill();
  rectMode(CENTER)//以方框為中心點為座標點

  for(var i=0;i<(width/50);i=i+2)
  {
    for(var k=0;k<(width/50);k=k+2)
   {stroke("#264D59")
   ellipse(25+(i*50),25+(k*50),50+mouseY/10)
   stroke("#D46C4E")
   rect(25+(i*50),25+(k*50),50+mouseX/10)
   stroke("#43978D")
   ellipse(25+(i*50),25+(k*50),25)
  }
 }





  //for(var i=0;i<(width/50);i++)
//{
//  for(var j=0;j<(height/50);j++)
//  {
//  ellipse(25+(i*50),25+(j*50),50+mouseX/2)
//  rect(25+(i*50),25+(j*50),50)
//  ellipse(50+(i*50),50+(j*50),25)
//  }
//}
}