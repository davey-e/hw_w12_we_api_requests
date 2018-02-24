const StockChart = function (companyName, heading, data, container) {
    
    const chart = new Highcharts.stockChart(
        container,
        {
        rangeSelector: {
            selected: 1
        },
    
        title: {
            text: heading
        },
        series: [{
            name: companyName,
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]

    });
}