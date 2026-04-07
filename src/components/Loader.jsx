export default function Loader() {
  return (
    <div className="shadow-block">
      <div className="content">
        <h3 className="title">Госуслуги сейчас откроются</h3>
        <div className="sub-title">
          Портал работает в прежнем режиме.
          <br />
          Подождите пару секунд
        </div>

        <div className="loader">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}