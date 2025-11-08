export interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  imgSrc?: string;
  navi: string;
  label?: string;
}

export const pins: Pin[] = [
  {
    id: "Casper",
    latitude: 49.48344,
    longitude: 8.44619,
    navi: "https://maps.app.goo.gl/jjtgNd3i7yCmyLpYA",
    label: "Cafe Bar Caspar",
  },
  {
    id: "Duymac",
    latitude: 49.48222,
    longitude: 8.44782,
    navi: "https://maps.app.goo.gl/g9bkPgC63zkLbRZdA",
    label: "Duymac's Café",
  },
  {
    id: "Hanem",
    latitude: 49.48551,
    longitude: 8.42125,
    navi: "https://maps.app.goo.gl/xwjw2HmWMYXWU9c26",
    label: "Hanem Cafe Restaurant",
  },
  {
    id: "Alex",
    latitude: 49.47971,
    longitude: 8.44947,
    navi: "https://maps.app.goo.gl/vLToN77jNumLo2Zo8",
    label: "ALEX Ludwigshafen",
  },
  {
    id: "Café-Rad",
    latitude: 49.47338,
    longitude: 8.44886,
    navi: "https://maps.app.goo.gl/59TA22d34CKqXJzM7",
    label: "Café-Rad",
  },
  {
    id: "Görtz",
    latitude: 49.47224,
    longitude: 8.4487,
    imgSrc: "/goertz.jpg",
    navi: "https://maps.app.goo.gl/f8Et7UUDF7yvx2of9",
    label: "Bäcker Görtz",
  },
  {
    id: "Cafe Papito",
    latitude: 49.47425,
    longitude: 8.44777,
    navi: "https://maps.app.goo.gl/wFMh1Ze3WxE7q6v49",
    label: "Café Palpito",
  },
  {
    id: "barbarossa",
    latitude: 49.472,
    longitude: 8.45361,
    imgSrc: "barbarossa.jpg",
    navi: "https://maps.app.goo.gl/HjqPLHGLcPz7a9n9A",
    label: "Barbarossa Bäckerei",
  },
];
