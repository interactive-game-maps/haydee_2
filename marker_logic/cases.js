var cases_layer = new InteractiveLayer('cases', cases, {
    name: "Cases",
    create_checkbox: true,
    create_feature_popup: true,
    is_default: true
});

interactive_layers.set(cases_layer.id, cases_layer);
