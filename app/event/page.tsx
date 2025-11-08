"use client";
import { useState } from "react";
import { Event } from "@/components/EventPopup";

export default function EventShow() {
  const [show, setShow] = useState(true);
  return (
    <>
      {!show && <button onClick={() => setShow(true)}>show</button>}
      {show && (
        <Event
          open={show}
          onClose={() => setShow(false)}
          imageSource="/barbarossa.jpg"
          navigation="https://maps.app.goo.gl/VB52PA6cTTVnvZ8C6"
        />
      )}
    </>
  );
}
