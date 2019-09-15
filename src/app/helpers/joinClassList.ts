export const joinClassList = (classList: Array<string>) => {
  return classList
    .join(" ")
    .trim()
    .replace(/ +(?= )/g, "");
};
