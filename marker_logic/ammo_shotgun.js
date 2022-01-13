var ammo_shotgun_group_name = 'Shotgun ammo';
var ammo_shotgun_group_id = 'ammo_shotgun';
var ammo_shotgun_create_checkbox = true;

var ammo_shotgun_list = createSidebarTab(ammo_shotgun_group_id, ammo_shotgun_group_name, '<img class="sidebar-image" src="images/sidebar/ammo_shotgun.png"></img>')

// Create marker group
var ammo_shotgun_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var ammo_shotgun_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_shotgun.png',
        iconRetinaUrl: 'marker/ammo_shotgun.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_shotgun_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_shotgun_softcore.png',
        iconRetinaUrl: 'marker/ammo_shotgun_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_shotgun_hardcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_shotgun_hardcore.png',
        iconRetinaUrl: 'marker/ammo_shotgun_hardcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(ammo_shotgun, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: new ammo_shotgun_softcore_icon,
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: new ammo_shotgun_hardcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new ammo_shotgun_icon,
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: ammo_shotgun_group,
            list_id: ammo_shotgun_group_id,
            list: ammo_shotgun_list,
            create_checkbox: ammo_shotgun_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: ammo_shotgun_group_id
        });
    }
}).addTo(ammo_shotgun_group);
marker.get(ammo_shotgun_group_id).set('group', ammo_shotgun_group);
marker.get(ammo_shotgun_group_id).set('name', ammo_shotgun_group_name);

if (ammo_shotgun_create_checkbox) {
    setColumnCount(marker.get(ammo_shotgun_group_id), ammo_shotgun_list);
}
