function decToArch(value) {
  const valueArr = value.split('.')
  return valueArr[0] + "'" + valueArr[1] + "''"
  //   16=>17
  // 8=> 12=>0
}
console.log(decToArch('16.8'))
