import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
export default function FormModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-600 opacity-60 z-1"></div>
      <div className="fixed top-20 inset-x-2  sm:inset-x-1/3 sm:top-28 md:inset-x-56 md:top-72 lg:inset-x-1/3 lg:top-28 rounded-xl bg-violet-900 ">
        <button className="fixed p-3 pt-2" onClick={onClose}>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          </Link>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
