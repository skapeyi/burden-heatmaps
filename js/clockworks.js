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
    ['kla-1',20],['kla-2', 30],['kla-3',15],['kla-4', 12],['kla-5',90]
];

var data_3 = [
    ['muk-1', 1],['muk-2', 2],['muk-3', 3],['muk-4', 4],['muk-5', 5],['muk-6',6 ],['muk-7',7 ],['muk-8',8 ],['muk-9',9 ],['muk-10',10 ],['muk-11', 11],['muk-12',12 ],['muk-13',13 ],['muk-14',14 ],['muk-15',15 ],['muk-16', 16],['muk-17',17 ],['muk-18',18 ],['muk-19',19 ],['muk-20', 20],['muk-21',21 ],['muk-22',22 ],['muk-23',23 ],['muk-24',24 ],['muk-25',25 ],['muk-26',26 ],['muk-27',27 ],['muk-28',28 ]
];
var data_4 = [
    ['wak-1',1],['wak-2',2],['wak-3',3],['wak-4',4],['wak-5',5],['wak-6',6],['wak-7',7],['wak-8',8],['wak-9',9],['wak-10',10],['wak-11',11],['wak-12',12],['wak-13',13],['wak-14',14],['wak-15',15],['wak-16',16],['wak-17',17],
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

    colorAxis: {
        min: 0
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

    colorAxis: {
        min: 0
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
        text: 'Mukono Divisions'
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

var data_4 = [
    ['wak-1',1],['wak-2',2],['wak-3',3],['wak-4',4],['wak-5',5],['wak-6',6],['wak-7',7],['wak-8',8],['wak-9',9],['wak-10',10],['wak-11',11],['wak-12',12],['wak-13',13],['wak-14',14],['wak-15',15],['wak-16',16],['wak-17',17],
];
$('#map-wakiso').highcharts('Map', { 
     title: {
        text: 'Wakiso Divisions'
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