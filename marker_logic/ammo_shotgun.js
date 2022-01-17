var ammo_shotgun_group_name = 'Shotgun ammo';
var ammo_shotgun_group_id = 'ammo_shotgun';
var ammo_shotgun_create_checkbox = true;

var ammo_shotgun_list = createSidebarTab(ammo_shotgun_group_id, ammo_shotgun_group_name, `<img class="sidebar-image" src="images/icons/${ammo_shotgun_group_id}.png" />`)

var ammo_shotgun_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(ammo_shotgun, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_shotgun_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_shotgun_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_shotgun_group_id),
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
