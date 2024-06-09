import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import { Map, View, Overlay } from 'ol';
import { Tile, Image, Group, Vector } from 'ol/layer';
import { OSM, ImageWMS, BingMaps, StadiaMaps } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import { ScaleLine, FullScreen, MousePosition } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';
import { Style, Stroke } from 'ol/style';

let osm = new Tile({
    title:"OSM basemap",
    type: "base",
    visible:true,
    source: new OSM()
});

//Add the Stadia Maps layers
let stadiaWatercolor = new Tile({
    title: "Stadia Watercolor",
    type: "base",
    visible: false,
    source: new StadiaMaps({
        layer: 'stamen_watercolor'
    })
    
})

// Add the bing base map
var BING_MAPS_KEY = "AnIE_qaoODema2iIcuoFcJVPb4rWCED2dvA1OHQZPC";
//var BING_MAPS_KEY = "AqbDxABFot3cmpxfshRqLmg8UTuPv_bg69Ej3d5AkGmjaJy_w5eFSSbOzoHeN2_H";
var bingRoads = new Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});


let DTMLayer = new Image({
    title:"DTM",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:DTM_7' }
    }),
    visible:false
});

let aspectLayer = new Image({
    title:"Aspect",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:aspect_7' }
    }),
    visible:false
});


let roadsLayer = new Image({
    title:"Roads",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:roads_7' }
    }),
    //opacity:0.5,
    visible: false
});

let riversLayer = new Image({
    title:"Rivers",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:rivers_7' }
    }),
    //opacity: 0.5,
    visible:false
});

let planeLayer = new Image({
    title:"Plane",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:plane_7' }
    }),
   // opacity: 0.5,
    visible:false
});

let profileLayer = new Image({
    title:"Profile",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:profile_7' }
    }),
   //opacity: 0.5,
    visible:false
});

let slopeLayer = new Image({
    title:"Slope",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:slope_7' }
    }),
    visible:false
});

let DUSAFLayer = new Image({
    title:"DUSAF",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:DUSAF_7' }
    }),
    visible:false
});

let NDVILayer = new Image({
    title:"NDVI",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:NDVI_7' }
    }),
    visible:false
});
let faultsLayer = new Image({
    title:"faults",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:faults_7' }
    }),
    visible:false
});


// LandslideSusceptibilityMap
let susmap = new Image({
    title:"LandslideSusceptibilityMap",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:LandslideSusceptibilityMap_7' }
    }),
    //opacity: 0.5,
    visible:false
});
// LandslideSusceptibilityMap reclassified
let susmap_reclassified = new Image({
    title:"LandslideSusceptibilityMapReclassified",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:LandslideSusceptibilityMap_reclass_7' }
    }),
    //opacity: 0.5,
    visible:false
});

// Population
let populaitonLayer = new Image({
    title:"Population",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:population_7' }
    }),
    //opacity: 0.5,
    visible:false
});
// LS reclassified resampled
let LS_resampledLayer = new Image({
    title:"Landslide susceptibility reclassified resampled",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:LS_reclassified_resampled_7' }
    }),
    //opacity: 0.5,
    visible:false
});


// Group 7 boundary vector
var boundary = new Image({
    title:"boundary",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:watesheds_7' }
    }),
    //opacity: 0.5,
    visible:true,
});

// Training points
var trainingpoints = new Image({
    title:"Training Points",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:trainpoints' }
    }),
    //opacity: 0.5,
    visible:false
});

// Testing points
var testingpoints = new Image({
    title:"Testing Points",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:testpoints' }
    }),
    visible:false
});

var LS_NLZ_merged = new Image({
    title:"Merged Landslide and non landslide zones",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:LZ_NLZ_Merged' }
    }),
    visible:false
});


//Create the layer groups and add the layers to them

let basemapLayers = new Group({
    title: "Base Maps",
    layers: [osm,stadiaWatercolor,bingRoads]
});



let originLayers = new Group({
    title: "Original data",
    layers: [boundary,DTMLayer,DUSAFLayer,NDVILayer,roadsLayer,riversLayer,faultsLayer]
})
// Caculated data(from DTM)
let caculatedLayers = new Group({
    title: "Caculated data",
    layers: [aspectLayer,planeLayer,profileLayer,slopeLayer]
})
// Add a new overlaygroup for susceptibility mapping 
let susmapLayers = new Group({
    title: "Suscepetibility Mapping",
    layers: [susmap]
})

// Add a new overlaygroup for training datatests
let trainingLayers = new Group({
    title: "Training datasets",
    layers: [trainingpoints,testingpoints,LS_NLZ_merged]
})


// Add a new overlaygroup for exposure assessment
let exposureLayers = new Group({
    title: "Exposure Assessment",
    layers: [populaitonLayer,susmap_reclassified,LS_resampledLayer]
})


// Map Initialization
let map = new Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, originLayers,caculatedLayers,trainingLayers,susmapLayers,exposureLayers],
  
    view: new View({
        center: fromLonLat([10.015, 46.22]),
        zoom: 12
    })
});

// Add the map controls:

map.addControl(new ScaleLine()); 
//Controls can be added using the addControl() map function
map.addControl(new FullScreen());
map.addControl(
    new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
        className: 'coordinate',
        placeholder: '0.0000, 0.0000'
    })
);

var layerSwitcher = new LayerSwitcher({});
map.addControl(layerSwitcher);



// Add the Pop-up for raster layers
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});
map.addOverlay(popup);

// Get all raster layers in a list
var rasterLayers = [
    DTMLayer,DUSAFLayer,NDVILayer,roadsLayer,riversLayer,faultsLayer,aspectLayer,planeLayer,profileLayer,slopeLayer,susmap,populaitonLayer,susmap_reclassified,LS_resampledLayer
];


$(document).ready(function () {
    map.on('singleclick', function (event) {
        var viewResolution = map.getView().getResolution();
        var coord = event.coordinate;
        var foundLayer = false;

        // Traverse layers from top to bottom to find the top-most visible layer
        for (let i = rasterLayers.length - 1; i >= 0; i--) {
            if (rasterLayers[i].getVisible()) {
                var url = rasterLayers[i].getSource().getFeatureInfoUrl(
                    coord, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'application/json' }
                );

                if (url) {
                    // Use a synchronous request to stop processing other layers once data is found
                    $.ajax({
                        url: url,
                        dataType: 'json',
                        async: false,
                        success: function (data) {
                            if (data.features.length > 0 && !foundLayer) {
                                var properties = data.features[0].properties;
                                var displayContent = "";

                                for (var key in properties) {
                                    if (properties.hasOwnProperty(key) && properties[key] !== null && properties[key] !== "") {
                                        displayContent += "<b>" + key + ":</b> " + properties[key] + "<br>";
                                    }
                                }

                                if (displayContent) {
                                    foundLayer = true;
                                    popup.setPosition(coord);
                                    content.innerHTML = displayContent;
                                }
                            }
                        }
                    });

                    // If data is found, exit the loop
                    if (foundLayer) {
                        break;
                    }
                }
            }
        }
    });
});


// The click event handler for closing the popup
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// Handle right click for hiding pop-up
map.getViewport().addEventListener('contextmenu', function (event) {
    event.preventDefault(); // 阻止默认的右键菜单
    popup.setPosition(undefined); // 隐藏弹出窗口
});

// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});
