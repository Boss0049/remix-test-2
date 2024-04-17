import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CardCommon, { PropsCardCommonType } from "../common/Card";
import { Input } from "../ui/input";

import mailDescription from "@/mocks/mali/mailDescription.json";

interface PropsType {
  selected: PropsCardCommonType | undefined;
  setSelected: (value: PropsCardCommonType) => void;
}

function InboxMail(props: PropsType) {
  const { selected, setSelected } = props;

  const renderFilterMailType = (dataList: Array<PropsCardCommonType>) => {
    return (
      <div className="flex flex-col gap-2 px-4 !overflow-auto h-4/5">
        {dataList?.map((description) => {
          const { id, name, email, subTitle, date, content, tags, isUnRead } =
            description;
          return (
            <button
              key={id}
              className={`flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ${
                id === selected?.id ? "bg-muted" : ""
              }`}
              onClick={() => setSelected(description)}
            >
              <CardCommon
                name={name}
                email={email}
                date={date}
                subTitle={subTitle}
                content={content}
                tags={tags}
                isUnRead={isUnRead}
              />
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <Tabs defaultValue="all-mail" className="h-full">
      <div className="flex h-14 border-b px-4 items-center justify-between">
        <h1 className="text-xl font-bold">Inbox</h1>
        <TabsList>
          <TabsTrigger value="all-mail">All mail</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
        </TabsList>
      </div>
      <div className="p-4">
        <Input placeholder="Search" startIcon={Search} />
      </div>

      <TabsContent value="all-mail" className="h-full">
        {renderFilterMailType(mailDescription)}
      </TabsContent>
      <TabsContent value="unread" className="h-full">
        {renderFilterMailType(mailDescription.filter((mail) => mail.isUnRead))}
      </TabsContent>
    </Tabs>
  );
}

export default InboxMail;
