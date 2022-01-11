var medkits_group_name = 'Medkits';
var medkits_group_id = 'medkits';
var medkits_create_checkbox = true;

var medkits_list = createSidebarTab(medkits_group_id, medkits_group_name, '<img class="sidebar-image" src="images/sidebar/medkits.png"></img>');

// Create marker group
var medkits_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var medkits_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/medkits.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var medkits_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/medkits_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(medkits, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only!")) {
            return L.marker(latlng, {
                icon: new medkits_softcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new medkits_icon,
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: medkits_group,
            list_id: medkits_group_id,
            list: medkits_list,
            create_checkbox: medkits_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: medkits_group_id
        });
    }
}).addTo(medkits_group);
marker.get(medkits_group_id).set('group', medkits_group);
marker.get(medkits_group_id).set('name', medkits_group_name);

if (medkits_create_checkbox) {
    setColumnCount(marker.get(medkits_group_id), medkits_list);
}
