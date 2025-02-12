import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Items = {
  personalInfo: [
    {
      title: "Last seen and online",
      subtitle: "Nobody,Everyone",
    },
    {
      title: "Profile photo",
      subtitle: "My contacts",
    },
    {
      title: "About",
      subtitle: "My contacts",
    },
    {
      title: "Status",
      subtitle: "12 contacts excluded",
    },
  ],
  otherSettings: [
    {
      title: "Groups",
      subtitle: "My Contacts",
    },
    {
      title: "Blocked contacts",
      subtitle: "19",
    },
    {
      title: "App lock",
      subtitle: "Require password to unlock Whatsapp",
    },
  ],
};

export default function PrivacySettings() {
  return (
    <div className="flex flex-col py-2 h-screen scrollbar-hide ">
      <div className="flex-1 overflow-auto pb-20">
        <span className="text-md mb-4 px-6 text-[#008069]">
          Who can see my personal info
        </span>
        {Items.personalInfo.map((item) => (
          <>
            <div className="flex px-6 items-center w-full justify-between border-b border-gray-300 cursor-pointer ">
              <div className="flex flex-col py-3 ">
                <p className="text-md">{item.title}</p>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
              <div className="">
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            </div>
          </>
        ))}
        <div className="flex px-6 items-center justify-between w-full py-3">
          <div className="flex flex-col ">
            <span>Read receipts</span>
            <p className="text-sm text-gray-500">
              If turned off, you won't send or receive read receipts. Read
              receipts are always sent for group chats.
            </p>
          </div>
          <input type="checkbox"></input>
        </div>
        <div className="bg-gray-200 h-[10px] shadow-sm"></div>
        <div className="w-full flex flex-col px-6 py-4 gap-5">
          <span className=" text-sm text-[#008069]">Disappering messages</span>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-md">Default message timer</p>
              <span className="text-md text-gray-500">off</span>
            </div>
            <div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-[10px] shadow-sm"></div>
        <div className="mb-4">
          <div className="w-full flex flex-col px-6 py-4 gap-5">
            <span className=" text-sm text-[#008069]">Advanced</span>
            <div className="flex items-center justify-between w-full ">
              <div className="flex flex-col ">
                <span className="text-sm">Block unknown account messages</span>
                <p className="text-sm text-gray-500">
                  To protect your account and improve device performance,
                  WhatsApp will block messages from unknown accounts if they
                  exceed a certain volume.
                </p>
              </div>
              <input type="checkbox"></input>
            </div>
            <hr />
          </div>
          <div className="w-full flex flex-col px-6 gap-5">
            <div className="flex items-center justify-between w-full ">
              <div className="flex flex-col ">
                <span className="text-sm">Disable link previews</span>
                <p className="text-sm text-gray-500">
                  To help protect your IP address from being inferred by
                  third-party websites, previews for the links you share in
                  chats will no longer be generated.
                </p>
              </div>
              <input type="checkbox"></input>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[10px] shadow-sm"></div>
        <div className="py-2">
          {Items.otherSettings.map((item, index, array) => (
            <>
              <div
                key={index}
                className={`flex px-6 items-center w-full justify-between ${
                  index !== array.length - 1 ? "border-b border-gray-300" : ""
                }cursor-pointer `}
              >
                <div className="flex flex-col py-3 ">
                  <p className="text-md">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
                <div className="">
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-gray-200 h-[10px] shadow-sm"></div>
      </div>
    </div>
  );
}
