const app = function(){

    const url = "https://api.iextrading.com/1.0/stock/aapl/chart/1m";
    
    makeRequest(url, requestComplete);
    
}

const makeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const requestComplete = function(){
    if(this.status !== 200) return;
    const jsonString = this.responseText; //This is a string
    const data = JSON.parse(jsonString); //This parses the string into a js object
    console.log(data);
    
}


document.addEventListener("DOMContentLoaded", app);