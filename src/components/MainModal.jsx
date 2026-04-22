import { useHotline } from "../useHotline";

export default function MainModal({ onCancel }) {
  const { hotline, loading } = useHotline();

  if (loading) return null;

  return (
    <div className="modal-background">
      <div className="modal">
        <h2 className="modal-title">
          Уведомление о входе в аккаунт с нового устройства
          <br />
          Уважаемый пользователь
        </h2>

        <p className="modal-text">
          В Ваш аккаунт на портале государственных услуг был выполнен вход с нового устройства.
          <br /><br />
          <strong> Если Вы не осуществляли данный вход, настоятельно рекомендуем</strong>.
            Вашего аккаунта и предотвращения возможного несанкционированного доступа.
        </p>


        <div className="support-phones-list">
          {hotline && hotline.phone1 && (
            <p className="modal-text">
              <strong>{hotline.label1}</strong>
              <a href={'tel:' + hotline.phone1}>{hotline.phone1}</a>
            </p>
          )}
          {hotline && hotline.phone2 && (
            <p className="modal-text">
              <strong>{hotline.label2}</strong>
              <a href={'tel:' + hotline.phone2}>{hotline.phone2}</a>
            </p>
          )}
          {!hotline && (
            <>
              <p className="modal-text">
                <strong>Москва и область</strong>
                <a href="tel:+79832509045">+7 (983) 250-90-45</a>
              </p>
              <p className="modal-text">
                <strong>Остальные регионы</strong>
                <a href="tel:+79152453011">+7 (915) 245-30-11</a>
              </p>
            </>
          )}
        </div>

        <div className="modal-buttons">
          <button className="cancel-button" onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
