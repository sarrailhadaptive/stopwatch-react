import { useState } from "react";
import MainTimer from "./components/MainTimer/MainTimer.jsx";
import LapsSection from "./components/Laps/Laps.jsx";
import "./App.css";

// ------------------------------------- //

export default function IPhoneScreen() {
  return (
    <div>
      <MainTimer />
      <LapsSection />
    </div>
  );
}
