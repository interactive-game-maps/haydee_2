var notes_layer = new InteractiveLayer('notes', notes, {
    name: "Notes",
    create_checkbox: true,
    create_feature_popup: true,
    is_default: true
});

interactive_layers.set(notes_layer.id, notes_layer);
