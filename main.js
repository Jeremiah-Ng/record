var speechrecognishationshanoshintion=window.webkitSpeechRecognition;   
var recognitionshantionsham=new speechrecognishationshanoshintion();
function butan(){
    document.getElementById("textbox").innerHTML="";
    recognitionshantionsham.start();
}
recognitionshantionsham.onresult=function run(event){
    console.log(event)
    content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    speak();
}
function speak(){
    var regonitionsfboagnoduangvoua=window.speechSynthesis;
    var data=document.getElementById("textbox").value;
    var nou=new SpeechSynthesisUtterance(data);
    regonitionsfboagnoduangvoua.speak(nou);
    Webcam.attach("#camera")
}
Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90
})