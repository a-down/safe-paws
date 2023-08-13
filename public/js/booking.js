


date = dayjs()

let start = date.add(1,'day').format(' MM/DD/YY')
let end = date.add(7, 'day').format(' MM/DD/YY')
let dateArr = []

for (i= start; i < end; i++) {
  dateArr.push(i)
}

console.log(dateArr)

