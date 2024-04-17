import { useState } from "react";

import DescriptionMail from "@/components/mali/DescriptionMail";
import InboxMail from "@/components/mali/InboxMail";
import SideBar from "@/components/mali/SideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PropsCardCommonType } from "@/components/common/Card";

function Mail() {
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [selected, setSelected] = useState<PropsCardCommonType>();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen rounded-lg border"
    >
      <ResizablePanel
        defaultSize={20}
        minSize={15}
        maxSize={20}
        collapsedSize={4}
        collapsible={true}
        onResize={(size) => {
          if (size <= 4) {
            setIsSmallSize(true);
          } else {
            setIsSmallSize(false);
          }
        }}
      >
        <SideBar isSmallSize={isSmallSize} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={40}
        minSize={30}
        className="!overflow-[unset]"
      >
        <InboxMail setSelected={setSelected} selected={selected} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40} minSize={10}>
        <DescriptionMail selected={selected} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Mail;
