function addCases(map) {
    map.addInteractiveLayer('cases', cases, {
        name: "Cases",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true
    });
}
