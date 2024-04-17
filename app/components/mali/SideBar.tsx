import CommandCommon from "../common/Command";
import sideBar from "@/mocks/mali/sideBar.json";

function SideBar({ isSmallSize }: { isSmallSize: boolean }) {
  return <CommandCommon optionGroupList={sideBar} isSmallSize={isSmallSize} />;
}

export default SideBar;
