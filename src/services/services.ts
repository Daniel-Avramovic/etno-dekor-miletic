export const getData: any = async () => {
    let response:any;
   await fetch("data.json").then((res) => res.json()).then((data:any) => {
      response = data;
  });
  return response
};
