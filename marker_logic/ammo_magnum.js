var ammo_magnum_group_name = 'Magnum ammo';
var ammo_magnum_group_id = 'ammo_magnum';
var ammo_magnum_create_checkbox = true;

var ammo_magnum_list = createSidebarTab(ammo_magnum_group_id, ammo_magnum_group_name, '<img class="sidebar-image" src="images/sidebar/ammo_magnum.png"></img>')

// Create marker group
var ammo_magnum_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var ammo_magnum_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_magnum.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_magnum_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_magnum_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_magnum_hardcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_magnum_hardcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(ammo_magnum, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: new ammo_magnum_softcore_icon,
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: new ammo_magnum_hardcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new ammo_magnum_icon,
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: ammo_magnum_group,
            list_id: ammo_magnum_group_id,
            list: ammo_magnum_list,
            create_checkbox: ammo_magnum_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: ammo_magnum_group_id
        });
    }
}).addTo(ammo_magnum_group);
marker.get(ammo_magnum_group_id).set('group', ammo_magnum_group);
marker.get(ammo_magnum_group_id).set('name', ammo_magnum_group_name);

if (ammo_magnum_create_checkbox) {
    setColumnCount(marker.get(ammo_magnum_group_id), ammo_magnum_list);
}
