var rooms_group_name = 'Rooms overview';
var rooms_group_id = 'rooms';

var rooms_group = L.featureGroup.subGroup(marker_cluster);

var rooms_administrative_geojson = L.geoJSON(rooms_administrative, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_administrative_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_administrative_geojson);

var rooms_engineering_geojson = L.geoJSON(rooms_engineering, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_engineering_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_engineering_geojson);

var rooms_habitat_geojson = L.geoJSON(rooms_habitat, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_habitat_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_habitat_geojson);

var rooms_medical_geojson = L.geoJSON(rooms_medical, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_medical_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_medical_geojson);

var rooms_security_geojson = L.geoJSON(rooms_security, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_security_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_security_geojson);

var rooms_technical_geojson = L.geoJSON(rooms_technical, {
    onEachFeature: (feature, layer) => {
        layer.on({
            mouseover: e => {
                highlightFeatureId(rooms_group_id, e.target.feature.properties.id);
            },
            mouseout: e => {
                highlightFeatureIdRemove(rooms_group_id, e.target.feature.properties.id, rooms_technical_geojson);
            },
            click: e => {
                preventShareMarker();
                zoomToFeature(rooms_group_id, e.target.feature.properties.id);
                setHistoryState(rooms_group_id, e.target.feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });

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
geoJSONs.push(rooms_technical_geojson);

marker.get(rooms_group_id).set('group', rooms_group);
marker.get(rooms_group_id).set('name', rooms_group_name);

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(rooms_group_name);
