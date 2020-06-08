export default function chunk(arr, size) {
  return arr.reduce((ar, it, i) => {
    const ix = Math.floor(i / size);
    const tempAr = [...ar];
    if (!tempAr[ix]) {
      tempAr[ix] = [];
    }
    tempAr[ix].push(it);
    return tempAr;
  }, []);
}
