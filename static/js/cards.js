//Init select inputs
$('.material').material_select();


var lo;
$(document).ready(function(){
	if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }

	function showPosition(position){
		$.getJSON('https://crossorigin.me/https://geoip-db.com/json/', function(data) {
			if(data.city !== null){
				$(".event-header select").val(data.city);
                lo=data.city;
      
		  }
    }
        );
	}
});

//Searcher
$( "#search" ).keyup(function( event ) {
  var value = $(this).val();
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  //console.log("Filter..."+value);
  //renderCards(filterByAttr("title",value, data));
  renderCards(applyFilters());
});

function applyTitleFilter(data){
  var value = $('#search').val();
  return filterByAttr("title",value, data);
}

function filterByAttr(attr, value, data) {
  //console.log(data);
  var value = value.toLowerCase();
  return $.grep(data, function(n, i) {
    return n[attr].toLowerCase().indexOf(value) != -1;

  });
}


function renderCards(data) {
  console.log("RENDERING");
  var html = '';
  $.each(data, function(key, value) {
    console.log(value);
    html += '<div class="col s12 m6 l4"><div class="card" style="background:url(../static/images/'+value.title+'.png);background-size: cover;"><div class="card-content white-text"><div class="card__date"><span class="card__date__day">'+value.dates[2]+'</span><span class="card__date__month">'+value.dates[1]+'</span><p>'+value.starttime+'</p><p class="text-center">to</p><p>'+value.endtime+'</p></div></div><div class="card-action"><div class="card__meta"></div><span class="card-title grey-text text-darken-4">' + value.title + '</p><a href="#"><i class="small material-icons">room</i>' + value.city + '</a><p><span class="text-darken-2 card-info"><i class="small material-icons">label</i>&nbsp;' + value.styles[0]+"-"+value.styles[1]+" players\t"+"<br>&nbsp;"+ value.styles[2]+ '</span></p><p><form method="POST" action="/details/"><button class="btn" type="submit" name="sid" value='+value.id+'>BOOK</button></form></p></div></div>';

    html += '</div>';
  });
  $('#card-container').html(html);

}
var my_vars = JSON.parse(document.getElementsByTagName('body')[0].getAttribute('data-jslist') || '{}');

var my_vars1 = JSON.parse(document.getElementsByTagName('body')[0].getAttribute('data-loclist') || '{}');
console.log(my_vars1)
console.log(my_vars)
console.log($(".event-header select").val())
//DATA:
var data=[];
for(i=0;i<my_vars.length;i++){

    if(my_vars[i].fields.min>my_vars[i].fields.no)
        str="Filling Fast"
    else if(my_vars[i].fields.max===my_vars[i].fields.no)
        str="Filled"
    else
        str="Available"

var date=my_vars[i].fields.endtime;
date = date.split('T');
etime = date[1]
etime = etime.slice(0, -1);
stime = my_vars[i].fields.starttime;
stime=stime.split('T');
stime=stime[1]
stime = stime.slice(0, -1);

date = date[0];
date = date.split('-');
date=new Date(date[0],date[1]-1,date[2]);

date=date.toString();
date=date.split(' ');
var id=i+1;
//console.log(date[0]);

var data1 = {
  "id" : id,
  "title": my_vars[i].fields.sport,
  "starttime":stime ,
  "endtime": etime,
  "lat": "",
  "lon": "",
  "country": my_vars1[i].fields.location,
  "country-code": "",
  "city": my_vars1[i].fields.gname,
  "address": "",
  "organizer": "",
  "email": "",
  "web": "",
  "phone": "",
  "event_type": my_vars[i].fields.eventname,
  "styles": [
    my_vars[i].fields.min,
    my_vars[i].fields.max,    
    str
  ],
    "dates":date,
  "description": ""
}
;
data.push(data1);
}


console.log(data);

renderCards(data);

//FILTER EVENTS:
$("#country-select").on('change', function() {
  var value = $(this).val();
  console.log("Filter COUNTRY: "+value);
  renderCards(applyFilters());
  //renderCards(filterByAttr("country-code", value, data));
});

$(".event-type-filter").change(function() {
  renderCards(applyFilters());
  //renderCards(applyEventTypeFilter());
});

function applyCountryFilter(data){
  var value = $("#country-select").val();
  if (value == 'all'){
    value = '';
  }
  return filterByAttr("country-code", value, data);
}
function applyEventTypeFilter(data){
  var result = [];
      $('input[name="event-type-filter"]:checked').each(function() {
         console.log(this.value); 
         var filtered = filterByAttr("event_type", this.value, data);
        result = mergeJSONObjectsRemovingDuplicates(result,filtered);
      });
  return result;
}

function applyFilters(){
  var eventArray = [];
  
  console.log("FILTERS:");
  console.log($('#search').val());
  console.log($("#country-select").val());
  console.log($('input[name="event-type-filter"]:checked').serialize());
  
  eventArray = applyEventTypeFilter(data);
  eventArray = applyCountryFilter(eventArray);
  eventArray = applyTitleFilter(eventArray);
  return eventArray;
}




//HELPER
function mergeJSONObjectsRemovingDuplicates(arr1, arr2){
  $.merge(arr1, arr2);

  var existingIDs = [];
  arr1 = $.grep(arr1, function(v) {
      if ($.inArray(v.id, existingIDs) !== -1) {
          return false;
      }
      else {
          existingIDs.push(v.id);
          return true;
      }
  });
  return arr1;
}
