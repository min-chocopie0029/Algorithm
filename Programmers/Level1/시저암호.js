function solution(s, n) {
  return s.split("").map(v => {
    if (v == " ") return v;
    v = v.charCodeAt();
    if (v >= 65 && v <= 90 && v + n > 90 || v >= 97 && v <= 122 && v + n > 122)
      return String.fromCharCode(v + n - 26);
    return String.fromCharCode(v+ n);
  }).join("");
}