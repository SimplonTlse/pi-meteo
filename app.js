var tableauTemp = [];
var pas;
var tableauX =[];
for (pas = 0; pas < 1001;pas++){
    var temperature = 15+Math.random()*10;
    tableauTemp.push(temperature);
    var axeX = pas;
    tableauX.push(new Date(axeX*1000*60))
}
console.log(tableauTemp);
console.log(tableauX);

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: tableauX,
        datasets: [{
            label: '# temperatures',
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:tableauTemp
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {

                    position: "bottom",
                    time: {
                        // string/callback - By default, date objects are expected. You may use a pattern string from http://momentjs.com/docs/#/parsing/string-format/ to parse a time string format, or use a callback function that is passed the label, and must return a moment() instance.
                        parser: false,
                        // string - By default, unit will automatically be detected.  Override with 'week', 'month', 'year', etc. (see supported time measurements)
                        unit: false,

                        // Number - The number of steps of the above unit between ticks
                        unitStepSize: 1,

                        // string - By default, no rounding is applied.  To round, set to a supported time unit eg. 'week', 'month', 'year', etc.
                        round: false,

                        // Moment js for each of the units. Replaces `displayFormat`
                        // To override, use a pattern string from http://momentjs.com/docs/#/displaying/format/
                        displayFormats: {
                            'millisecond': 'SSS [ms]',
                            'second': 'h:mm:ss a', // 11:20:01 AM
                            'minute': 'h:mm:ss a', // 11:20:01 AM
                            'hour': 'MMM D, hA', // Sept 4, 5PM
                            'day': 'll', // Sep 4 2015
                            'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                            'month': 'MMM YYYY', // Sept 2015
                            'quarter': '[Q]Q - YYYY', // Q3
                            'year': 'YYYY', // 2015
                        },
                        // Sets the display format used in tooltip generation
                        tooltipFormat: ''
                    }

}
}]
}
}
});