import type { FC } from "react";
import { useTranslation } from "react-i18next";
import TimeAgo, { type TimeAgoProps } from "timeago-react";

type AppTimeAgoProps = TimeAgoProps & {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AppTimeAgo: FC<AppTimeAgoProps> = ({ ref, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <TimeAgo opts={{ minInterval: 60 }} locale={i18n.language} {...props} />
  );
};

export default AppTimeAgo;
