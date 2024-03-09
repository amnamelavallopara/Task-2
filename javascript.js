var options = {
    series: [
        {
            name: '2022',
            data: [18, 7, 15, 29, 18, 12, 9]
        },
        {
            name: '2021',
            data: [-13, -18, -9, -14, -5, -17, -15]
        }
    ],
    chart: {
        height: 300,
        type: 'bar',
        stacked: true, // To stack positive and negative bars
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: '30%',
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        labels: {
            rotate: 0
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        tickPlacement: 'on'
    },
    yaxis: {
        min: -20,
        max: 30,
        tickAmount: 5,
        labels: {
            formatter: function(value) {
                return Math.abs(value.toFixed(0)); // Format labels to display positive values
            }
        }
    },
    stroke: {
        width: 5
      },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();