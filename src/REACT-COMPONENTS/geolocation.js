import React, { useState } from "react";


import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "../index.css";
import "leaflet/dist/leaflet.css";



const BasicMap = () => {
    const [center, setCenter] = useState({ lat: 7.2906, lng: 80.6337 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    return (
        <>
            

            <div className="row">
                <div className="col text-center">
                    <h2>Please add your location using the map</h2>
                    <p>Loading the map . . . . </p>
                    <div className="col">
                        <MapContainer
                            center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                                <TileLayer
                                url={osm.maptiler.url}
                                attribution={osm.maptiler.attribution}
                            />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicMap;
