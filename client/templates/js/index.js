$(document).ready(function(){
	if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }

	console.log("hello"+a);
	function showPosition(position){
		$.getJSON('https://crossorigin.me/https://geoip-db.com/json/', function(data) {
			if(data.city !== null)
				$(".event-header select").val(data.city);
		});
	}
});
