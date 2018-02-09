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
            verticalAlign: 'bottom'
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
                color: '#E20F24'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
var data_2 =[
    ['kla-1',1231],['kla-2', 940],['kla-3',856],['kla-4', 1107],['kla-5',1239]
];

var data_3 = [
    ['muk-1', 0],['muk-2', 0],['muk-3', 0],['muk-4', 0],['muk-5', 0],['muk-6',0 ],['muk-7',0],['muk-8',0],['muk-9',0],['muk-10',10 ],['muk-11', 0],['muk-12',0 ],['muk-13',0],['muk-14',0],['muk-15',29],['muk-16', 24],['muk-17',15],['muk-18',430],['muk-19',16],['muk-20', 26],['muk-21',70],['muk-22',43],['muk-23',51],['muk-24',138],['muk-25',22],['muk-26',39],['muk-27',8],['muk-28',0]
];
var data_4 = [
    ['wak-1',105],['wak-2',49],['wak-3',153],['wak-4',20],['wak-5',41],['wak-6',69],['wak-7',54],['wak-8',87],['wak-9',87],['wak-10',465],['wak-11',0],['wak-12',24],['wak-13',26],['wak-14',168],['wak-15',123],['wak-16',310],['wak-17',279],
];

var data_combined = data_2.concat(data_3);
data_combined = data_combined.concat(data_4);


$('#map-subcounties').highcharts('Map', { 
    title: {
        text: 'All Disticts'
    },    
    
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        title: {
            text: 'Burden',
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        },
        align: 'left',
        verticalAlign: 'bottom',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor:  'rgba(255, 255, 255, 0.85)',
        symbolRadius: 0,
        symbolHeight: 14
    },
    
    colorAxis: {
        dataClasses: [{
            to: 1
        }, 
        {
            from: 2,
            to: 299
        },{
            from: 300,
            to: 499
        }, {
            from: 500,
            to: 999
        }, {
            from: 1000,
            to: 1199
        }, {
            from: 1200,
            to: 1299
        }, {
            from: 1300,
            to: 1500
        }, {
            from: 1501
        }]
    },
    
    series: [{
        data: data_combined,
        mapData: combined,
        name: 'Burden',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.properties.NAME_3}'
        }
    }]
});


$('#map-kampala').highcharts('Map', { 
    
    title: {
        text: 'Kampala Divisions'
    },    
    
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        title: {
            text: 'TB Burden per Division(Number of Cases)',
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        },
        align: 'left',
        verticalAlign: 'bottom',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor:  'rgba(255, 255, 255, 0.85)',
        symbolRadius: 0,
        symbolHeight: 14
    },
    
    colorAxis: {
        dataClasses: [{
            to: 1
        }, 
        {
            from: 2,
            to: 299
        },{
            from: 300,
            to: 499
        }, {
            from: 500,
            to: 999
        }, {
            from: 1000,
            to: 1199
        }, {
            from: 1200,
            to: 1299
        }, {
            from: 1300,
            to: 1500
        }, {
            from: 1501
        }]
    },
    
    series: [{
        data: data_2,
        mapData: kampala,
        name: 'Burden',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.properties.NAME_3}'
        }
    }]
    
});


$('#map-mukono').highcharts('Map', { 
    title: {
        text: 'Mukono Subcounties'
    },    
    
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        title: {
            text: 'TB Burden per Sub-County( Number of cases)',
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        },
        align: 'left',
        verticalAlign: 'bottom',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor:  'rgba(255, 255, 255, 0.85)',
        symbolRadius: 0,
        symbolHeight: 14
    },
    
    colorAxis: {
        dataClasses: [{
            to: 1
        }, 
        {
            from: 2,
            to: 299
        },{
            from: 300,
            to: 499
        }, {
            from: 500,
            to: 999
        }, {
            from: 1000,
            to: 1199
        }, {
            from: 1200,
            to: 1299
        }, {
            from: 1300,
            to: 1500
        }, {
            from: 1501
        }]
    },
    
    series: [{
        data: data_3,
        mapData: mukono,
        name: 'Burden',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.properties.NAME_3}'
        }
    }]
});

$('#map-wakiso').highcharts('Map', { 
    title: {
        text: 'Wakiso Subcounties'
    },    
    
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    legend: {
        title: {
            text: 'TB Burden per Sub-Country(Number of Cases)',
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        },
        align: 'left',
        verticalAlign: 'bottom',
        floating: true,
        layout: 'vertical',
        valueDecimals: 0,
        backgroundColor:  'rgba(255, 255, 255, 0.85)',
        symbolRadius: 0,
        symbolHeight: 14
    },
    
    colorAxis: {
        dataClasses: [{
            to: 1
        }, 
        {
            from: 2,
            to: 299
        },{
            from: 300,
            to: 499
        }, {
            from: 500,
            to: 999
        }, {
            from: 1000,
            to: 1199
        }, {
            from: 1200,
            to: 1299
        }, {
            from: 1300,
            to: 1500
        }, {
            from: 1501
        }]
    },
    
    series: [{
        data: data_4,
        mapData: wakiso,
        name: 'Burden',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.properties.NAME_3}'
        }
    }]
});