function addNotes(map) {
    map.addInteractiveLayer('notes', notes, {
        name: "Notes",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true
    });
}
