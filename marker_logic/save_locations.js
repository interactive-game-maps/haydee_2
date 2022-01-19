var save_locations = new InteractiveLayer('save_locations', save_locations, {
    name: "Save locations",
    create_checkbox: false,
    create_feature_popup: true
});

interactive_layers.set(save_locations.id, save_locations);
