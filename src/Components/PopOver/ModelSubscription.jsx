import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
export default function SubscriptioModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className=" top-0 left-0 right-0 bottom-0 bg-slate-600 opacity-60"></div>
      <div className=" md:inset-y-16 md:inset-x-24 rounded-xl     jecia idesi -position-fixed atsispausdins ant login ModulForm          ">
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
