import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
export default function SecondModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="fixed top-20 inset-x-2  sm:inset-x-1/3 sm:top-28 md:inset-x-56 md:top-30 lg:inset-x-1/3 lg:top-28 rounded-xl bg-violet-900 ">
        <Link to={"/"}>
          <button className="fixed p-3 pt-2" onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          </button>
        </Link>

        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
