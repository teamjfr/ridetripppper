
const timer=document.querySelector('.timepicker');
    M.Timepicker.init(timer,{
            showClearBtn:true
        });


const date=document.querySelector('.datepicker');
    M.Datepicker.init(date,{
            showClearBtn:true
        });  

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var options = document.querySelectorAll('option');
            var instances = M.FormSelect.init(elems, options);
            });
        
            $(".menu-toggle-btn").click(function(){
                $(".navigation_bar_class").toggleClass("active");
              });

const starting_location=document.getElementById("start-location-select"),
end_location=document.getElementById("end-location-select"),
selectbtn=document.getElementById("button-for-selection"),
confirmtbtn=document.getElementById("button-for-confirmation"),
routeconfirmtbtn=document.getElementById("button-for-route-confirmation"),
popup = document.querySelector(".map-popup"),
popup1 = document.querySelector(".map-popup1"),
popup2 = document.querySelector(".map-popup2"),
popup3=document.querySelector(".map-popup3");

    var redIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var blueIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
var x = document.getElementById("location");
var y;
var start_latlng,end_latlng;
var marker,universal_result=null;

var map = L.map('map').setView([23.8103, 90.4125], 14);
map.locate({setView:true,maxZoom:16});
var map1 = L.map('map1').setView([23.8103, 90.4125], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

var geocodeService = L.esri.Geocoding.geocodeService();
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    
  }

  function getLocation(latitude_position,longitude_position){
    geocodeService.reverse().latlng({lat: latitude_position, lng: longitude_position}).run(function (error, result) {
         if (error) {
           return;
         }
         
         universal_result=result;
         console.log("oh yes");
         x.innerHTML =result.address.Match_addr;
         
       });
  };  
  
function showPosition(position) {
      geocodeService.reverse().latlng({lat: position.coords.latitude, lng: position.coords.longitude}).run(function (error, result) {
          if (error) {
            return;
          }
          universal_result=result;
          x.innerHTML =result.address.Match_addr;
          marker=L.marker(result.latlng,{draggable:true}).addTo(map).bindPopup(result.address.Match_addr).openPopup();
          console.log(marker);
        
        marker.on('dragend', function(event) {
          console.log(marker);
        var latlng = marker.getLatLng();
        console.log(latlng.lat, latlng.lng);
        getLocation(latlng.lat, latlng.lng);
        });
      });
  };

  
var searchControl=L.esri.Geocoding.geosearch({
  placeholder: "Enter an address or place e.g. 1 York St",
useMapBounds: false
}).addTo(map);
var results = L.layerGroup().addTo(map);

searchControl.on('results', function (data) {
    results.clearLayers();
    map.removeLayer(marker);
    for (var i = data.results.length - 1; i >= 0; i--) {
        universal_result=data.results[i];
        x.innerHTML = data.text;
      marker=L.marker(data.results[i].latlng,{draggable:true});
      results.addLayer(marker);
      marker.on('dragend', function(event) {
        var latlng = marker.getLatLng();
      getLocation(latlng.lat, latlng.lng);
    
    });
    }
  });

  map.on('click', function(e) { 
     map.removeLayer(marker);

     geocodeService.reverse().latlng({lat: e.latlng.lat, lng:e.latlng.lng }).run(function (error, result) {
      if (error) {
        return;
      }
      
      universal_result=result;
      console.log("oh yes");
      
      x.innerHTML =result.address.Match_addr;
      marker=L.marker(universal_result.latlng,{draggable:true}).addTo(map).bindPopup(universal_result.address.Match_addr).openPopup();

      console.log("Chck");

      marker.on('dragend', function(event) {
      var latlng = marker.getLatLng();
    getLocation(latlng.lat, latlng.lng);
  
  });
      
    });
      
  });

function createroute(start_latlng,end_latlng){
  console.log(start_latlng);
  console.log(end_latlng);
  control= L.Routing.control({
    waypoints: [
      L.latLng(start_latlng),
      L.latLng(end_latlng)
    ],
    lineOptions: {
      styles: [{color: 'blue', opacity: 1, weight: 5}]
   },
   createMarker: function(i, wp, nWps) {
     if(i==0){
       marker_icon=blueIcon;
     }
     else if(i==nWps-1){
marker_icon=redIcon;
     }
    return L.marker(wp.latLng, {icon: marker_icon });
  }
  }).addTo(map1);
  console.log(control);
  control.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    // alert distance and time in km and minutes
    var distance=summary.totalDistance;
    console.log(distance);
// alert('Total distance is ' + summary.totalDistance / 1000 + ' km and total time is ' + Math.round(summary.totalTime % 3600 / 60) + ' minutes');
 });
};

  starting_location.onclick = ()=>{
    popup.classList.toggle("show");
    popup1.classList.toggle("show");
    console.log("YES1");
    y=1;
  }
  end_location.onclick = ()=>{
    popup.classList.toggle("show");
    popup1.classList.toggle("show");
    y=2;
  }
selectbtn.onclick = ()=>{
    if(y==1){
        starting_location.click();
        starting_location.value=x.innerHTML;
        start_latlng=universal_result.latlng;
    }
    else if(y==2){
  end_location.click();
  end_location.value=x.innerHTML;
  end_latlng=universal_result.latlng;
    }
  }

  confirmtbtn.onclick=()=>{
    popup2.classList.toggle("show");
        popup3.classList.toggle("show");
        console.log(start_latlng);
  console.log(end_latlng);
        createroute(start_latlng,end_latlng);
  }

  routeconfirmtbtn.onclick=()=>{
    popup2.classList.toggle("show");
        popup3.classList.toggle("show");
  }

