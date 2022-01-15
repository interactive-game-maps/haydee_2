var save_locations_group_name = 'Save locations';
var save_locations_group_id = 'save_locations';
var save_locations_create_checkbox = false;

var save_locations_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

L.geoJSON(save_locations, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon(save_locations_group_id),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: save_locations_group,
            list_id: save_locations_group_id,
            create_checkbox: save_locations_create_checkbox
        })

        saveMarker(feature, layer, {
            list_id: save_locations_group_id
        });
    }
}).addTo(save_locations_group);
marker.get(save_locations_group_id).set('group', save_locations_group);
marker.get(save_locations_group_id).set('name', save_locations_group_name);

if (save_locations_create_checkbox) {
    setColumnCount(marker.get(save_locations_group_id), save_locations_list);
}
