var mines_layer = new InteractiveLayer('mines', mines, {
    name: "Mines",
    create_checkbox: true,
    create_feature_popup: true
});

interactive_layers.set(mines_layer.id, mines_layer);
