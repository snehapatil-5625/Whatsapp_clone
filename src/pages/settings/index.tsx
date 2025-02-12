import {
  ArrowRightStartOnRectangleIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import AccountSettings from "../../components/account-settings";
import PrivacySettings from "../../components/privacy-settings";
import ChatPreferences from "../../components/chat-preferences";
import NotificationSettings from "../../components/notification-settings";
import ShortcutKeys from "../../components/shortcut-keys";
import LogoutOptions from "../../components/logout-options";
import HelpSupport from "../../components/help-support";
import { useState } from "react";

interface ChannelItem {
  name: string;
  icon: JSX.Element;
  component: React.ComponentType;
}
const channelData = [
  { name: "Account", icon: <UserCircleIcon />, component: AccountSettings },
  { name: "Privacy", icon: <LockClosedIcon />, component: PrivacySettings },
  {
    name: "Chats",
    icon: <ChatBubbleBottomCenterIcon />,
    component: ChatPreferences,
  },
  {
    name: "Notifications",
    icon: <BellAlertIcon />,
    component: NotificationSettings,
  },
  {
    name: "Keyboard Shortcuts",
    icon: <CheckBadgeIcon />,
    component: ShortcutKeys,
  },
  { name: "Help", icon: <QuestionMarkCircleIcon />, component: HelpSupport },
  {
    name: "Log out",
    icon: <ArrowRightStartOnRectangleIcon />,
    component: LogoutOptions,
  },
];

export default function Settings() {
  const [selected, setSelected] = useState<ChannelItem | null>(null);
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center bg-white justify-between px-4 py-3">
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>
      <div className="bg-white px-3 py-2">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute text-gray-500 left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            type="search"
            placeholder="Search settings"
            className="text-sm w-full pl-9 pr-4 py-2 bg-[#f0f2f5] rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="flex items-center bg-white px-4 py-2 gap-2">
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-md capitalize">Sneha</div>
      </div>

      <div className="overflow-y-auto bg-white h-screen py-2">
        {channelData.map((item, i) => (
          <div key={i} className="border-b px-3 py-1.5 hover:bg-[#f0f2f5]">
            <button
              onClick={() => setSelected(item)}
              className="flex items-center gap-6 w-full p-2 bg-transparent hover:border-transparent rounded-none transition-colors"
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className="font-medium text-md">{item.name}</span>
            </button>
          </div>
        ))}
      </div>

      <div
        className={`absolute right-0 top-0 h-full w-[400px]  transition-transform duration-300 ${
          selected ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selected && (
          <div className="bg-white absolute right-0 top-0 w-[400px] border-l border-gray-200 h-full">
            <button
              className="absolute top-5 left-3 p-0 bg-transparent hover:border-transparent text-gray-600"
              onClick={() => setSelected(null)}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <h2 className="ml-12 mt-[20px] text-md font-semibold mb-4">
              {selected.name}
            </h2>
            <selected.component />
          </div>
        )}
      </div>
    </div>
  );
}
