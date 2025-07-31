import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import CustomButton from "../components/customButton";
import ClientOnly from "../components/clientOnly";
import MapLibre3D from "../components/map3d";
import { MarkerData } from "../components/map3d";
import { iconType } from "../components/map3d";

export default function Hazards() {
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

  return (
    <main className="flex flex-col bg-white justify-between">
      <div className="flex w-full items-center text-black z-100 absolute p-5">
        {/* Search Bar Here */}
        <div className="flex w-1/2 items-center gap-2">
          <ListIcon size={32} />
          <div className="rounded-full w-1/2 bg-red-500 flex items-center p-2 gap-2">
            <input
              type="text"
              className="bg-red-50 w-full rounded-full px-5 py-1"
              placeholder="Search Location"
            />
            <MagnifyingGlassIcon size={32} weight="bold" color="#fff" />
          </div>
        </div>
        <div className="flex w-1/2 justify-end gap-5 px-10 py-2">
          {/* Flood dw */}
          <CustomButton text={"Flood"} status={"active"} />
          {/* Landslide */}
          <CustomButton text={"Landslide"} status={"default"} />
          {/* Earthquake */}
          <CustomButton text={"Earthquake"} status={"default"} />
        </div>
      </div>
      <div id="map">
        <ClientOnly>
          <MapLibre3D markers={markers} mapType="liberty" />
        </ClientOnly>
      </div>
    </main>
  );
}
