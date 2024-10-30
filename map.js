var google_map = new ol.layer.Tile({
    visible : true,
    source: new ol.source.XYZ({
      url:'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
    }),
  });
  var view = new ol.View({
    projection: 'EPSG:4326',
    center: [-7.649762 , 33.547120],
    zoom:15,
  });
  var map = new ol.Map({
    target: 'map',
    layers: [google_map],
    view: view,
  });