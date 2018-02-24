const app = function(){
    const getCompanyInfoButton = document.getElementById("get-data-button");
    getCompanyInfoButton.addEventListener("click", getData);
}

const getData = function(){
    getCompanyInfo();
    getStockData();
}

document.addEventListener("DOMContentLoaded", app);