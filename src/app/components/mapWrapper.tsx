"use client";

import dynamic from "next/dynamic";
import type { MarkerData } from "./mapMarkers";

// Dynamic import with SSR off (only allowed in client components)
const MapWithMarkers = dynamic(() => import("./mapMarkers"), {
  ssr: false,
});

interface MapWrapperProps {
  markers: MarkerData[];
}

export default function MapWrapper({ markers }: MapWrapperProps) {
  return <MapWithMarkers markers={markers} />;
}
