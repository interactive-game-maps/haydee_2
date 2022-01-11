var ammo_pistol_group_name = 'Pistol ammo';
var ammo_pistol_group_id = 'ammo_pistol';
var ammo_pistol_create_checkbox = true;

var ammo_pistol_list = createSidebarTab(ammo_pistol_group_id, ammo_pistol_group_name, '<img class="sidebar-image" src="images/sidebar/ammo_pistol.png"></img>')

// Create marker group
var ammo_pistol_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var ammo_pistol_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_pistol.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_pistol_softcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_pistol_softcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var ammo_pistol_hardcore_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/ammo_pistol_hardcore.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(ammo_pistol, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: new ammo_pistol_softcore_icon,
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: new ammo_pistol_hardcore_icon,
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: new ammo_pistol_icon,
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: ammo_pistol_group,
            list_id: ammo_pistol_group_id,
            list: ammo_pistol_list,
            create_checkbox: ammo_pistol_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: ammo_pistol_group_id
        });
    }
}).addTo(ammo_pistol_group);
marker.get(ammo_pistol_group_id).set('group', ammo_pistol_group);
marker.get(ammo_pistol_group_id).set('name', ammo_pistol_group_name);

if (ammo_pistol_create_checkbox) {
    setColumnCount(marker.get(ammo_pistol_group_id), ammo_pistol_list);
}
