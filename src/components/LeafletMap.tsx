import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon.src,
    shadowUrl: iconShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
    locations: {
        name: string;
        lat: number;
        lng: number;
    }[];
}

const LeafletMap: React.FC<MapProps> = ({ locations }) => {
    const center = locations.length > 0
        ? [locations[0].lat, locations[0].lng]
        : [41.7234027, 12.6634543]; // Default center if no locations

    const openInGoogleMaps = (name: string, lat: number, lng: number) => {
        const encodedName = encodeURIComponent(name);
        const url = `https://www.google.com/maps/search/?api=1&query=${encodedName}&query=${lat},${lng}`;
        window.open(url, '_blank');
    };

    return (
        <MapContainer center={center as L.LatLngExpression} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
                <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    eventHandlers={{
                        click: () => openInGoogleMaps(location.name, location.lat, location.lng),
                    }}
                >
                    <Popup>
                        <div>
                            <h3>{location.name}</h3>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                openInGoogleMaps(location.name, location.lat, location.lng);
                            }} className="google-maps-button">
                                Apri in Google Maps
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}
            <style jsx global>{`
                .google-maps-button {
                    background-color: #4285F4;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 14px;
                }
                .google-maps-button:hover {
                    background-color: #3367D6;
                }
            `}</style>
        </MapContainer>
    );
};

export default LeafletMap;