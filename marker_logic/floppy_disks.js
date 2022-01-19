var floppy_disks_layer = new InteractiveLayer('floppy_disks', floppy_disks, {
    name: "Floppy disks",
    create_checkbox: true,
    create_feature_popup: true
});

interactive_layers.set(floppy_disks_layer.id, floppy_disks_layer);
