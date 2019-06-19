let defaultCity = '上海'
// 加try 是防止开隐身模式报错
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
