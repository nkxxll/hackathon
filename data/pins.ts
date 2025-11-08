export interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  icon: string;
  label?: string;
}

export const pins: Pin[] = [
  {
    id: "testtesttest",
    latitude: 49.479563,
    longitude: 8.455378,
    icon: "/icons/park.svg",
    label: "testtesttest",
  },
  {
    id: "hemshofpark",
    latitude: 49.482,
    longitude: 8.449,
    icon: "/icons/park.svg",
    label: "Hemshofpark",
  },
  {
    id: "restaurant-am-rhein",
    latitude: 49.475,
    longitude: 8.445,
    icon: "/icons/restaurant.svg",
    label: "Restaurant am Rhein",
  },
  {
    id: "wilhelm-hack-museum",
    latitude: 49.475,
    longitude: 8.444,
    icon: "/icons/museum.svg",
    label: "Wilhelm-Hack-Museum",
  },
];
