import moment from "moment";

export interface PropsCardCommonType {
  id?: number;
  name: string;
  email: string;
  date: string;
  subTitle: string;
  content: string;
  tags: Array<string>;
  isUnRead: boolean;
}

function CardCommon(props: PropsCardCommonType) {
  const { name, date, subTitle, content, tags, isUnRead } = props;
  return (
    <>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{name}</div>
            {isUnRead && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            )}
          </div>
          <div className="ml-auto text-xs text-foreground">
            {moment(date).startOf("hour").fromNow()}
          </div>
        </div>
        <div className="text-xs font-medium">{subTitle}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {content}
      </div>
      <div className="flex items-center gap-2">
        {tags?.map((tag, index) => {
          return (
            <div
              key={tag + index}
              className={`${
                tag === "work"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              } inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:opacity-80`}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardCommon;
