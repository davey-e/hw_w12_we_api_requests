const app = function(){
    const getCompanyInfoButton = document.getElementById("get-company-info-button");
    getCompanyInfoButton.addEventListener("click", getCompanyInfo);
}

document.addEventListener("DOMContentLoaded", app);