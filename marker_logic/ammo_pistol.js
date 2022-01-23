function addAmmoPistol(map) {
    map.addInteractiveLayer('ammo_pistol', ammo_pistol, {
        name: "Pistol ammo",
        create_checkbox: true,
        create_feature_popup: true,
        pointToLayer: function (feature, latlng) {
            if ("description" in feature.properties && feature.properties.description.includes("Softcore only")) {
                return L.marker(latlng, {
                    icon: Utils.getCustomIcon(this.id, "easy"),
                    riseOnHover: true
                });
            } else if ("description" in feature.properties && feature.properties.description.includes("Hardcore only")) {
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
