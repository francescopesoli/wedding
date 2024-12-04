import React, {useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
    name: string;
    lat: number;
    lng: number;
    tipo: 'Chiesa' | 'Villa';
}

interface MapProps {
    locations: Location[];
}

function MapUpdater({ bounds }: { bounds: L.LatLngBoundsExpression }) {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(bounds);
    }, [map, bounds]);
    return null;
}

const LeafletMap: React.FC<MapProps> = ({ locations }) => {
    const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));

    const createCustomIcon = (tipo: 'Chiesa' | 'Villa') => {
        return L.divIcon({
            className: 'custom-icon',
            html: `<div class="icon-container">
                     <div class="icon-label">${tipo}</div>
                     <div class="icon-marker"></div>
                   </div>`,
            iconSize: [40, 60],
            iconAnchor: [20, 60],
        });
    };

    return (
        <>
            <MapContainer
                center={bounds.getCenter()}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
                scrollWheelZoom={false}
            >
                <MapUpdater bounds={bounds} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={[location.lat, location.lng]}
                        icon={createCustomIcon(location.tipo)}
                    >
                        <Popup>
                            <div>
                                <h3>{location.name}</h3>
                                <button
                                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name)}&query=${location.lat},${location.lng}`, '_blank')}
                                    className="google-maps-button"
                                >
                                    Apri in Google Maps
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            <style jsx global>{`
                .leaflet-container {
                    height: 400px;
                    width: 100%;
                }
                .custom-icon {
                    background: none;
                    border: none;
                }
                .custom-icon .icon-label {
                    background-color: white;
                    padding: 2px 5px;
                    border-radius: 3px;
                    font-weight: bold;
                    font-size: 12px;
                    white-space: nowrap;
                    position: absolute;
                    top: -25px;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                }
                .custom-icon .icon-marker {
                    width: 25px;
                    height: 41px;
                    background-image: url(${icon.src});
                    background-size: contain;
                    background-repeat: no-repeat;
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .google-maps-button {
                    background-color: #4285F4;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: 'Roboto', sans-serif;
                    font-size: 14px;
                }
                .google-maps-button:hover {
                    background-color: #3367D6;
                }
            `}</style>
        </>
    );
};

export default LeafletMap;

