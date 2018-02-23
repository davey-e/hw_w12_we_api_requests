const app = function(){

    const getCompanyInfoButton = document.getElementById("get-company-info-button");
    getCompanyInfoButton.addEventListener("click", getCompanyInfo);
    
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

const getCompanyInfo = function(){
    const stockNameInput = document.getElementById("stock-name-input");
    const company = stockNameInput.value;
    console.log("company:",company);
    const url = "https://api.iextrading.com/1.0/stock/" + company + "/company";
    console.log(url);
    makeRequest(url, requestComplete);
}


document.addEventListener("DOMContentLoaded", app);