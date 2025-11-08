"use client";

import { useState } from "react";
import Map, { Popup } from "react-map-gl/maplibre";
import { Marker } from "react-map-gl/maplibre";
import Sidebar from "@/components/Sidebar";
import { pins } from "@/data/pins";
import { Event } from "@/components/EventPopup";
import "maplibre-gl/dist/maplibre-gl.css";
import TopBar from "@/components/TopBarElements";
import RightSideBar from "@/components/RightSideBar";

export default function LudwigshafenMap() {
  const [viewState, setViewState] = useState({
    longitude: 8.446,
    latitude: 49.477,
    zoom: 13,
  });

  const [selectedPin, setSelectedPin] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="relative w-screen h-screen max-h-screen max-w-screen overflow-hidden">
      <Sidebar />
      <TopBar onCategorySelect={setSelectedCategory} />
      <RightSideBar
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
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
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            latitude={pin.latitude}
            longitude={pin.longitude}
            anchor="top"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPin(pin.id);
              }}
              className="text-4xl"
            >
              🥐
            </div>
          </Marker>
        ))}
        {selectedPin &&
          (() => {
            const pin = pins.find((p) => p.id === selectedPin)!;
            return (
              <Popup
                longitude={pin.longitude}
                latitude={pin.latitude}
                anchor="top"
                onClose={() => setSelectedPin(null)}
                closeButton={false}
              >
                <Event
                  open={true}
                  imageSource={pin.imgSrc || "brunch.png"}
                  onClose={() => setSelectedPin(null)}
                  navigation={pin.navi}
                  label={pin.label || ""}
                />
              </Popup>
            );
          })()}
      </Map>
    </div>
  );
}
