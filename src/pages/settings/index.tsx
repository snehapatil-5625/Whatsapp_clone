import {
  ArrowRightStartOnRectangleIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const channelData = [
  {
    name: "Account",
    icon: <UserCircleIcon />,
  },
  { name: "Privacy", icon: <LockClosedIcon /> },
  { name: "Chats", icon: <ChatBubbleBottomCenterIcon /> },
  {
    name: "Notifications",
    icon: <BellAlertIcon />,
  },
  {
    name: "keyboard shortcuts",
    icon: <CheckBadgeIcon />,
  },
  {
    name: "Help",
    icon: <QuestionMarkCircleIcon />,
  },
  {
    name: "Log out",
    icon: <ArrowRightStartOnRectangleIcon />,
  },
];
export default function Settings() {
  return (
    <div>
      <div className="flex items-center bg-white justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>
      <div className="bg-white px-3 py-2">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute text-gray-500 left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search settings"
            className="text-sm w-full pl-9 pr-4 py-2 bg-[#f0f2f5] rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="flex items-center bg-white px-4 py-2 gap-2">
        <div className="w-16 h-16 text-sm text-center rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
          <img
            src="/placeholder.svg"
            alt="avtar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-md capitalize">sneha</div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white h-screen overflow-auto py-2">
        <div>
          {channelData.map((chat, i) => (
            <div className="border-b px-3 py-1.5 hover:bg-[#f0f2f5]">
              <button
                key={i}
                className="flex bg-transparent items-center gap-6 w-full p-2 hover:border-transparent rounded-none transition-colors"
              >
                <div className="w-5 h-5 text-sm text-center rounded-full overflow-hidden flex-shrink-0">
                  <span>{chat.icon}</span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col text-left ">
                    <span className="font-medium text-md ">{chat.name}</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
