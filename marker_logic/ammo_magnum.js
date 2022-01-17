var ammo_magnum_group_name = 'Magnum ammo';
var ammo_magnum_group_id = 'ammo_magnum';
var ammo_magnum_create_checkbox = true;

var ammo_magnum_list = createSidebarTab(ammo_magnum_group_id, ammo_magnum_group_name, `<img class="sidebar-image" src="images/icons/${ammo_magnum_group_id}.png" />`)
var ammo_magnum_group = L.markerClusterGroup({
    maxClusterRadius: 20
});

L.geoJSON(ammo_magnum, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_magnum_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_magnum_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_magnum_group_id),
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
