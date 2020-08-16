const rad = function (x) {
    return x * Math.PI / 180;
}

const getDistance = function (p1, p2) {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = rad(p2.latitude - p1.latitude)
    let dLong = rad(p2.longitude - p1.longitude)
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    return d // returns the distance in meter
}

const initMap = mapEl => {
    const map = am4core.create(mapEl, am4maps.MapChart)
    map.geodata = am4geodata_worldLow
    map.projection = new am4maps.projections.Miller()
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    let imageSeries = map.series.push(new am4maps.MapImageSeries())
    polygonSeries.useGeodata = true
    polygonSeries.exclude = ["AQ"]
    let polygonTemplate = polygonSeries.mapPolygons.template
    let imageSeriesTemplate = imageSeries.mapImages.template
    let circle = imageSeriesTemplate.createChild(am4core.Circle)
    let lineSeries = map.series.push(new am4maps.MapLineSeries())

    circle.radius = 3
    circle.nonScaling = true
    imageSeriesTemplate.propertyFields.latitude = "latitude"
    imageSeriesTemplate.propertyFields.longitude = "longitude"
    imageSeriesTemplate.propertyFields.fill = "color"
    let data = []

    polygonTemplate.events.on("hit", function (ev) {
        let coords = map.svgPointToGeo(ev.svgPoint)
        if (data.length === 2) {
            data = []
            lineSeries.data = []
        }

        data.push({
            latitude: coords.latitude,
            longitude: coords.longitude,
            color: data.length === 0 ? '#1c2e4a' : '#ff0074'
        })

        if (data.length === 2) {
            lineSeries.data = [{
                multiGeoLine: [data]
            }]
            console.log(getDistance(data[0], data[1]))
        }

        imageSeries.data = data
    })
}