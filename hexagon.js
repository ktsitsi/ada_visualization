
<!-- Chart code -->
var chart = AmCharts.makeChart( "hexagondiv", {
  "type": "radar",
  "theme": "dark",
  "titles": [{
    "text": "Conflicts on continent level",
    "size": 14
  }],
  "dataProvider": [ {
    "continent": "Asia",
    "conflicts": 244
  }, {
    "continent": "Europe",
    "conflicts": 33
  }, {
    "continent": "Africa",
    "conflicts": 207
  }, {
    "continent": "Americas",
    "conflicts": 41
  }, {
    "continent": "Middle East",
    "conflicts": 82
  }, {
    "continent": "Australia",
    "conflicts": 1
  } ],
  "valueAxes": [ {
    "axisTitleOffset": 20,
    "minimum": 0,
    "axisAlpha": 0.15
  } ],
  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[value]] conflicts on continent level",
    "bullet": "round",
    "lineThickness": 2,
    "valueField": "conflicts"
  } ],
  "categoryField": "continent",
  "export": {
    "enabled": false
  }
} );