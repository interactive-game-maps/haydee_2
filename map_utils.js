function getPopupMedia(feature, list_id, html) {
    const POPUP_WIDTH = 500;

    if (feature.properties.image_id) {
        var image_link = document.createElement('a');
        image_link.className = 'popup-media';

        // Check for path
        if (feature.properties.image_id.includes('/')) {
            image_link.href = `images/${feature.properties.image_id}.png`;
        } else {
            image_link.href = `images/${list_id}/${feature.properties.id}.png`;
        }

        var image = document.createElement('img');
        image.src = image_link.href;
        image.height = 300;

        image_link.appendChild(image);
        html.appendChild(image_link);
    } else if (feature.properties.video_id) {
        var video = document.createElement('iframe');
        video.className = 'popup-media';
        video.width = POPUP_WIDTH;
        video.height = POPUP_WIDTH / 16 * 9;
        video.src = `https://www.youtube-nocookie.com/embed/${feature.properties.video_id}`;
        video.title = 'YouTube video player';
        video.frameborder = 0;
        // video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen'

        html.appendChild(video);
    }

    return html;
}
