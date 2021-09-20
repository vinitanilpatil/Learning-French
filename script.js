var main_img = document.getElementById("main_image");
var add_image =(src)=> {
main_image.src=src;
main_img.style.filter="brightness(100%) " + "grayscale(0%) " + "hue-rotate(360deg) " +"saturate(100%) " + "contrast(100%) " + "sepia(0%) " + "invert(0%) " + "blur(0px) " + "opacity(100%)" ;
brightness.value="100";
grayscale.value="0";
huerotate.value="360";
saturate.value="100";
contrast.value="100";
sepia.value="0";
invert.value="0";
blur.value="0";
opacity.value="100";
}
var filter =()=>{
var brightness = document.getElementById("brightness").value;
var grayscale = document.getElementById("grayscale").value;
var huerotate = document.getElementById("huerotate").value;
var saturate = document.getElementById("saturate").value;
var contrast = document.getElementById("contrast").value;
var sepia = document.getElementById("sepia").value;
var invert = document.getElementById("invert").value;
var blur = document.getElementById("blur").value;
var opacity = document.getElementById("opacity").value;
var border = document.getElementById("border").value;
var bodr = document.getElementById("bodrradius").value;
main_img.style.filter="brightness("+brightness+"%) " + "grayscale("+grayscale+"%) " + "hue-rotate("+huerotate+"deg) " +"saturate("+saturate+"%) " + "contrast("+contrast+"%) " + "sepia("+sepia+"%) " + "invert("+invert+"%) " + "blur("+blur+"px) " + "opacity("+opacity+"%)" ;
main_img.style.border=border+"px " +" solid black";
main_img.style.borderRadius=bodr+"px";
}
var reset =()=>{
main_img.style.filter="brightness(100%) " + "grayscale(0%) " + "hue-rotate(360deg) " +"saturate(100%) " + "contrast(100%) " + "sepia(0%) " + "invert(0%) " + "blur(0px) " + "opacity(100%)" ;
brightness.value="100";
grayscale.value="0";
huerotate.value="360";
saturate.value="100";
contrast.value="100";
sepia.value="0";
invert.value="0";
blur.value="0";
opacity.value="100";
}
var rotate =()=>{
main_img.style.transform += "rotate("+90+"deg)";
}
var setDefault =()=>{
main_img.style.transform="rotatey(0deg) rotatex(0deg)";
}
var zoomIn =()=>{
main_img.style.transform+="scale("+1.05+")";
}
var zoomOut =()=>{
main_img.style.transform+="scale("+0.95+")";
}
var addText =()=>{
var sec_1 = document.getElementById("filter_tool");
var sec_2 = document.getElementById("text_tool");
sec_1.style.display="none";
sec_2.style.display="inline-block";
}
var addTxt =()=>{
var sample_text = document.getElementById("watermark").value;
var wm_text = document.getElementById("wm_text");
wm_text.innerHTML=sample_text;
}
var alignText =()=>{
var top_mg = document.getElementById("top").value;
var left_mg = document.getElementById("left").value;
var font_size = document.getElementById("font_size").value;
wm_text.style.top=top_mg+"px";
wm_text.style.left=left_mg+"px";
wm_text.style.fontSize=font_size+"px";
}
var close_cnt =()=>{
var sec_3 = document.getElementById("filter_tool");
var sec_4 = document.getElementById("text_tool");
sec_3.style.display="inline-block";
sec_4.style.display="none";
}
var changeFont_1 =()=>{
wm_text.style.fontFamily="lora";
}
var changeFont_2 =()=>{
wm_text.style.fontFamily="bangers";
}
var changeFont_3 =()=>{
wm_text.style.fontFamily="courgette";
}
var changeFont_4 =()=>{
wm_text.style.fontFamily="Azeret Mono";
}
var changeColor =()=>{
var red_val = document.getElementById("red").value;
var green_val = document.getElementById("green").value;
var blue_val = document.getElementById("blue").value;
var new_text = document.getElementById("wm_text");
new_text.style.color="rgb("+red_val+","+green_val+","+blue_val+")";
}
var addImg =()=>{
var sec_5 = document.getElementById("filter_tool");
var sec_6 = document.getElementById("text_tool");
var sec_7 = document.getElementById("upload_tool");
sec_5.style.display="none";
sec_6.style.display="none";
sec_7.style.display="inline-block";
}
let close_cnt2 =()=>{
var sec_5 = document.getElementById("filter_tool");
var sec_7 = document.getElementById("upload_tool");
sec_5.style.display="inline-block";
sec_7.style.display="none";
}
let validateUrl =()=> {
var url = document.getElementById("imgUrl").value;
main_img.src=url;
}
var imgUrl = document.getElementById("fileSelector");
imgUrl.addEventListener('change', ()=>{
var source = window.URL.createObjectURL(imgUrl.files[0]);
//console.log(source);
document.getElementById("imgUrl").value=source;
document.getElementById("main_image").src=source;
});
