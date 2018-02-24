const companyInfoMakeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const companyInfoRequestComplete = function(){
    if(this.status !== 200) return;
    const jsonString = this.responseText; //This is a string
    const data = JSON.parse(jsonString); //This parses the string into a js object
    displayCompanyInfo(data);
}

const getCompanyInfo = function(){
    const stockNameInput = document.getElementById("stock-name-input");
    const company = stockNameInput.value;
    const url = "https://api.iextrading.com/1.0/stock/" + company + "/company";
    companyInfoMakeRequest(url, companyInfoRequestComplete);
}

const capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const displayCompanyInfo = function(data){
    const companyInfoDiv = document.getElementById("company-info");
    companyInfoDiv.innerHTML = "";
    const header = document.createElement("h2");
    header.innerText = data.companyName;
    companyInfoDiv.appendChild(header);
    const table = document.createElement("table");

    for(let item in data){
        if(item === "companyName"){
            //dont do anything, i.e. don't display it
        } else if (item === "issueType"){
            //dont do anything, i.e. don't disply it
        } else {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const formattedItem = capitalizeFirstLetter(item);
            td1.innerText = formattedItem + ":";
            tr.appendChild(td1);
            const td2 = document.createElement("td");
            td2.innerText = data[item];
            tr.appendChild(td2);
            table.appendChild(tr);
        }
    };
    companyInfoDiv.appendChild(table);
}