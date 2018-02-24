const app = function(){
    const getCompanyInfoButton = document.getElementById("get-company-info-button");
    getCompanyInfoButton.addEventListener("click", getCompanyInfo);

    const getStockDataButton = document.getElementById("get-stock-data-button");
    getStockDataButton.addEventListener("click", getStockData);

    
}

document.addEventListener("DOMContentLoaded", app);