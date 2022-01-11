var tools_group_name = 'Tools';
var tools_group_id = 'tools';
var tools_create_checkbox = true;

var tools_list = createSidebarTab(tools_group_id, tools_group_name, '<i class="fas fa-tools"></i>');

// Create marker group
var tools_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var battery_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/battery.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var blue_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/blue_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var yellow_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/yellow.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var teal_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/teal_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var orange_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/orange_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var white_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/white_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var black_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/black_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var pink_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/pink_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var green_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/green_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var yellow_keycard_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/yellow_keycard.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var screwdriver_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/screwdriver.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var wrench_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/wrench.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var knife_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/knife.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var crowbar_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/crowbar.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var upgrade_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/upgrade.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var boltcutter_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/boltcutter.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var jammer_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/jammer.png',
        shadowUrl: 'marker/shadow.png'
    }
});

var pouch_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/pouch.png',
        shadowUrl: 'marker/shadow.png'
    }
});

function containsKeyword(feature, keyword) {
    if ("id" in feature.properties && feature.properties.id.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
    }

    if ("description" in feature.properties && feature.properties.description.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
    }

    return false;
}

L.geoJSON(tools, {
    pointToLayer: (feature, latlng) => {
        if (containsKeyword(feature, "Battery")) {
            return L.marker(latlng, {
                icon: new battery_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Black keycard")) {
            return L.marker(latlng, {
                icon: new black_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "White keycard")) {
            return L.marker(latlng, {
                icon: new white_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Blue keycard")) {
            return L.marker(latlng, {
                icon: new blue_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Orange keycard")) {
            return L.marker(latlng, {
                icon: new orange_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Teal keycard")) {
            return L.marker(latlng, {
                icon: new teal_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pink keycard")) {
            return L.marker(latlng, {
                icon: new pink_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Green keycard")) {
            return L.marker(latlng, {
                icon: new green_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Yellow keycard")) {
            return L.marker(latlng, {
                icon: new yellow_keycard_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Screwdriver")) {
            return L.marker(latlng, {
                icon: new screwdriver_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Wrench")) {
            return L.marker(latlng, {
                icon: new wrench_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Knife")) {
            return L.marker(latlng, {
                icon: new knife_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Crowbar")) {
            return L.marker(latlng, {
                icon: new crowbar_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Upgrade")) {
            return L.marker(latlng, {
                icon: new upgrade_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Boltcutter")) {
            return L.marker(latlng, {
                icon: new boltcutter_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Jammer")) {
            return L.marker(latlng, {
                icon: new jammer_icon,
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pouch")) {
            return L.marker(latlng, {
                icon: new pouch_icon,
                riseOnHover: true
            });
        }

        return L.marker(latlng, {
            icon: new L.Icon.Default,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: tools_group,
            list: tools_list,
            list_id: tools_group_id,
            create_checkbox: tools_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: tools_group_id
        });
    }
}).addTo(tools_group);
marker.get(tools_group_id).set('group', tools_group);
marker.get(tools_group_id).set('name', tools_group_name);

if (tools_create_checkbox) {
    setColumnCount(marker.get(tools_group_id), tools_list);
}
