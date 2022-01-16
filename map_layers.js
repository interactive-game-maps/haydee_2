var website = 'https://github.com/interactive-game-maps/haydee_2';
var website_subdir = 'haydee_2';
var attribution = `
    <div>Thanks to <a href="https://steamcommunity.com/profiles/76561197979867148" title="Enthusiast">Enthusiast</a> for the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2315048067" title="Softcore">Softcore</a> and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2327634458" title="Hardcore">Hardcore</a> maps.</div>
    <div>Thanks to <a href="https://steamcommunity.com/profiles/76561198027883969" title="Nunu">Nunu</a> the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2376352195" title="">enemy</a> map.</div>
    <div>Icons made by <a href="https://fontawesome.com/" title="Font Awesome">Font Awesome</a> under <a href="https://fontawesome.com/license">CCA4</a>.</div>
    `;
const MAX_ZOOM = 8;

var map = L.map('map', {
    crs: L.CRS.Simple,
    // minZoom: 0,
    maxZoom: 10,
    zoom: 3
});

// Use tiled maps if possible, allows better zooming
// Make sure tiling scheme is growing downwards!
// https://github.com/Leaflet/Leaflet/issues/4333#issuecomment-199753161
// https://github.com/commenthol/gdal2tiles-leaflet
// ./gdal2tiles.py -l -p raster -w none -z 2-5 full_map.jpg map_tiles
var tiled_map = new L.tileLayer('map_tiles/{z}/{x}/{y}.png', {
    minNativeZoom: 2,
    maxNativeZoom: L.Browser.retina ? MAX_ZOOM - 1 : MAX_ZOOM, // 1 level LOWER for high pixel ratio device.
    noWrap: true,
    detectRetina: true
});

var baseMaps = {
    "Map": tiled_map
};

// Make one base layer visible by default
tiled_map.addTo(map);
