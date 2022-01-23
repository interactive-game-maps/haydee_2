function addTools(map) {
    map.addInteractiveLayer('tools', tools, {
        name: "Tools",
        create_checkbox: true,
        create_feature_popup: true,
        sidebar_icon_html: '<i class="fas fa-tools"></i>',
        pointToLayer: (feature, latlng) => {
            if (containsKeyword(feature, "Agent")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("agent"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Battery")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("battery"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Black keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_black"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Blue keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_blue"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Bolt cutter")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("bolt_cutter"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Bracer")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("bracer"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Button")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("button"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Crowbar")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("crowbar"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Cutter")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("cutter"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Decoder")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("decoder"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Flash")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("flash"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Flask blue")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("flask_blue"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Flask green")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("flask_green"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Flask red")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("flask_red"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Forceps")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("forceps"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Plier")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("plier"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Fuse")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("fuse"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Green keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_green"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Hand")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("hand"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Jack")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("jack"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Jammer")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("jammer"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Knife")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("knife"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Lockpick")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("lockpick"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Magnum")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("magnum"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Mask")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("gas_mask"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Orange keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_orange"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Pink keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_pink"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Pistol")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("pistol"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Pouch")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("pouch"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Pressure tank")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("pressure_tank"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Remote control")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("remote_control"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Remote device")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("remote_device"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "SMG")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("smg"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Saw")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("saw"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Screwdriver")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("screwdriver"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Shotgun")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("shotgun"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Sledgehammer")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("sledgehammer"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Teal keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_teal"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Upgrade")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("upgrade"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Valve")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("valve"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Visor")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("visor"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "White keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_white"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Wrench")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("wrench"),
                    riseOnHover: true
                });
            }
            if (containsKeyword(feature, "Yellow keycard")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon("keycard_yellow"),
                    riseOnHover: true
                });
            }

            return L.marker(latlng, {
                icon: Utils.getCustomIcon(),
                riseOnHover: true
            });
        }
    });
}
