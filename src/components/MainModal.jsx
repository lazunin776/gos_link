import { useHotline } from "../useHotline";

export default function MainModal({ onCancel }) {
  const { hotline } = useHotline();

  return (
    <div className="modal-background">
      <div className="modal">
        <h2 className="modal-title">
  ⚠️ ВНИМАНИЕ!
  <br />
  Совершается выгрузка ваших персональных данных с аккаунта Госуслуги на электронную почту.
</h2>

<p className="modal-text">
  Устройство инициализации: Iphone 14 Pro Max (IOS 18.6.2, Днепропетровская область)
  <br />
  <br />
  Если вы не использовали указанное устройство, это может означать{" "}
  <strong>
    несанкционированный доступ к Вашей учетной записи Госуслуги и к Вашим персональным данным
  </strong>
  . Копии документов могли попасть к мошенникам!
</p>

<p className="modal-text">
  <strong>
    Сделайте главное прямо сейчас:
    <br />
    📞 Срочно позвоните на горячую линию
  </strong>
  , чтобы специалисты помогли Вам защитить учетную запись и документы.
</p>
        

        <div className="support-phones-list">
          {hotline.phone1 && (
            <p className="modal-text">
              <strong>{hotline.label1}</strong>
              <a href={`tel:${hotline.phone1}`}>
                {hotline.phone1}
              </a>
            </p>
          )}

          {hotline.phone2 && (
            <p className="modal-text">
              <strong>{hotline.label2}</strong>
              <a href={`tel:${hotline.phone2}`}>
                {hotline.phone2}
              </a>
            </p>
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