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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'green',
        weight: 7,
        opacity: 0.5
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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'orange',
        weight: 7,
        opacity: 0.5
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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'red',
        weight: 7,
        opacity: 0.5
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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'teal',
        weight: 7,
        opacity: 0.5
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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'blue',
        weight: 7,
        opacity: 0.5
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
                share_marker.prevent();
                this.zoomToFeature(feature.properties.id);
                setHistoryState(this.id, feature.properties.id);
            }
        });

        layer.bindTooltip(feature.properties.name, {
            sticky: true
        });
    },
    polygon_style: {
        color: 'yellow',
        weight: 7,
        opacity: 0.5
    }
});

interactive_layers.set(rooms_layer.id, rooms_layer);
