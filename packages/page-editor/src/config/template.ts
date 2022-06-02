export const config = {
  id: Math.random(),
  type: "view",
  modules: [
    {
      type: "block",
      name: "z-block",
      modules: [
        {
          type: "component",
          name: "z-button",
          props: {
            attr: { style: { color: "red" } },
            event: {
              click: `()=>{alert("你好啊")}`
            },
            slot: "点击我！"
          }
        },
        {
          type: "component",
          name: "z-button"
        }
      ]
    },
    {
      type: "block",
      name: "z-block",
      props: {
        attr: {
          style: {
            "text-align": "center",
            padding: "50px 0"
          }
        },
        slot: "我是容器block,我可以包裹子组件"
      }
    },
    {
      type: "inline",
      name: "z-inline",
      props: {
        attr: { style: { color: "blue" } },
        slot: "我是容器inline,我可以包裹子组件"
      }
    }
  ]
};
