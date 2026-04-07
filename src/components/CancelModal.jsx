import { useHotline } from "../useHotline";

export default function CancelModal({ onClose }) {
  const { hotline, loading } = useHotline();

  if (loading) return null;

  return (
    <div className="modal-background">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>

        <h2 className="modal-title">Данные уже выгружены</h2>

        <div className="modal-text">
          Ваши данные уже были выгружены. Если у вас возникли вопросы или проблемы,
          пожалуйста, свяжитесь с нашей службой поддержки:
        </div>

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
      </div>
    </div>
  );
}