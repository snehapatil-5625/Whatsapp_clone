import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
const chats = [
  {
    name: "Self (You)",
    message: "https://snehapatil.vercel.app/",
    time: "Wednesday",
  },
  { name: "Sayali", message: "br", time: "10:11 AM" },
  { name: "Vishu", message: "Ha ha", time: "7:17 AM" },
  {
    name: "Khimaj Fashion",
    message: "Khimaj fashion: ⭐ Khimaj Fashion⭐ Jaipuri...",
    time: "Yesterday",
  },
];

export default function Chats() {
  return (
    <div>
      <div className="flex items-center bg-white justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Chats</h1>
        </div>
        <div>
          <button className="bg-transparent rounded-full hover:border-transparent p-0 mr-4">
            <PlusIcon className="h-5 w-5" />
          </button>
          <button className="bg-transparent rounded-full hover:border-transparent p-0">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-2 bg-white">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2 bg-[#f0f2f5] rounded-lg outline-none"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 p-2 bg-white border-b">
        <button className="px-3 py-1 rounded-full bg-[#e7ffdb] text-sm font-medium hover:border-transparent">
          All
        </button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100 text-sm hover:border-transparent">
          Unread
        </button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100 text-sm hover:border-transparent">
          Favorites
        </button>
        <button className="px-3 py-1 rounded-full hover:bg-gray-100 text-sm hover:border-transparent">
          Groups
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto bg-white h-screen overflow-auto">
        <div>
          {chats.map((chat, i) => (
            <div className=" border-b">
              <button
                key={i}
                className="flex bg-transparent items-center gap-3 w-full  p-2 hover:bg-[#f0f2f5] hover:border-transparent rounded-none transition-colors"
              >
                <div className="w-12 h-12 text-sm text-center rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src="/placeholder.svg"
                    alt={chat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.message}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
