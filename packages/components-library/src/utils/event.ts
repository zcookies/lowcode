type PARAMS = Record<string, any>;

import { getCurrentInstance, ComponentInternalInstance, computed } from "vue";
export default function () {
  const { props } = getCurrentInstance() as ComponentInternalInstance;
  return computed(() => {
    const parmas = (props as PARAMS).props;
    let evt: PARAMS = {};
    if (parmas && parmas.event) {
      Object.keys(parmas.event).forEach(item => {
        evt[item] = eval(parmas.event[item]);
      });
    }
    return evt;
  });
}
