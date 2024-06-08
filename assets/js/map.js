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
    visible: true,
    source: new OSM()
});

let DTMLayer = new Image({
    title:"DTM",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:DTM_7' }
    }),
    opacity:0.8,
    visible:true
});

let aspectLayer = new Image({
    title:"Aspect",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:aspect_7' }
    })
});


let roadsLayer = new Image({
    title:"Roads",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:roads_7' }
    }),
    opacity:0.5,
    visible: true
});

let riversLayer = new Image({
    title:"Rivers",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:rivers_7' }
    }),
    opacity: 0.5,
    visible:true,
});

let planeLayer = new Image({
    title:"Plane",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:plane_7' }
    }),
    opacity: 0.5,
    visible:true,
});

let profileLayer = new Image({
    title:"Profile",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:profile_7' }
    }),
    opacity: 0.5,
    visible:true,
});

let slopeLayer = new Image({
    title:"Slope",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:slope_7' }
    }),
    opacity: 0.5,
    visible:true,
});

let DUSAFLayer = new Image({
    title:"DUSAF",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:DUSAF_7' }
    }),
    opacity: 0.5,
    visible:true,
});

let NDVILayer = new Image({
    title:"NDVI",
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_07:NDVI_7' }
    }),
    opacity: 0.5,
    visible:true,
});

// test map display in localhost
let susmap = new Image({
    title:"susmap",
    source: new ImageWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: { 'LAYERS': 'GISlab:LandslideSusceptibilityMap' }
    }),
    //opacity: 0.5,
    visible:true,
});


//Create the layer groups and add the layers to them

let basemapLayers = new Group({
    title: "Base Maps",
    layers: [osm]
});
let preprocessLayers = new Group({
    title: "Preprocesssing",
    layers: [DTMLayer,DUSAFLayer,NDVILayer,aspectLayer,roadsLayer,riversLayer,planeLayer,profileLayer,slopeLayer]
})
// Add a new overlaygroup for susceptibility mapping 
let susmapLayers = new Group({
    title: "Suscepetibility Mapping",
    layers: [susmap]
})
// Add a new overlaygroup for exposure assessment

// Map Initialization
let map = new Map({
    target: document.getElementById('map'),
    layers: [osm, preprocessLayers,susmapLayers],
    view: new View({
        center: fromLonLat([9.98, 46.16]),
        zoom: 10
    })
});

// Add the map controls:

map.addControl(new ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new FullScreen());
map.addControl(
    new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);

var layerSwitcher = new LayerSwitcher({});
map.addControl(layerSwitcher);

//OPTIONAL
//Add the Bing Maps layers


//Add the Stadia Maps layers


//Add the WFS layer



//Add the code for the Pop-up



// The click event handler for closing the popup.



// Adding map event for pointermove
