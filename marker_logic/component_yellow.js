var component_yellow_group_name = 'Yellow component';
var component_yellow_group_id = 'component_yellow';
var component_yellow_create_checkbox = true;

var component_yellow_list = createSidebarTab(component_yellow_group_id, component_yellow_group_name, `<img class="sidebar-image" src="images/icons/${component_yellow_group_id}.png" />`);
var component_yellow_group = L.markerClusterGroup({
    maxClusterRadius: 20
});

L.geoJSON(component_yellow, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_yellow_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_yellow_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(component_yellow_group_id),
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: component_yellow_group,
            list_id: component_yellow_group_id,
            list: component_yellow_list,
            create_checkbox: component_yellow_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: component_yellow_group_id
        });
    }
}).addTo(component_yellow_group);
marker.get(component_yellow_group_id).set('group', component_yellow_group);
marker.get(component_yellow_group_id).set('name', component_yellow_group_name);

if (component_yellow_create_checkbox) {
    setColumnCount(marker.get(component_yellow_group_id), component_yellow_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(component_yellow_group_name);
