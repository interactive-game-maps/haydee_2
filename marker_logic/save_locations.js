function addSaveLocations(map) {
    map.addInteractiveLayer('save_locations', save_locations, {
        name: "Save locations",
        create_checkbox: false,
        create_feature_popup: true
    });
}
