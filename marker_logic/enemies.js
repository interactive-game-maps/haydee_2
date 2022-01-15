var enemies_group_name = 'Enemies';
var enemies_group_id = 'enemies';
var enemies_create_checkbox = true;

var enemies_list = createSidebarTab(enemies_group_id, enemies_group_name, `<i class="fas fa-users"></i>`);

var enemies_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

L.geoJSON(crawler, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomMarker('fa-male'),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: enemies_group,
            list: enemies_list,
            list_id: enemies_group_id,
            create_checkbox: enemies_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: enemies_group_id
        });
    }
}).addTo(enemies_group);

L.geoJSON(slasher, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomMarker('fa-running'),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: enemies_group,
            list: enemies_list,
            list_id: enemies_group_id,
            create_checkbox: enemies_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: enemies_group_id
        });
    }
}).addTo(enemies_group);

marker.get(enemies_group_id).set('group', enemies_group);
marker.get(enemies_group_id).set('name', enemies_group_name);

if (enemies_create_checkbox) {
    setColumnCount(marker.get(enemies_group_id), enemies_list);
}
