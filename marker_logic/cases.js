var cases_group_name = 'Cases';
var cases_group_id = 'cases';
var cases_create_checkbox = true;

var cases_list = createSidebarTab(cases_group_id, cases_group_name, `<img class="sidebar-image" src="images/icons/${cases_group_id}.png" />`);
var cases_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(cases, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon(cases_group_id),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: cases_group,
            list_id: cases_group_id,
            list: cases_list,
            create_checkbox: cases_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: cases_group_id
        });
    }
}).getLayers().forEach(layer => {
    cases_group.addLayer(layer);
});

marker.get(cases_group_id).set('group', cases_group);
marker.get(cases_group_id).set('name', cases_group_name);

if (cases_create_checkbox) {
    setColumnCount(marker.get(cases_group_id), cases_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(cases_group_name);
