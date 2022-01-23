var interactive_map = new InteractiveMap('map', {
    max_good_zoom: 6,
    max_map_zoom: 8,
    website_source: 'https://github.com/interactive-game-maps/haydee_2',
    website_subdir: 'haydee_2',
    attribution: `
    <li><div><a href="https://steamcommunity.com/profiles/76561197979867148" title="Enthusiast">Enthusiast</a> with the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2315048067" title="Softcore">Softcore</a> and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2327634458" title="Hardcore">Hardcore</a> maps.</div></li>
    <li><div><a href="https://steamcommunity.com/profiles/76561198027883969" title="Nunu">Nunu</a> with the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2376352195" title="">enemy</a> map.</div></li>
    `
});

interactive_map.addTileLayer("Overview", {
    minNativeZoom: 0,
    maxNativeZoom: 8
});

addNotes(interactive_map);
addMagnets(interactive_map);
addCases(interactive_map);
addMines(interactive_map);
addEnemies(interactive_map);
addFloppyDisks(interactive_map);
addMedkits(interactive_map);
addAmmoPistol(interactive_map);
addAmmoSmg(interactive_map);
addAmmoMagnum(interactive_map);
addAmmoShotgun(interactive_map);
addComponentBlue(interactive_map);
addComponentRed(interactive_map);
addComponentYellow(interactive_map);
addTools(interactive_map);
addSaveLocations(interactive_map);
addRooms(interactive_map);

interactive_map.finalize();
