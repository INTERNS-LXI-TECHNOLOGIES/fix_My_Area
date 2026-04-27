"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "./leaflet-icon-fix";

type Props = {
  onSelect: (loc: { lat: number; lng: number }) => void;
};

export default function LocationPicker({ onSelect }: Props) {
  const [position, setPosition] = useState<[number, number]>([11.0168, 76.9558]);

  // 📍 Auto detect on load


  useEffect(() => {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      console.log("Accuracy (meters):", pos.coords.accuracy);
        console.log("Lat: " + lat+ " lng "+ lng);
      setPosition([lat, lng]);
      onSelect({ lat, lng });
    },
    (err) => {
      console.log("Location error:", err);
    },
    {
      enableHighAccuracy: true, // 🔥 IMPORTANT
      timeout: 10000,
      maximumAge: 0,
    }
  );
}, []);
  function MapClickHandler() {
    useMapEvents({
      click(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        setPosition([lat, lng]);
        onSelect({ lat, lng });
      },
    });

    return <Marker position={position} />;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="h-40 w-full rounded-xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />
    </MapContainer>
  );
}