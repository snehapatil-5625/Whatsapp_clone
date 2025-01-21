import { PlusIcon } from "@heroicons/react/24/outline";

const channelData = [
  {
    name: "WhatsApp",
    follower: "214.7M followers",
  },
  { name: "Neerutyyyy", follower: "9M followers" },
  { name: "Cyber chathan", follower: "5M followers" },
  {
    name: "Royal Challengers Bengaluru",
    follower: "8M followers",
  },
];
export default function Channels() {
  return (
    <div>
      <div className="flex items-center bg-white justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Channels</h1>
        </div>
        <div>
          <button className="bg-transparent rounded-full hover:border-transparent p-0 ">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-2 bg-white text-center">
        <h4 className="text-md font-medium text-black">
          Stay Updated on your favorite topics
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          Find channels to follow below
        </p>
      </div>

      <div className="flex-1 overflow-y-auto bg-white h-screen overflow-auto py-2">
        <div>
          {channelData.map((chat, i) => (
            <div className="border-b px-1 hover:bg-[#f0f2f5]">
              <button
                key={i}
                className="flex bg-transparent items-center gap-3 w-full  p-2  hover:border-transparent rounded-none transition-colors"
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
