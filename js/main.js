function toSend() {
document.getElementById('flyer').onclick='';
document.getElementById("sms_playr").insertAdjacentHTML('beforeend','<div id="sms_playr_1" class="col s8 right valign-wrapper"><p class="valign blue-text text-darken-4">Quel est le sens de la vie ? </p></div>');
document.getElementById("p_playr").style.visibility = "hidden";
setTimeout(function(){ document.getElementById("krm_reflex").insertAdjacentHTML('beforeend','<span class= "col s2"><img src="img/cat-karma.png" alt="" class="circle responsive-img"></span><span id="wave"><span class="dot bulle"></span><span class="dot bulle"></span><span class="dot bulle"></span></span>');}, 3000);

};
