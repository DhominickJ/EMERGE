import ClientOnly from "../components/clientOnly";
import MapLibre3D from "../components/map3d";
import { MarkerData } from "../components/map3d";

export type iconType = "earthquake" | "landslide" | "flood" | "responder";

export default function Map3DPage() {
  let max = 4;

  const iconIndex: Record<number, iconType> = {
    1: "earthquake",
    2: "flood",
    3: "landslide",
    4: "responder",
  };

  const markers: MarkerData[] = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    lat: 10.757125443374584 + Math.random() * 0.1,
    lng: 122.47220080086756 + Math.random() * 0.1,
    type: iconIndex[Math.floor(Math.random() * max) + 1],
    title: `Marker ${i}`,
  }));

  console.log(markers[0]);
  return (
    <main className="w-full h-screen relative-">
      <ClientOnly>
        <MapLibre3D markers={markers} />
      </ClientOnly>
    </main>
  );
}
