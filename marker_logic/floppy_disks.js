var floppy_disks_group_name = 'Floppy disks';
var floppy_disks_group_id = 'floppy_disks';
var floppy_disks_create_checkbox = true;

var floppy_disks_list = createSidebarTab(floppy_disks_group_id, floppy_disks_group_name, `<img class="sidebar-image" src="images/icons/floppy_disks.png" />`);
var floppy_disks_group = L.markerClusterGroup({
    maxClusterRadius: 20
});

L.geoJSON(floppy_disks, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon(floppy_disks_group_id),
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
