function doSlide (slider) {
  var id, o = slider.querySelectorAll("input.slide"), last = o.length-1, current = slider.querySelector("input.slide:checked");
  for (var i=0; i<o.length; i++) if (o[i] === current) {id = i; break;}
  o[id >= last ? 0 : id + 1].click();
}
function onSlide (e) {
  var o = e.target.parentNode;
  clearTimeout(o.autoslider);
  o.autoslider = setTimeout(function(){doSlide(o);}, 7e3);
}
$(function(){
  $(document).on("click", "input.slide", onSlide);
  $(".slider").each(function(){doSlide(this)});
});
$(document).ready(function(){
	if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else
    alert('No Location Permission');
	function showPosition(position){
		console.log(position);
	}
});