const stockDataMakeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const stockDataRequestComplete = function(){
    if(this.status !== 200) return;
    const jsonString = this.responseText; //This is a string
    const data = JSON.parse(jsonString); //This parses the string into a js object
    formatData(data);
}

const getStockData = function(){
    const stockNameInput = document.getElementById("stock-name-input");
    const company = stockNameInput.value;
    const url = "https://api.iextrading.com/1.0/stock/" + company + "/chart/1y";
    stockDataMakeRequest(url, stockDataRequestComplete);
}

const formatData = function(data){
    const dataArray = [];
    data.forEach(function(day){
        const individualDayDataArray = [];
        const unixDate = Date.parse(day.date);
        individualDayDataArray.push(unixDate);
        individualDayDataArray.push(day.close);
        dataArray.push(individualDayDataArray);
    })
    displayChartData(dataArray);
}

const displayChartData = function(data){
    const stockNameInput = document.getElementById("stock-name-input");
    const companyName = stockNameInput.value;
    const container = document.getElementById("chart-area");
    const heading = "Stock Data for " + companyName;
    new StockChart(companyName, heading, data, container);
    
};