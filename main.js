//https://teachablemachine.withgoogle.com/models/AT1719t4C/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach ('#camera');
    
    function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
    });
    }
    console.log('ml5 version:',ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AT1719t4C/model.json',modalLoaded);
    function modalLoaded (){
        console.log("modal is loaded");
    }
    
    function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        
    
    }
    }