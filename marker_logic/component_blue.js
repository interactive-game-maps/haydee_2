var component_blue_layer = new InteractiveLayer('component_blue', component_blue, {
    name: "Blue component",
    create_checkbox: true,
    create_feature_popup: true,
    is_default: true,
    pointToLayer: function (feature, latlng) {
        if ("description" in feature.properties && feature.properties.description.includes("Softcore")) {
            return L.marker(latlng, {
                icon: getCustomIcon(this.id, "easy"),
                riseOnHover: true
            });
        } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore")) {
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

interactive_layers.set(component_blue_layer.id, component_blue_layer);
