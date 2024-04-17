import ProfileForm from "@/components/common/Form";
import HeaderMail from "./HeaderMail";
import Line from "./Line";
import Navbar from "./Navbar";
import { PropsCardCommonType } from "@/components/common/Card";

const menuContents = [
  [
    { id: 1, label: "Archive", icon: "Archive" },
    { id: 2, label: "Move to junk", icon: "ArchiveX" },
    { id: 3, label: "Move to trash", icon: "Trash2", isLast: true },
    { id: 4, label: "Snooze", icon: "Clock" },
  ],
  [
    { id: 1, label: "Reply", icon: "Reply" },
    { id: 2, label: "Reply-All", icon: "ReplyAll" },
    { id: 3, label: "Forward", icon: "Forward", isLast: true },
    { id: 4, label: "Ellipsis-Vertical", icon: "EllipsisVertical" },
  ],
];

interface PropsType {
  selected: PropsCardCommonType | undefined;
}

function DescriptionMail(props: PropsType) {
  const { selected } = props;
  return (
    <>
      <div className="flex h-14 border-b px-4 justify-between">
        <Navbar menuContents={menuContents[0]} />
        <Navbar menuContents={menuContents[1]} />
      </div>
      <HeaderMail selected={selected} />
      <Line />
      <div className="flex-1 whitespace-pre-wrap p-4 text-sm h-[60%]">
        {selected?.content}
      </div>
      <Line />
      <div className="p-4">
        <ProfileForm />
      </div>
    </>
  );
}

export default DescriptionMail;
