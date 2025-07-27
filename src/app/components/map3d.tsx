"use client";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

export type MarkerData = {
  id: number;
  lat: number;
  lng: number;
  type: string;
  title?: string;
};

export default function MapLibre3D({ markers }: { markers: MarkerData[] }) {
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [122.56, 10.72],
      zoom: 16,
      pitch: 60,
      bearing: -20,
      // antialias: true,
    });

    mapRef.current = map;

    // Add markers
    markers.forEach((marker) => {
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.backgroundImage = `url(/icons/${marker.type}.svg)`; // e.g., responder.png
      el.style.width = "32px";
      el.style.height = "32px";
      el.style.backgroundSize = "contain";

      new maplibregl.Marker({ element: el })
        .setLngLat([marker.lng, marker.lat])
        .setPopup(new maplibregl.Popup().setText(marker.title || marker.type))
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [markers]);

  return <div id="map" className="w-full h-screen rounded-xl shadow-lg" />;
}
