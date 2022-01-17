var component_blue_group_name = 'Blue component';
var component_blue_group_id = 'component_blue';
var component_blue_create_checkbox = true;

var component_blue_list = createSidebarTab(component_blue_group_id, component_blue_group_name, `<img class="sidebar-image" src="images/icons/${component_blue_group_id}.png" />`);

var component_blue_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(component_blue, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_blue_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(component_blue_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(component_blue_group_id),
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: component_blue_group,
            list_id: component_blue_group_id,
            list: component_blue_list,
            create_checkbox: component_blue_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: component_blue_group_id
        });
    }
}).addTo(component_blue_group);
marker.get(component_blue_group_id).set('group', component_blue_group);
marker.get(component_blue_group_id).set('name', component_blue_group_name);

if (component_blue_create_checkbox) {
    setColumnCount(marker.get(component_blue_group_id), component_blue_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(component_blue_group_name);
