function getPopupMedia(feature, list_id, html) {
    if (feature.properties.image_id) {
        var image_link = document.createElement('a');

        // Check for path
        if (feature.properties.image_id.includes('/')) {
            image_link.href = `images/${feature.properties.image_id}.png`;
        } else {
            image_link.href = `images/${list_id}/${feature.properties.id}.png`;
        }

        var image = document.createElement('img');
        image.src = image_link.href;
        image.className = 'popup-media';
        image.height = 300;

        image_link.appendChild(image);
        html.appendChild(image_link);
    }

    return html;
}

function containsKeyword(feature, keyword) {
    if ("id" in feature.properties && feature.properties.id.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
    }

    if ("description" in feature.properties && feature.properties.description.toLowerCase().includes(keyword.toLowerCase())) {
        return true;
    }

    return false;
}
