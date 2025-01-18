import {
  EllipsisVerticalIcon,
  LockClosedIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const chats = [
  {
    name: "Self (You)",
    time: "Wednesday",
  },
  { name: "Sayali", time: "10:11 AM" },
  { name: "Vishu", time: "7:17 AM" },
  {
    name: "Khimaj Fashion",
    time: "Yesterday",
  },
];

export default function Status() {
  return (
    <div>
      <div className="flex bg-white items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Status</h1>
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

      <div className="flex flex-col gap-2 h-screen">
        <div className="p-3 bg-white flex items-center gap-2 ">
          <div className="w-10 h-10 text-sm text-center rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
            <img
              src="/placeholder.svg"
              alt={"profile pic"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center justify-between">
              <span className="text-sm">My status</span>
            </div>
            <p className="text-xs text-gray-500 truncate">
              Click to add status update
            </p>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto bg-white overflow-auto">
          <h4 className="text-sm uppercase tracking-wide text-[#017a56] p-4 border-b">
            Recent
          </h4>
          <div>
            {chats.map((chat, i) => (
              <div className=" border-b">
                <button
                  key={i}
                  className="flex bg-transparent items-center gap-3 w-full  p-2 hover:bg-[#f0f2f5] hover:border-transparent rounded-none transition-colors"
                >
                  <div className="w-10 h-10 text-sm text-center rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                    <img
                      src="/placeholder.svg"
                      alt={chat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{chat.name}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.time}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs flex items-center justify-center w-full py-2 ">
            <LockClosedIcon className="w-3 h-3 mr-1" />
            Your status updates are{" "}
            <span className="text-[#017a56]"> end-to-end encrypted</span>
          </p>
        </div>
      </div>
    </div>
  );
}
