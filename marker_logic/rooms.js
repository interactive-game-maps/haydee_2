var rooms_group_name = 'Rooms overview';
var rooms_group_id = 'rooms';

var rooms_group = L.markerClusterGroup();

var rooms_administrative_geojson = L.geoJSON(rooms_administrative, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_administrative_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'green',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

var rooms_engineering_geojson = L.geoJSON(rooms_engineering, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_engineering_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'orange',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

var rooms_habitat_geojson = L.geoJSON(rooms_habitat, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_habitat_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'red',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

var rooms_medical_geojson = L.geoJSON(rooms_medical, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_medical_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'teal',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

var rooms_security_geojson = L.geoJSON(rooms_security, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_security_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'blue',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

var rooms_technical_geojson = L.geoJSON(rooms_technical, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: (e) => {
                rooms_technical_geojson.resetStyle(e.target);
            },
            click: (e) => {
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.id);

        saveMarker(feature, layer, {
            list_id: rooms_group_id
        });
    },
    style: feature => {
        return {
            color: 'yellow',
            weight: 7,
            opacity: 0.5
        };
    }
}).addTo(rooms_group);

marker.get(rooms_group_id).set('group', rooms_group);
marker.get(rooms_group_id).set('name', rooms_group_name);

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(rooms_group_name);
