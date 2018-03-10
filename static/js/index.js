$(document).ready(function(){
	if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
	var my_vars = JSON.parse(document.getElementsByTagName('body')[0].getAttribute('data-js-vars') || '{}');
			 console.log(my_vars);
	//var a={{json_list}}
	//console.log("hello"+a);
	function showPosition(position){
		$.getJSON('https://crossorigin.me/https://geoip-db.com/json/', function(data) {
			if(data.city !== null)
				$(".event-header select").val(data.city);
		});
	}
});
