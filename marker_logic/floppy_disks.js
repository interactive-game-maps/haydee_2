var floppy_disks_group_name = 'Floppy disks';
var floppy_disks_group_id = 'floppy_disks';
var floppy_disks_create_checkbox = true;

var floppy_disks_list = createSidebarTab(floppy_disks_group_id, floppy_disks_group_name, '<img class="sidebar-image" src="images/sidebar/floppy_disks.png"></img>');

var floppy_disks_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var floppy_disks_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/floppy_disks.png',
        iconRetinaUrl: 'marker/floppy_disks.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(floppy_disks, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new floppy_disks_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: floppy_disks_group,
            list_id: floppy_disks_group_id,
            list: floppy_disks_list,
            create_checkbox: floppy_disks_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: floppy_disks_group_id
        });
    }
}).addTo(floppy_disks_group);
marker.get(floppy_disks_group_id).set('group', floppy_disks_group);
marker.get(floppy_disks_group_id).set('name', floppy_disks_group_name);

if (floppy_disks_create_checkbox) {
    setColumnCount(marker.get(floppy_disks_group_id), floppy_disks_list);
}
