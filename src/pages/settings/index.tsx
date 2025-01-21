import { LockClosedIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const channelData = [
  {
    name: "Account",
    icon: <UserCircleIcon />,
  },
  { name: "Privacy", icon: <LockClosedIcon /> },
  { name: "Chats", follower: "5M followers" },
  {
    name: "Notifications",
    follower: "8M followers",
  },
  {
    name: "keyboard shortcuts",
  },
  {
    name: "Help",
  },
  {
    name: "Log out",
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
      <div className="p-2 bg-white">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute text-gray-500 left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search settings"
            className="text-sm w-full pl-9 pr-4 py-2 bg-[#f0f2f5] rounded-lg outline-none"
          />
        </div>
      </div>
      <div className="flex items-center bg-white px-4 py-4 gap-2">
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
            <div className="border-b px-1 hover:bg-[#f0f2f5]">
              <button
                key={i}
                className="flex bg-transparent items-center gap-3 w-full p-2 hover:border-transparent rounded-none transition-colors"
              >
                <div className="w-12 h-12 text-sm text-center rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    alt={chat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col text-left ">
                    <span className="font-medium text-md">{chat.name}</span>

                    <p className="text-sm font-md text-gray-500 truncate">
                      {chat.follower}
                    </p>
                  </div>
                  <button className="px-3 py-1.5 text-[#008069] text-sm rounded-3xl bg-transparent border-gray-200 hover:border-gray-300">
                    Follow
                  </button>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center py-4">
          <button className="px-4 py-1.5 text-sm text-white rounded-3xl bg-[#008069] hover:border-transparent">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
}
