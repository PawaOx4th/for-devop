import dayjs from "dayjs";

export const handler = async () => {
  const now = await dayjs().format("YYYY-MM-DD HH:mm:ss");
  return `🍌 : ${now}`;
};
