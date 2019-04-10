function* generator() {
  let a = 0
  while( true ) {
      yield a++
  }
}

function formatDate(date) {

  let day = date.getDate()
  let monthNumber = '' + (date.getMonth() + 1)
  let year = date.getFullYear()
  let hour = date.getHours()
  let minute = date.getMinutes()

  return day + '/' + monthNumber.padStart(2, '0') + '/' + year + ' ' + hour + ':' + minute
}

module.exports = {
  generator: generator,
  formatDate: formatDate,
}