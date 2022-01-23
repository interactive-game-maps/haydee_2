function addMines(map) {
    map.addInteractiveLayer('mines', mines, {
        name: "Mines",
        create_checkbox: true,
        create_feature_popup: true
    });
}
