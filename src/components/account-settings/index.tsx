import {
  DocumentTextIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const data = [
  {
    name: "Security notifications",
    icon: <ShieldCheckIcon />,
  },
  {
    name: "Request account info",
    icon: <DocumentTextIcon />,
  },
  {
    name: "How to delete my account",
    icon: <InformationCircleIcon />,
  },
];
export default function AccountSettings() {
  return (
    <div className="flex flex-col gap-3 ">
      {data.map((item) => (
        <div className="flex items-center gap-4 hover:bg-gray-200 ">
          <span className="w-5 h-5">{item.icon}</span>
          <div className="text-md">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
