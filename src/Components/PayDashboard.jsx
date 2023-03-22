import { Outlet } from "react-router-dom";
export const PayDashboard = () => {
  return (
    <div className="form-inner rounded-lg shadow-[-1px_18px_17px_-8px_rgba(166,31,166,0.78)] bg-fuchsia-900/30	">
      <Outlet />
    </div>
  );
};
