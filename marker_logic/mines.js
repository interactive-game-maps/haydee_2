var mines_group_name = 'Mines';
var mines_group_id = 'mines';
var mines_create_checkbox = true;

var mines_list = createSidebarTab(mines_group_id, mines_group_name, '<img class="sidebar-image" src="images/sidebar/mines.png"></img>');

// Create marker group
var mines_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var mines_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/mines.png',
        iconRetinaUrl: 'marker/mines.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(mines, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new mines_icon,
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
