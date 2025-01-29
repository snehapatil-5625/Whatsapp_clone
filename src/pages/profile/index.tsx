import { PencilIcon } from "@heroicons/react/20/solid";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center bg-white justify-between px-4 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
      </div>

      <div className="w-full flex justify-center p-6 text-center">
        <div className="w-40 h-40 text-sm text-center rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img
            src="/placeholder.svg"
            alt={"avtar"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-white px-6 py-3 flex flex-col gap-3">
        <p className="text-sm text-[#008069]">Your name</p>
        <div className="flex justify-between items-center w-full">
          <p className="text-md text-gray-600">Sneha</p>
          <span className="w-5 h-5 text-sm">
            <PencilIcon className="w-5 h-5 text-gray-400" />
          </span>
        </div>
      </div>
      <div className="text-sm px-6 py-3 mb-3 text-gray-500">
        This is not your username or PIN. This name will be visible to your
        WhatsApp contacts.
      </div>
      <div className="bg-white px-6 py-3 flex flex-col gap-3">
        <p className="text-sm text-[#008069]">About</p>
        <div className="flex justify-between items-center w-full">
          <PencilIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
