import { GoX } from "react-icons/go";

function Notification({ setShowNotification }) {
  return (
    <div className="notification">
      <div>
        <GoX onClick={() => setShowNotification(false)} className="exit" />
        <span>Journal succesful deleted</span>
      </div>
    </div>
  );
}

export default Notification;
