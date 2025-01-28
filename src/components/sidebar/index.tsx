import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-full max-w-[400px] flex flex-col border-r border-r-[2px]">
      <Outlet />
    </div>
  );
}
