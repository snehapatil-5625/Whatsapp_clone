const Items = {
  notifications1: [
    {
      title: "Message notifications",
      subtitle: "Show notifications for new messages",
    },
    {
      title: "Show previews",
    },
    {
      title: "Show reaction notifications",
      subtitle: "My contacts",
    },
  ],
  notifications2: [
    {
      title: "Background sync",
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

export default function NotificationSettings() {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-[#008069]">Messages</span>
    </div>
  );
}
