var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var lyr_Fognaturearee0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.comune.prato.it:80/geoserver/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "ru:bacini_drenaggio_fognature_aree",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fognature aree",
                            opacity: 1.000000,
                            
                            
                          });var lyr_Fognaturelinee1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.comune.prato.it:80/geoserver/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "ru:bacini_drenaggio_fognature_linee",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fognature linee",
                            opacity: 1.000000,
                            
                            
                          });var lyr_Fognaturepunti2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserver.comune.prato.it:80/geoserver/wms",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "ru:bacini_drenaggio_fognature_punti",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fognature punti",
                            opacity: 1.000000,
                            
                            
                          });
var group_Retefognature = new ol.layer.Group({
                                layers: [lyr_Fognaturearee0,lyr_Fognaturelinee1,lyr_Fognaturepunti2,],
                                title: "Rete fognature"});

lyr_Fognaturearee0.setVisible(true);lyr_Fognaturelinee1.setVisible(true);lyr_Fognaturepunti2.setVisible(true);
var layersList = [baseLayer,group_Retefognature];
