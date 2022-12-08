export const getData: any = async () => {
  return await fetch("data.json").then((res) => res.json())
};
