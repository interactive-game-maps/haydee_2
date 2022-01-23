function addEnemies(map) {
    let enemies_layer = map.addInteractiveLayer('enemies', crawler, {
        name: "Enemies",
        create_checkbox: true,
        create_feature_popup: true,
        sidebar_icon_html: `<i class="fas fa-users"></i>`,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-male'),
                riseOnHover: true
            });

        }
    });

    enemies_layer.addGeoJson(slasher, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-running'),
                riseOnHover: true
            });
        }
    })
}
