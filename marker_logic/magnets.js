var magnets_group_name = 'Magnets';
var magnets_group_id = 'magnets';
var magnets_create_checkbox = true;

var magnets_list = createSidebarTab(magnets_group_id, magnets_group_name, `<img class="sidebar-image" src="images/icons/${magnets_group_id}.png" />`);
var magnets_group = L.markerClusterGroup({
    maxClusterRadius: 20
});

L.geoJSON(magnets, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(magnets_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(magnets_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(magnets_group_id),
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: magnets_group,
            list_id: magnets_group_id,
            list: magnets_list,
            create_checkbox: magnets_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: magnets_group_id
        });
    }
}).addTo(magnets_group);
marker.get(magnets_group_id).set('group', magnets_group);
marker.get(magnets_group_id).set('name', magnets_group_name);

if (magnets_create_checkbox) {
    setColumnCount(marker.get(magnets_group_id), magnets_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(magnets_group_name);
