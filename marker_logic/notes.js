var notes_group_name = 'Notes';
var notes_group_id = 'notes';
var notes_create_checkbox = true;

var notes_list = createSidebarTab(notes_group_id, notes_group_name, '<img class="sidebar-image" src="images/sidebar/notes.png"></img>');

var notes_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var notes_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/notes.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(notes, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new notes_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: notes_group,
            list: notes_list,
            list_id: notes_group_id,
            create_checkbox: notes_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: notes_group_id
        });
    }
}).addTo(notes_group);
marker.get(notes_group_id).set('group', notes_group);
marker.get(notes_group_id).set('name', notes_group_name);

if (notes_create_checkbox) {
    setColumnCount(marker.get(notes_group_id), notes_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(notes_group_name);
