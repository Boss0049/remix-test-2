import {
  Inbox,
  StickyNote,
  Send,
  ArchiveX,
  Trash2,
  Archive,
  Users2,
  AlertCircle,
  MessagesSquare,
  ShoppingCart,
  Mail,
  Triangle,
  Cloud,
  Clock,
  Reply,
  ReplyAll,
  Forward,
  EllipsisVertical,
} from "lucide-react";

interface PropsType {
  name: string;
  className?: string;
  color?: string;
}

function Icon(props: PropsType) {
  const { name, className = "", color } = props;
  switch (name) {
    case "Inbox":
      return <Inbox color={color} className={className} />;
    case "StickyNote":
      return <StickyNote color={color} className={className} />;
    case "Send":
      return <Send color={color} className={className} />;
    case "ArchiveX":
      return <ArchiveX color={color} className={className} />;
    case "Trash2":
      return <Trash2 color={color} className={className} />;
    case "Archive":
      return <Archive color={color} className={className} />;
    case "Users2":
      return <Users2 color={color} className={className} />;
    case "AlertCircle":
      return <AlertCircle color={color} className={className} />;
    case "MessagesSquare":
      return <MessagesSquare color={color} className={className} />;
    case "ShoppingCart":
      return <ShoppingCart color={color} className={className} />;
    case "Mail":
      return <Mail color={color} className={className} />;
    case "Cloud":
      return <Cloud color={color} className={className} />;
    case "Triangle":
      return <Triangle color={color} className={className} />;
    case "Clock":
      return <Clock color={color} className={className} />;
    case "Reply":
      return <Reply color={color} className={className} />;
    case "ReplyAll":
      return <ReplyAll color={color} className={className} />;
    case "Forward":
      return <Forward color={color} className={className} />;
    case "EllipsisVertical":
      return <EllipsisVertical color={color} className={className} />;
    default:
      return <Inbox className={className} />;
  }
}

export default Icon;
