import { PropsCardCommonType } from "@/components/common/Card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import moment from "moment";
import { useMemo } from "react";

interface PropsType {
  selected: PropsCardCommonType | undefined;
}

function HeaderMail(props: PropsType) {
  const { selected } = props;

  const characterProfile = useMemo(() => {
    const characters = selected?.name.split(" ");
    if (characters)
      return characters.map((string) => string[0].toLocaleUpperCase()).join("");
    return "AA";
  }, [selected?.name]);

  return (
    <div className="flex items-start p-4">
      <div className="flex items-start gap-4 text-sm">
        <Avatar>
          <AvatarImage alt={characterProfile} />
          <AvatarFallback>{characterProfile}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="font-semibold"> {selected?.name}</div>
          <div className="line-clamp-1 text-xs">{selected?.subTitle}</div>
          <div className="line-clamp-1 text-xs">
            <span className="font-medium">Reply-To:</span>
            {selected?.email}
          </div>
        </div>
      </div>
      <div className="ml-auto text-xs text-muted-foreground">
        {moment(selected?.date).format("LLL")}
      </div>
    </div>
  );
}

export default HeaderMail;
