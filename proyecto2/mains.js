$(document).ready(function(){
    var clima = document.getElementById("clima")
    var comuna = document.getElementById("comuna")
    var temperatura= document.getElementById("temperatura")
    var descripcion= document.getElementById("estado");
    var imagen = document.getElementById("imagen")
    var ubicacion = navigator.geolocation.getCurrentPosition(data=>{
        
        var latitud=data.coords.latitude;
        var longitud = data.coords.longitude;
        

        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&units=metric&appid=3242b1dab11daf94dbb5c2c45df0e07a`,
        function(data){
            console.log(data)
            comuna.innerHTML=data.name;
            temperatura.innerHTML=data.main.temp+"°C";
            descripcion.innerHTML = data.weather[0].description;
            var icono = data.weather[0].icon;
            imagen.setAttribute("src",`http://openweathermap.org/img/wn/${icono}@2x.png`)
            
        })
        
        
        
    });

    
    
  
   
    
})