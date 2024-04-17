import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Combobox from "./Combobox";
import Icon from "./Icon";

interface OptionType {
  id: number;
  name: string;
  count: number;
  icon: string;
}

interface PropsType {
  optionGroupList: Array<Array<OptionType>>;
  isSmallSize: boolean;
}

export default function CommandCommon(props: PropsType) {
  const { optionGroupList, isSmallSize } = props;
  return (
    <Command className="h-full overflow-auto" shouldFilter={true}>
      <div className="border-b p-2 h-14 flex items-center">
        <Combobox isSmallSize={isSmallSize} />
      </div>

      <CommandList className="h-full max-h-none">
        {optionGroupList?.length > 0 ? (
          optionGroupList?.map(
            (optionList: Array<OptionType>, index: number) => {
              return (
                <>
                  <CommandGroup key={index} className="px-2">
                    {optionList?.map((option) => {
                      const { id, name, icon, count } = option;
                      return (
                        <CommandItem
                          key={id}
                          value={name}
                          className="flex justify-between my-2 px-3"
                          onSelect={(value) => console.log("Selected", value)}
                        >
                          <div
                            className={`${
                              isSmallSize ? "w-full" : "w-4/5 flex items-center"
                            }`}
                          >
                            <Icon name={icon} className="mr-2" />
                            {isSmallSize || <span>{name}</span>}
                          </div>
                          {isSmallSize || <span>{count}</span>}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                  {index + 1 === optionGroupList?.length || (
                    <CommandSeparator className="m-2" />
                  )}
                </>
              );
            }
          )
        ) : (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
      </CommandList>
    </Command>
  );
}
