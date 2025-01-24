import {
  ArrowPathIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ChatArea from "./components/chat-area";
import Sidebar from "./components/sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const nav = [
  {
    id: 1,
    icon: <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-600" />,
    href: "/chats",
  },
  {
    id: 2,
    icon: <ArrowPathIcon className="w-6 h-6 text-gray-600" />,
    href: "/status",
  },
  {
    id: 3,
    icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-600" />,
    href: "/channel",
  },
  {
    id: 4,
    icon: <UserGroupIcon className="w-6 h-6 text-gray-600" />,
    href: "/community",
  },
];
export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/chats", { replace: true });
  }, [navigate]);

  return (
    <div className="h-screen bg-[#00a884] p-4">
      <div className="flex h-full bg-[#f0f2f5] overflow-hidden">
        <nav className="w-[65px] bg-[#f0f2f5] flex flex-col border-r">
          <div className="flex-1 flex flex-col gap-2 items-center py-4">
            {nav.map((item) => (
              <button
                onClick={() => {
                  navigate(item.href);
                }}
                key={item.id}
                className={`p-1.5 rounded-full hover:border-transparent ${
                  location.pathname === item.href
                    ? "bg-gray-300"
                    : "bg-transparent"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-1 items-center py-2">
            <button
              onClick={() => {
                navigate("/settings");
              }}
              className="p-2 rounded-full bg-transparent hover:border-transparent"
            >
              <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="p-2 rounded-full bg-transparent hover:border-transparent"
            >
              <UserCircleIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </nav>

        <Sidebar />
        <ChatArea />
      </div>
    </div>
  );
}
