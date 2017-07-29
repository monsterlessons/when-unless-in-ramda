// const truncate = str => {
//   let truncatedStr
//
//   if (str.length > 10) {
//     truncatedStr = str.substring(0, 10)
//     truncatedStr = `${truncatedStr}...`
//   } else {
//     truncatedStr = str
//   }
//
//   return truncatedStr
// }

// R.when(
//   (data) => true,
//   (data) => 1
// )(data)
//
const truncate = R.unless(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.compose(
    R.join(''),
    R.append('...'),
    R.take(10)
  )
)

console.log(truncate('12345'))
console.log(truncate('1234567891011'))
