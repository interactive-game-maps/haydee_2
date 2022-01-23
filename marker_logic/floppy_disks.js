function addFloppyDisks(map) {
    map.addInteractiveLayer('floppy_disks', floppy_disks, {
        name: "Floppy disks",
        create_checkbox: true,
        create_feature_popup: true
    });
}
