import { ChevronRightIcon } from "@heroicons/react/24/outline";

const chatsData = {
  themes1: [
    {
      name: "Theme",
      des: "System default",
    },
    {
      name: "Wallpaper",
    },
  ],
  themes2: [
    {
      name: "Media upload quality",
    },
    {
      name: "Media auto-download",
    },
  ],
  themes3: [
    {
      name: "Spell check",
      des: "Check spelling while typing",
    },
    {
      name: "Replace text with emoji",
      des: "Emoji will replace specific text as you type",
    },
    {
      name: "Enter is send",
      des: "Enter key will send your message",
    },
  ],
};

export default function ChatPreferences() {
  return (
    <div className="flex flex-col py-4">
      <span className="text-sm px-6 text-[#008069]">Display</span>
      <div className="py-2 px-6">
        {chatsData.themes1.map((items, index, array) => (
          <div
            className={`flex items-center w-full justify-between ${
              index !== array.length - 1 ? "border-b border-gray-200" : ""
            }  cursor-pointer `}
          >
            <div className="flex flex-col py-3 ">
              <p className="text-sm">{items.name}</p>
              <p className="text-sm text-gray-500">{items.des}</p>
            </div>
            <div className="">
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 h-[10px] shadow-sm"></div>
      <span className="text-sm px-6 text-[#008069] py-4">Chat Settings</span>
      <div className="py-2 px-6">
        {chatsData.themes2.map((items) => (
          <div
            className={`flex items-center w-full justify-between  border-b border-gray-200
             cursor-pointer `}
          >
            <div className="flex flex-col py-3 ">
              <p className="text-sm">{items.name}</p>
            </div>
            <div className="">
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="py-2 px-6 flex flex-col gap-6">
        {chatsData.themes3.map((items) => (
          <div className="w-full flex flex-col ">
            <div className="flex items-center justify-between w-full gap-2 ">
              <div className="flex flex-col ">
                <span className="text-sm">{items.name}</span>
                <p className="text-sm text-gray-500">{items.des}</p>
              </div>
              <input type="checkbox"></input>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
