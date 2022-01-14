var ammo_smg_group_name = 'SMG ammo';
var ammo_smg_group_id = 'ammo_smg';
var ammo_smg_create_checkbox = true;

var ammo_smg_list = createSidebarTab(ammo_smg_group_id, ammo_smg_group_name, `<img class="sidebar-image" src="images/icons/${ammo_smg_group_id}.png" />`)

var ammo_smg_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

L.geoJSON(ammo_smg, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomMarker(ammo_smg_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomMarker(ammo_smg_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomMarker(ammo_smg_group_id),
                riseOnHover: true
            });
        }
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: ammo_smg_group,
            list_id: ammo_smg_group_id,
            list: ammo_smg_list,
            create_checkbox: ammo_smg_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: ammo_smg_group_id
        });
    }
}).addTo(ammo_smg_group);
marker.get(ammo_smg_group_id).set('group', ammo_smg_group);
marker.get(ammo_smg_group_id).set('name', ammo_smg_group_name);

if (ammo_smg_create_checkbox) {
    setColumnCount(marker.get(ammo_smg_group_id), ammo_smg_list);
}
