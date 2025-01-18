import {
  ArrowPathIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ChatArea from "./components/chat-area";
import Sidebar from "./components/sidebar";
import { useNavigate } from "react-router-dom";

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
    href: "channel",
  },
  {
    id: 4,
    icon: <UserGroupIcon className="w-6 h-6 text-gray-600" />,
    href: "community",
  },
];
export default function MainLayout() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-[#00a884] p-4">
      <div className="flex h-full bg-[#f0f2f5] overflow-hidden">
        <nav className="w-[65px] bg-[#f0f2f5] flex flex-col gap-2 items-center py-4 border-r">
          {nav.map((item) => (
            <button
              onClick={() => {
                navigate(item.href);
              }}
              key={item.id}
              className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent"
            >
              {item.icon}
            </button>
          ))}

          <button className="mt-auto p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent">
            <Cog6ToothIcon className="w-6 h-6 text-gray-600" />
          </button>
        </nav>

        <Sidebar />
        <ChatArea />
      </div>
    </div>
  );
}
