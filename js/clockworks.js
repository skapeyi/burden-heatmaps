// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [

['ug-2754', 6848],
['ug-1687', 929],
['ug-2757', 2002]    
];

// Country with district
Highcharts.mapChart('map-districts', {
    chart: {
        map: 'countries/ug/ug-all'
    },

    title: {
        text: 'Burden By District'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.js">Uganda</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            horizontalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Burden',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

var data_1 = [
    ['255', 123],
    ['256', 1234]
];
$('#map-subcounties').highcharts('Map', { 
    title: {
        text: 'Three Districts Combined'
    },
     mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0
    },

    series : [ { 
        data: data_1,
        name: 'SubCounty Burden',
        mapData: combined,
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.NAME_3}'
        }
    }] 
});

var data_2 =[
];
$('#map-kampala').highcharts('Map', { 
    title: {
        text: 'Kampala'
    },
     mapNavigation: {
        enabled: false,
        buttonOptions: {
            horizontalAlign: 'bottom'
        }
    },
    series : [ {
        data: data_2,
        name: 'Kamplala Subcounties/Divisions',
        mapData: kampala 
    } ]
});

var data_3 = [
];
$('#map-mukono').highcharts('Map', { 
    title: {
        text: 'Mukono'
    },
     mapNavigation: {
        enabled: false,
        buttonOptions: {
            horizontalAlign: 'bottom'
        }
    },
    series : [ {
        data: data_3,
        name: 'Mukono Subcounties',
        mapData: mukono 
    } ] 
});

var data_4 = [];
$('#map-wakiso').highcharts('Map', { 
    title: {
        text: 'Wakiso'
    },
     mapNavigation: {
        enabled: false,
        buttonOptions: {
            horizontalAlign: 'bottom'
        }
    },
    series : [ { 
        data: data_4,
        name: 'Wakiso Subcounties',
        mapData: wakiso 
    } ]
});