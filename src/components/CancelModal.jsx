import { useHotline } from "../useHotline";

export default function CancelModal({ onClose }) {
  const { hotline } = useHotline();

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">Данные уже выгружены</h2>

        <div className="modal-text">Ваши данные уже были выгружены. Если у вас возникли вопросы или проблемы, пожалуйста, свяжитесь с нашей службой поддержки:</div>

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
      </div>
    </div>
  );
}