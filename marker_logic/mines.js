var mines_group_name = 'Mines';
var mines_group_id = 'mines';
var mines_create_checkbox = true;

var mines_list = createSidebarTab(mines_group_id, mines_group_name, `<img class="sidebar-image" src="images/icons/${mines_group_id}.png" />`);

var mines_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

L.geoJSON(mines, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon(mines_group_id),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: mines_group,
            list: mines_list,
            list_id: mines_group_id,
            create_checkbox: mines_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: mines_group_id
        });
    }
}).addTo(mines_group);
marker.get(mines_group_id).set('group', mines_group);
marker.get(mines_group_id).set('name', mines_group_name);

if (mines_create_checkbox) {
    setColumnCount(marker.get(mines_group_id), mines_list);
}
