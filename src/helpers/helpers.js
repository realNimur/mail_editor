export const UpElementOrderInArray = (id, dataArray) => {
  const from = dataArray.findIndex((item) => item.id === id);
  const to = from + 1;
  if (to === dataArray.length) return dataArray;
  const array = [...dataArray];
  const target = array[from];
  for (let k = from; k !== to; k += 1) {
    array[k] = array[k + 1];
  }
  array[to] = target;
  return array;
};

export const DownElementOrderInArray = (id, dataArray) => {
  const from = dataArray.findIndex((item) => item.id === id);
  const to = from - 1;
  if (from === 0) return dataArray;
  const array = [...dataArray];
  const target = array[from];
  for (let k = from; k !== to; k += -1) {
    array[k] = array[k - 1];
  }
  array[to] = target;
  return array;
};
