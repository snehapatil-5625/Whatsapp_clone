import {
  ArrowPathIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ChatArea from "./components/chat-area";
import Sidebar from "./components/sidebar";

export default function MainLayout() {
  return (
    <div className="h-screen bg-[#00a884] p-4">
      <div className="flex h-full bg-[#f0f2f5]  overflow-hidden">
        {/* Navigation Sidebar */}
        <nav className="w-[65px] bg-[#f0f2f5] flex flex-col gap-2 items-center py-4 border-r">
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent">
            <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent">
            <ArrowPathIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-transparent hover:bg-gray-200 hover:border-transparent">
            <UserGroupIcon className="w-6 h-6 text-gray-600" />
          </button>
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
