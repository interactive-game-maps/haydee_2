var component_red_group_name = 'Red component';
var component_red_group_id = 'component_red';
var component_red_create_checkbox = true;

// Create list
var component_red_list = createSidebarTab(component_red_group_id, component_red_group_name, '<img class="sidebar-image" src="images/sidebar/component_red.png"></img>');

// Create marker group
var component_red_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var component_red_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_red.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var component_red_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_red_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var component_red_hardcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/component_red_hardcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(component_red, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: new component_red_softcore_icon,
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
            return L.marker(latlng, {
                icon: new component_red_hardcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new component_red_icon,
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
}).addTo(component_red_group);
marker.get(component_red_group_id).set('group', component_red_group);
marker.get(component_red_group_id).set('name', component_red_group_name);

if (component_red_create_checkbox) {
    setColumnCount(marker.get(component_red_group_id), component_red_list);
}
