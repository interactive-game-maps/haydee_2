function getMines() {
    return new InteractiveLayer('mines', mines, {
        name: "Mines",
        create_checkbox: true,
        create_feature_popup: true
    });
}
