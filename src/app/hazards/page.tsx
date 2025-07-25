import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import CustomButton from "../components/customButton";
import MapView from "../components/mapRender";
// import dynamic from "next/dynamic";

// Importing non-server side code import
// const MapView = dynamic(() => import("../components/mapRender"), {
//   loading: () => <p>A map is loading</p>,
//   ssr: false,
// });

export default function Hazards() {
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
        <MapView />
      </div>
    </main>
  );
}
