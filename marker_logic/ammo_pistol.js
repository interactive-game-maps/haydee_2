var ammo_pistol_group_name = 'Pistol ammo';
var ammo_pistol_group_id = 'ammo_pistol';
var ammo_pistol_create_checkbox = true;

var ammo_pistol_list = createSidebarTab(ammo_pistol_group_id, ammo_pistol_group_name, `<img class="sidebar-image" src="images/icons/${ammo_pistol_group_id}.png" />`)
var ammo_pistol_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(ammo_pistol, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_pistol_group_id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_pistol_group_id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(ammo_pistol_group_id),
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
}).getLayers().forEach(layer => {
    ammo_pistol_group.addLayer(layer);
});

marker.get(ammo_pistol_group_id).set('group', ammo_pistol_group);
marker.get(ammo_pistol_group_id).set('name', ammo_pistol_group_name);

if (ammo_pistol_create_checkbox) {
    setColumnCount(marker.get(ammo_pistol_group_id), ammo_pistol_list);
}
