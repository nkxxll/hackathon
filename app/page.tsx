"use client";

import { useState } from "react";
import Map, { Popup } from "react-map-gl/maplibre";
import { Marker } from "react-map-gl/maplibre";
import Sidebar from "@/components/Sidebar";
import "maplibre-gl/dist/maplibre-gl.css";

export default function LudwigshafenMap() {
  const [viewState, setViewState] = useState({
    longitude: 8.446,
    latitude: 49.477,
    zoom: 13,
  });

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative w-screen h-screen max-h-screen max-w-screen overflow-hidden">
      <Sidebar />
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle={{
          version: 8,
          sources: {
            osm: {
              type: "raster",
              tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
              tileSize: 256,
              attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            },
          },
          layers: [
            {
              id: "osm-layer",
              type: "raster",
              source: "osm",
            },
          ],
        }}
        dragRotate={false}
        touchPitch={false}
        minZoom={12}
        maxZoom={16}
      >
        <Marker
          key={`marker-test`}
          latitude={49.479563}
          longitude={8.455378}
          anchor="top"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowPopup(true);
            }}
            className="cursor-pointer bg-red-500 w-4 h-4 rounded-full border-2 border-white"
          />
        </Marker>
        {showPopup && (
          <Popup
            longitude={8.455378}
            latitude={49.479563}
            anchor="top"
            closeButton={false}
          >
            <Event />
          </Popup>
        )}
      </Map>
    </div>
  );
}
