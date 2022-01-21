function getRooms() {
    var rooms_layer = new InteractiveLayer('rooms', rooms_administrative, {
        name: "Rooms",
        create_checkbox: false,
        create_feature_popup: false,
        is_default: true,
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'green',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'red',
            fillColor: 'green',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    rooms_layer.addGeoJson(rooms_engineering, {
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'orange',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'red',
            fillColor: 'orange',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    rooms_layer.addGeoJson(rooms_habitat, {
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'red',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'blue',
            fillColor: 'red',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    rooms_layer.addGeoJson(rooms_medical, {
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'teal',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'red',
            fillColor: 'teal',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    rooms_layer.addGeoJson(rooms_security, {
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'blue',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'red',
            fillColor: 'blue',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    rooms_layer.addGeoJson(rooms_technical, {
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeHighlightFeature(feature.properties.id);
                },
                click: event => {
                    Utils.share_marker.prevent();
                    this.zoomToFeature(feature.properties.id);
                    Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            layer.bindTooltip(feature.properties.name, {
                sticky: true
            });
        },
        polygon_style: {
            color: 'yellow',
            opacity: 0.5,
            fillOpacity: 0.3
        },
        polygon_style_highlight: {
            color: 'red',
            fillColor: 'yellow',
            opacity: 1,
            fillOpacity: 0.5
        }
    });

    return rooms_layer;
}
