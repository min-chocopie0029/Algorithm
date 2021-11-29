function solution(sizes) {
  sizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w]);
  
  let w = sizes.map(v => v[0]);
  let h = sizes.map(v => v[1]);
  
  return Math.max.apply(null, w) * Math.max.apply(null, h);
}