export interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  imgSrc?: string;
  label?: string;
}

export const pins: Pin[] = [
  {
    id: "testtesttest",
    latitude: 49.479563,
    longitude: 8.455378,
    imgSrc: "/test.png",
    label: "testtesttest",
  },
  {
    id: "Cafe Papito",
    latitude: 49.47425,
    longitude: 8.44777,
    imgSrc: "",
    label: "Café Palpito",
  },
  {
    id: "barbarossa",
    latitude: 49.472,
    longitude: 8.45361,
    imgSrc: "barbarossa.jpg",
    label: "Barbarossa Bäckerei",
  },
];
