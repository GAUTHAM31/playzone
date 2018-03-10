//Init select inputs
$('.material').material_select();


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

    html += '<div class="col s12 m6 l4"><div class="card"><div class="card-content white-text"><div class="card__date"><span class="card__date__day">23</span><span class="card__date__month">May</span></div></div><div class="card-action"><div class="card__meta"><a href="#"><i class="small material-icons">room</i>' + value.city + '</a></div><span class="card-title grey-text text-darken-4">' + value.title + '</p><span class="text-darken-2 card-info"><i class="small material-icons">label</i>&nbsp;' + value.styles + '</span></div></div>';

    html += '</div>';
  });
  $('#card-container').html(html);

}

//DATA:
var data = [{
  "id" : 1,
  "title": "S. Taller de Àlex Mas & Núria Bonet",
  "begin-date": "24/06/2015",
  "end-date": "",
  "lat": "",
  "lon": "",
  "country": "Spain",
  "country-code": "ES",
  "city": "Vitoria-Gasteiz",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "social",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}, {
  "id" : 2,
  "title": "C. I CRAZY WEEKEND MADRID 2016!",
  "begin-date": "24/06/2015",
  "end-date": "",
  "country": "Portugal",
  "country-code": "PT",
  "city": "Lisboa",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "class",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}, {
  "id" : 3,
  "title": "F. Fiesta Fin de Trimestre y Despedida de Profes",
  "begin-date": "24/06/2015",
  "end-date": "",
  "country": "Portugal",
  "country-code": "PT",
  "city": "Lisboa",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "festival",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}, {
  "id" : 4,
  "title": "C. Taller de Àlex Mas & Núria Bonet",
  "begin-date": "24/06/2015",
  "end-date": "",
  "country": "Portugal",
  "country-code": "PT",
  "city": "Lisboa",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "class",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}, {
  "id" : 5,
  "title": "S. Taller de Àlex Mas & Núria Bonet",
  "begin-date": "24/06/2015",
  "end-date": "",
  "country": "Spain",
  "country-code": "ES",
  "city": "Vitoria-Gasteiz",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "social",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}, {
  "id" : 6,
  "title": "C. Taller de Àlex Mas & Núria Bonet",
  "begin-date": "24/06/2015",
  "end-date": "",
  "country": "Spain",
  "country-code": "ES",
  "city": "Vitoria-Gasteiz",
  "address": "C/ Domingo Beltrán 19, Vitoria-Gasteiz",
  "organizer": "Swing Up",
  "email": "info@savoyswingup.com",
  "web": "http://www.savoyswingup.com",
  "phone": "656123456",
  "event_type": "class",
  "styles": [
    "lindy hop",
    "balboa",
    "blues"
  ]
}];

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