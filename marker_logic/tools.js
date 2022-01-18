var tools_group_name = 'Tools';
var tools_group_id = 'tools';
var tools_create_checkbox = true;

var tools_list = createSidebarTab(tools_group_id, tools_group_name, '<i class="fas fa-tools"></i>');
var tools_group = L.featureGroup.subGroup(marker_cluster);

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
        if (containsKeyword(feature, "Agent")) {
            return L.marker(latlng, {
                icon: getCustomIcon("agent"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Battery")) {
            return L.marker(latlng, {
                icon: getCustomIcon("battery"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Black keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_black"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Blue keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_blue"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Bolt cutter")) {
            return L.marker(latlng, {
                icon: getCustomIcon("bolt_cutter"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Bracer")) {
            return L.marker(latlng, {
                icon: getCustomIcon("bracer"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Button")) {
            return L.marker(latlng, {
                icon: getCustomIcon("button"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Crowbar")) {
            return L.marker(latlng, {
                icon: getCustomIcon("crowbar"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Cutter")) {
            return L.marker(latlng, {
                icon: getCustomIcon("cutter"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Decoder")) {
            return L.marker(latlng, {
                icon: getCustomIcon("decoder"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Flash")) {
            return L.marker(latlng, {
                icon: getCustomIcon("flash"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Flask blue")) {
            return L.marker(latlng, {
                icon: getCustomIcon("flask_blue"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Flask green")) {
            return L.marker(latlng, {
                icon: getCustomIcon("flask_green"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Flask red")) {
            return L.marker(latlng, {
                icon: getCustomIcon("flask_red"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Forceps")) {
            return L.marker(latlng, {
                icon: getCustomIcon("forceps"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Fuse")) {
            return L.marker(latlng, {
                icon: getCustomIcon("fuse"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Green keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_green"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Hand")) {
            return L.marker(latlng, {
                icon: getCustomIcon("hand"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Jack")) {
            return L.marker(latlng, {
                icon: getCustomIcon("jack"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Jammer")) {
            return L.marker(latlng, {
                icon: getCustomIcon("jammer"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Knife")) {
            return L.marker(latlng, {
                icon: getCustomIcon("knife"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Lockpick")) {
            return L.marker(latlng, {
                icon: getCustomIcon("lockpick"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Magnum")) {
            return L.marker(latlng, {
                icon: getCustomIcon("magnum"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Mask")) {
            return L.marker(latlng, {
                icon: getCustomIcon("gas_mask"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Orange keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_orange"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pink keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_pink"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pistol")) {
            return L.marker(latlng, {
                icon: getCustomIcon("pistol"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Plier")) {
            return L.marker(latlng, {
                icon: getCustomIcon("plier"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pouch")) {
            return L.marker(latlng, {
                icon: getCustomIcon("pouch"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Pressure tank")) {
            return L.marker(latlng, {
                icon: getCustomIcon("pressure_tank"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Remote control")) {
            return L.marker(latlng, {
                icon: getCustomIcon("remote_control"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Remote device")) {
            return L.marker(latlng, {
                icon: getCustomIcon("remote_device"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "SMG")) {
            return L.marker(latlng, {
                icon: getCustomIcon("smg"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Saw")) {
            return L.marker(latlng, {
                icon: getCustomIcon("saw"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Screwdriver")) {
            return L.marker(latlng, {
                icon: getCustomIcon("screwdriver"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Shotgun")) {
            return L.marker(latlng, {
                icon: getCustomIcon("shotgun"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Sledgehammer")) {
            return L.marker(latlng, {
                icon: getCustomIcon("sledgehammer"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Teal keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_teal"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Upgrade")) {
            return L.marker(latlng, {
                icon: getCustomIcon("upgrade"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Valve")) {
            return L.marker(latlng, {
                icon: getCustomIcon("valve"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Visor")) {
            return L.marker(latlng, {
                icon: getCustomIcon("visor"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "White keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_white"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Wrench")) {
            return L.marker(latlng, {
                icon: getCustomIcon("wrench"),
                riseOnHover: true
            });
        }
        if (containsKeyword(feature, "Yellow keycard")) {
            return L.marker(latlng, {
                icon: getCustomIcon("keycard_yellow"),
                riseOnHover: true
            });
        }

        return L.marker(latlng, {
            icon: getCustomIcon(),
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
}).getLayers().forEach(layer => {
    tools_group.addLayer(layer);
});

marker.get(tools_group_id).set('group', tools_group);
marker.get(tools_group_id).set('name', tools_group_name);

if (tools_create_checkbox) {
    setColumnCount(marker.get(tools_group_id), tools_list);
}
