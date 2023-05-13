import React, { useState, useEffect } from "react";

function GoogleMap(props) {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map === null) {
            const google = window.google;
            const mapOptions = {
                center: { lat: 36.8969, lng: 30.7133 },
                zoom: 5,
            };
            setMap(new google.maps.Map(document.getElementById("map"), mapOptions));
        }
    }, [map, props]);

    return <div id="map" style={{ height: "400px" }}></div>;
}

export default GoogleMap;
