export const sinaApi = "https://ruanyf.github.io/sina-news/rss.json";

export const getMultileTypes = (type) => {
  const url = `https://api.tianapi.com/${type}/index?key=84f91abca9ea39adad5bb11d05b65057&num=50`;
  return url;
};

export const contentTypes = [
  { value: "sina", text: "新浪新闻" },
  { value: "caijing", text: "财经新闻" },
  { value: "internet", text: "互联网资讯" },
  { value: "guonei", text: "国内新闻" },
  { value: "social", text: "社会新闻" },
  { value: "world", text: "国际新闻" },
];
