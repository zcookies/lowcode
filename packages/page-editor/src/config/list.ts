export const library = () => {
  return [
    {
      name: "z-button",
      type: "component"
    },
    {
      type: "block",
      name: "z-block",
      tasks: [],
      props: {
        attr: {
          style: {
            "min-height": "auto"
          }
        },
        solt: "容器block"
      }
    },
    {
      type: "inline",
      name: "z-inline",
      tasks: []
    }
  ];
};
