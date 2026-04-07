import { useState } from "react";
import avitoImage from '../assets/image.png'

export default function RobotCheckModal({ onConfirm }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="modal-background" style={{ display: "flex" }}>
      <div className="modal">
        <div className="avito_div">
          <img className="avito_logo" src={avitoImage} alt="" />
        </div>
        <p className="modal-text">Подтвердите, что вы не робот</p>

        <label className="not-robot-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(true);
              onConfirm();
            }}
          />
          <span className="not-robot-box"></span>
          <span>Я не робот</span>
        </label>
      </div>
    </div>
  );
}