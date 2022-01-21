function getNotes() {
    return new InteractiveLayer('notes', notes, {
        name: "Notes",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true
    });
}
