function getPara1()
{
var inputs = [];

for (var i = 1 ; i <=6; i++) 
{
  inputs.push(document.getElementById("Paragraph_1_Input_" + i).value);  
} 

document.getElementById("showPara1").innerHTML = inputs.join(". ");
}

function getPara2()
{
var paragraph2 = [];

for (var i = 1 ; i <=6; i++) 
{
  paragraph2.push(document.getElementById("Paragraph_2_Input_" + i).value);  
} 

document.getElementById("showPara2").innerHTML = paragraph2.join(". ");
}
