const StockChart = function (companyName, heading, data, container) {
    
    const chart = new Highcharts.stockChart(
        container,
        {
        chart: {
            borderColor: '#000000',
            borderWidth: 2,
            borderRadius: 6
        },
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