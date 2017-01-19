//Services
weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$sce', '$http', function($sce,$http) {
    
    this.getWeather= function(city, days){
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=" + days + "&APPID=b453f03726b9785f1182aa91c4591744";
    $sce.trustAsResourceUrl(url);
    return $http.jsonp(url,{jsonpCallbackParam: 'callback'})
        .then(function(data){
        return data.data;
        
    });
        return result;
    };
}]);