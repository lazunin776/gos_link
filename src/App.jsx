import { useState } from "react";
import Loader from "./components/Loader";
import RobotCheckModal from "./components/RobotCheckModal";
import MainModal from "./components/MainModal";
import CancelModal from "./components/CancelModal";
import "./App.css";

export default function App() {
  const [showRobot, setShowRobot] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const handleRobotConfirm = () => {
    setShowRobot(false);

    setTimeout(() => {
      setShowMain(true);
    }, 600);
  };

  return (
    <>
      <header className="logo">
        <h2>Госуслуги</h2>
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