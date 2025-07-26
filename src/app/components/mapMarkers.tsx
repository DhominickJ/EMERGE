"use client";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "next-leaflet-cluster";
import L from "leaflet";

// Fix missing Icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export type iconType = "earthquake" | "landslide" | "flood" | "responder";

export type MarkerData = {
  id: number;
  lat: number;
  lng: number;
  iconType: iconType;
  title: string;
};

interface MapProps {
  markers: MarkerData[];
}

const getIcon = (iconType: iconType) =>
  L.icon({
    iconUrl: `/icons/${iconType}.svg`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });

export default function MapWithMarkers({ markers }: MapProps) {
  const center = [markers[0]?.lat || 0, markers[0]?.lng || 0];

  return (
    <MapContainer
      center={center as [number, number]}
      zoom={12}
      style={{ height: "90vh", width: "100%", zIndex: 0 }}
      zoomControl={false}
      zoomAnimation={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={getIcon(marker.iconType)}
          >
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
