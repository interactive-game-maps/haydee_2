var component_red_group_name = 'Red component';
var component_red_group_id = 'component_red';
var component_red_create_checkbox = true;

var component_red_list = createSidebarTab(component_red_group_id, component_red_group_name, `<img class="sidebar-image" src="images/icons/${component_red_group_id}.png" />`);
var component_red_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(component_red, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_red_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_red_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(component_red_group_id),
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: component_red_group,
            list_id: component_red_group_id,
            list: component_red_list,
            create_checkbox: component_red_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: component_red_group_id
        });
    }
}).getLayers().forEach(layer => {
    component_red_group.addLayer(layer);
});

marker.get(component_red_group_id).set('group', component_red_group);
marker.get(component_red_group_id).set('name', component_red_group_name);

if (component_red_create_checkbox) {
    setColumnCount(marker.get(component_red_group_id), component_red_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(component_red_group_name);
