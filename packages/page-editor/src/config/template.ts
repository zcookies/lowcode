export const config = {
  id: Math.random(),
  type: "view",
  modules: [
    {
      type: "block",
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
      props: {
        attr: {
          style: {
            "text-align": "center",
            padding: "50px 0"
          }
        }
      },
      modules: [
        {
          type: "component",
          name: "z-table",
          props: {
            dataSource: [
              {
                key: "1",
                name: "胡彦斌",
                age: 32,
                address: "西湖区湖底公园1号"
              },
              {
                key: "2",
                name: "胡彦祖",
                age: 42,
                address: "西湖区湖底公园1号"
              }
            ],
            columns: [
              {
                title: "姓名",
                dataIndex: "name",
                key: "name"
              },
              {
                title: "年龄",
                dataIndex: "age",
                key: "age"
              },
              {
                title: "住址",
                dataIndex: "address",
                key: "address"
              }
            ]
          }
        }
      ]
    },
    {
      type: "inline",
      props: {
        attr: { style: { color: "blue" } },
        slot: "我是容器inline,我可以包裹子组件"
      }
    }
  ]
};
