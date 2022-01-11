var component_yellow_group_name = 'Yellow component';
var component_yellow_group_id = 'component_yellow';
var component_yellow_create_checkbox = true;

// Create list
var component_yellow_list = createSidebarTab(component_yellow_group_id, component_yellow_group_name, '<img class="sidebar-image" src="images/sidebar/component_yellow.png"></img>');

// Create marker group
var component_yellow_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var component_yellow_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_yellow.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var component_yellow_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_yellow_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var component_yellow_hardcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_yellow_hardcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(component_yellow, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: new component_yellow_softcore_icon,
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
            return L.marker(latlng, {
                icon: new component_yellow_hardcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new component_yellow_icon,
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
