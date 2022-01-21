var interactive_map = new InteractiveMap('map', {
    max_good_zoom: 6,
    max_map_zoom: 8,
    website_source: 'https://github.com/interactive-game-maps/haydee_2',
    website_subdir: 'haydee_2',
    attribution: `
<li><div>Thanks to <a href="https://steamcommunity.com/profiles/76561197979867148" title="Enthusiast">Enthusiast</a> for the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2315048067" title="Softcore">Softcore</a> and <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2327634458" title="Hardcore">Hardcore</a> maps.</div></li>
<li><div>Thanks to <a href="https://steamcommunity.com/profiles/76561198027883969" title="Nunu">Nunu</a> the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2376352195" title="">enemy</a> map.</div></li>
`
});

interactive_map.addTileLayer("Overview", {
    minNativeZoom: 0,
    maxNativeZoom: 8
});

interactive_map.addInteractiveLayer(getNotes());
interactive_map.addInteractiveLayer(getMagnets());
interactive_map.addInteractiveLayer(getCases());
interactive_map.addInteractiveLayer(getMines());
interactive_map.addInteractiveLayer(getEnemies());
interactive_map.addInteractiveLayer(getFloppyDisks());
interactive_map.addInteractiveLayer(getMedkits());
interactive_map.addInteractiveLayer(getAmmoPistol());
interactive_map.addInteractiveLayer(getAmmoSmg());
interactive_map.addInteractiveLayer(getAmmoMagnum());
interactive_map.addInteractiveLayer(getAmmoShotgun());
interactive_map.addInteractiveLayer(getComponentBlue());
interactive_map.addInteractiveLayer(getComponentRed());
interactive_map.addInteractiveLayer(getComponentYellow());
interactive_map.addInteractiveLayer(getTools());
interactive_map.addInteractiveLayer(getSaveLocations());
interactive_map.addInteractiveLayer(getRooms());

interactive_map.finalize();
