"use client";
import { useState } from "react";
import { Event } from "@/components/EventPopup";
import Search from "@/components/Search";

export default function EventShow() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");

  return (
    <>
      <Search value={value} setValue={setValue} />
      {!show && <button onClick={() => setShow(true)}>show</button>}
      {show && (
        <Event
          open={show}
          onClose={() => setShow(false)}
          label={"some label"}
          imageSource="/barbarossa.jpg"
          navigation="https://maps.app.goo.gl/VB52PA6cTTVnvZ8C6"
        />
      )}
    </>
  );
}
