var chartData = {
  
  "2010": [
    { "sector": "Africa", "size": 23.8 },
    { "sector": "Europe", "size": 0.96 },
    { "sector": "Asia", "size": 49.6 },
    { "sector": "Americas", "size": 9.7 },
    { "sector": "Middle East", "size": 15.8 }],
  "2011": [
    { "sector": "Africa", "size": 50.8 },
    { "sector": "Europe", "size": 1.0 },
    { "sector": "Asia", "size": 32.9 },
    { "sector": "Americas", "size": 8.9 },
    { "sector": "Middle East", "size": 6.2 }],
  "2012": [
    { "sector": "Africa", "size": 61.6 },
    { "sector": "Europe", "size": 0.7 },
    { "sector": "Asia", "size": 26.2 },
    { "sector": "Americas", "size": 2.7 },
    { "sector": "Middle East", "size": 8.8 }],
  "2013": [
    { "sector": "Africa", "size": 72.9 },
    { "sector": "Europe", "size": 1.7 },
    { "sector": "Asia", "size": 19.7 },
    { "sector": "Americas", "size": 3.3 },
    { "sector": "Middle East", "size": 2.7 }],
  "2014": [
    { "sector": "Africa", "size": 53.3 },
    { "sector": "Europe", "size": 15.9 },
    { "sector": "Asia", "size": 11.7 },
    { "sector": "Americas", "size": 4.1 },
    { "sector": "Middle East", "size": 14.8 }]
};


/**
 * Create the chart
 */
var currentYear = 2010;
var chart = AmCharts.makeChart( "piediv", {
  "type": "pie",
  "theme": "dark",
  "dataProvider": [],
  "valueField": "size",
  "titleField": "sector",
  "startDuration": 0,
  "innerRadius": 80,
  "pullOutRadius": 20,
  "marginTop": 30,
  "titles": [{
    "text": "Deaths percentage in each continent"
  }],
  "allLabels": [{
    "y": "54%",
    "align": "center",
    "size": 25,
    "bold": true,
    "text": "2010",
    "color": "#fff"
  }, {
    "y": "49%",
    "align": "center",
    "size": 15,
    "text": "Year",
    "color": "#fff"
  }],
  "listeners": [ {
    "event": "init",
    "method": function( e ) {
      var chart = e.chart;

      function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014)
          currentYear = 2010;
        return data;
      }

      function loop() {
        chart.allLabels[0].text = currentYear;
        var data = getCurrentData();
        chart.animateData( data, {
          duration: 1000,
          complete: function() {
            setTimeout( loop, 3000 );
          }
        } );
      }

      loop();
    }
  } ],
   "export": {
   "enabled": false
  }
} );