var medkits_group_name = 'Medkits';
var medkits_group_id = 'medkits';
var medkits_create_checkbox = true;

var medkits_list = createSidebarTab(medkits_group_id, medkits_group_name, `<img class="sidebar-image" src="images/icons/${medkits_group_id}.png" />`);
var medkits_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(medkits, {
    pointToLayer: (feature, latlng) => {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only!")) {
            return L.marker(latlng, {
                icon: getCustomIcon(medkits_group_id, "easy"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(medkits_group_id),
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
}).getLayers().forEach(layer => {
    medkits_group.addLayer(layer);
});

marker.get(medkits_group_id).set('group', medkits_group);
marker.get(medkits_group_id).set('name', medkits_group_name);

if (medkits_create_checkbox) {
    setColumnCount(marker.get(medkits_group_id), medkits_list);
}
