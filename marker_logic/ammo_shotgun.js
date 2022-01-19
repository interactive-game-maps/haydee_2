var ammo_shotgun_layer = new InteractiveLayer('ammo_shotgun', ammo_shotgun, {
    name: "Shotgun ammo",
    create_checkbox: true,
    create_feature_popup: true,
    pointToLayer: function (feature, latlng) {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(this.id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
            return L.marker(latlng, {
                icon: getCustomIcon(this.id, "hard"),
                riseOnHover: true
            });
        } else {
            return L.marker(latlng, {
                icon: getCustomIcon(this.id),
                riseOnHover: true
            });
        }
    }
});

interactive_layers.set(ammo_shotgun_layer.id, ammo_shotgun_layer);
