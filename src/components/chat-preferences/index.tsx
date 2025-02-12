import { ChevronRightIcon } from "@heroicons/react/24/outline";

const chatsData = {
  themes: [
    {
      name: "Theme",
      des: "System default",
    },
    {
      name: "Wallpaper",
    },
  ],
};

export default function ChatPreferences() {
  return (
    <div className="flex flex-col py-4">
      <span className="text-sm px-6 text-[#008069]">Display</span>
      <div className="py-2 px-6">
        {chatsData.themes.map((items, index, array) => (
          <div
            className={`flex items-center w-full justify-between ${
              index !== array.length - 1 ? "border-b border-gray-300" : ""
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
    </div>
  );
}
