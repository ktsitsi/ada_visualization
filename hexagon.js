
<!-- Chart code -->
var chart = AmCharts.makeChart( "hexagondiv", {
  "type": "radar",
  "theme": "dark",
  "dataProvider": [ {
    "country": "Czech Republic",
    "litres": 156.9
  }, {
    "country": "Ireland",
    "litres": 131.1
  }, {
    "country": "Germany",
    "litres": 115.8
  }, {
    "country": "Australia",
    "litres": 109.9
  }, {
    "country": "Austria",
    "litres": 108.3
  }, {
    "country": "UK",
    "litres": 99
  } ],
  "valueAxes": [ {
    "axisTitleOffset": 20,
    "minimum": 0,
    "axisAlpha": 0.15
  } ],
  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[value]] litres of beer per year",
    "bullet": "round",
    "lineThickness": 2,
    "valueField": "litres"
  } ],
  "categoryField": "country",
  "export": {
    "enabled": false
  }
} );