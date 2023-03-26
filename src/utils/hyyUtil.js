// 时间方法
export const dateOne = (e) => {
  let d = new Date(e)
  let Y = d.getFullYear()
  let M = d.getMonth() + 1
  let D = d.getDate()
  if (M < 10) {
    M = '0' + M
  }
  if (D < 10) {
    D = '0' + D
  }
  let dates = Y + '.' + M + '.' + D
  return dates
}
