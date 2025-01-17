import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col bg-[#efeae2] relative">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-3 bg-[#f0f2f5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full text-sm bg-gray-300 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Self"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">Self (You)</h2>
            <p className="text-xs text-gray-500">Message yourself</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-transparent hover:border-transparent">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-transparent hover:border-transparent">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="text-center">
            <span className="bg-white px-3 py-1.5 rounded-lg text-sm">
              WEDNESDAY
            </span>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#d9fdd3] max-w-[60%] rounded-lg p-2 text-sm">
              https://snehapatil.vercel.app/
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FaceSmileIcon className="h-6 w-6 text-[#54656f]" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <PaperClipIcon className="h-6 w-6 text-[#54656f]" />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none px-2"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MicrophoneIcon className="h-6 w-6 text-[#54656f]" />
          </button>
        </div>
      </div>
    </div>
  );
}
