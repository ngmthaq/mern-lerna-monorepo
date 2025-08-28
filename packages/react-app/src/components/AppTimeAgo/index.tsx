import type dayjs from "dayjs";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import TimeAgo, { type TimeAgoProps } from "timeago-react";

type AppTimeAgoProps = Omit<TimeAgoProps, "datetime" | "ref"> & {
  datetime: dayjs.Dayjs;
};

const AppTimeAgo: FC<AppTimeAgoProps> = ({ datetime, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <TimeAgo
      opts={{ minInterval: 60 }}
      locale={i18n.language}
      datetime={datetime.toISOString()}
      {...props}
    />
  );
};

export default AppTimeAgo;
