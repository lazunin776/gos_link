export default function Loader() {
  return (
    <div className="shadow-block">
      <div className="content">

        <div className="loader-icon">
          🔐
        </div>

        <h3 className="title">Госуслуги сейчас откроются</h3>

        <p className="sub-title">
          Портал работает в прежнем режиме.<br />
          Подождите пару секунд
        </p>

        <div className="loader">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>

        <div className="progress-bar-wrap">
          <div className="progress-bar" />
        </div>

      </div>
    </div>
  );
}