"use client";

import { useMemo, useState } from "react";
import { pins, type Pin } from "../data/pins";
import Map from "react-map-gl/maplibre";
import { Marker, Popup } from "react-map-gl/maplibre";
import Sidebar from "@/components/Sidebar";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
};

function Pin({ size = 20 }) {
  return (
    <svg height={size} viewBox="0 0 24 24" style={{ cursor: "pointer" }}>
      <path d={ICON} style={pinStyle} />
    </svg>
  );
}

export default function LudwigshafenMap() {
  const [viewState, setViewState] = useState({
    longitude: 8.446,
    latitude: 49.477,
    zoom: 13,
  });
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);

  const pinMarker = useMemo(
    () =>
      pins.map((pin, index) => (
        <Marker
          style={{ zIndex: 20 }}
          key={`marker-${index}`}
          longitude={pin.longitude}
          latitude={pin.latitude}
          anchor="top"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedPin(pin);
          }}
        >
          <Pin />
        </Marker>
      )),
    [],
  );

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
        minZoom={13}
        maxZoom={16}
      >
        {pinMarker}
        {selectedPin && (
          <Popup
            longitude={selectedPin.longitude}
            latitude={selectedPin.latitude}
            onClose={() => setSelectedPin(null)}
            closeButton={true}
            closeOnClick={false}
          >
            <div>{selectedPin.label}</div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
