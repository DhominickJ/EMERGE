"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { DivIcon } from "leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";

// Adding dynamic imports for MarkerClusters to avoid SSR issues
import { useEffect, useState } from "react";

type IconType = "earthquake" | "flood" | "landslide" | "responder";

const pinIconMap: Record<IconType, DivIcon> = {
  earthquake: L.divIcon({
    html: `<img src="./icons/Earthquake.svg" alt="emergency" />`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  flood: L.divIcon({
    html: `<img src="./icons/Flood.svg" alt="emergency" />`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  landslide: L.divIcon({
    html: `<img src="./icons/Landslide.svg" alt="emergency" />`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  responder: L.divIcon({
    html: `<img src="./icons/Responder.svg" alt="emergency" />`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
};

interface MapViewProps {
  markerType?: IconType;
}

export default function MapView({ markerType = "earthquake" }: MapViewProps) {
  const icon = pinIconMap[markerType];

  const [MarkerClusterGroup, setMarkerClusterGroup] = useState(null);

  useEffect(() => {
    import("react-leaflet-markercluster").then((module) => {
      setMarkerClusterGroup(() => module.default);
    });
  }, []);

  if (!MarkerClusterGroup) return <div> Loading Map...</div>;

  return (
    <MapContainer
      center={[12.87, 121.77]}
      zoom={12}
      style={{ height: "90vh", width: "100%", zIndex: 0 }}
      zoomControl={false}
      zoomAnimation={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[12.87, 121.77]} icon={icon}>
        <Popup>A sample marker!</Popup>
      </Marker>
    </MapContainer>
  );
}
