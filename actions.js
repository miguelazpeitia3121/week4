function initialize(lat, lon) { //agregamos aqui
	//Posición del mapa
	var latlng = new google.maps.LatLng(lat, lon); //mod here
	var myOptions = {
		zoom: 8,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	//Marcador
	var marker = new google.maps.Marker({
		position: latlng, 
		map: map, 
		title:"Mi posición"
	});
} //aqu commentamos
/*function sendData(lat, lon){
	$.ajax({
		type: "POST",
		url: "http://carlos.igitsoft.com/apps/geoApp.php",
		data: "lat="+lat+"&lon="+lon+"&name=",
	}).done(function(msg){
		navigator.notification.alert(msg, function(){ }, 'Respuesta del Servidor', 'De Acuerdo');
	});
}*/

$(document).ready(function(){
	document.addEventListener("deviseready", function(){ //esta la aumentamos. funcion ok
	navigator.geolocation.getCurrentPosition(function(position){
		initialize(positoin.coords.latitude, position.cords.longitude); //esto lo agregamos
	}, function(err){
		navigator.notification.alert('Error: ' + err.code, function(){  }, 'Geolocalizacion', 'Aceptar');	
	}); // esta la agregamos. fuccion error
	
	}, false);
	
});