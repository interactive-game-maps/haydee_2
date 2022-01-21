function getFloppyDisks() {
    return new InteractiveLayer('floppy_disks', floppy_disks, {
        name: "Floppy disks",
        create_checkbox: true,
        create_feature_popup: true
    });
}
