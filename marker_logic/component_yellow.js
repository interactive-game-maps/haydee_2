function addComponentYellow(map) {
    map.addInteractiveLayer('component_yellow', component_yellow, {
        name: "Yellow component",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon(this.id, "easy"),
                    riseOnHover: true
                });
            } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon(this.id, "hard"),
                    riseOnHover: true
                });
            } else {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon(this.id),
                    riseOnHover: true
                });
            }
        }
    });
}
