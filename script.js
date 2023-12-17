const secondHand = document.querySelector('.hand-sec')
const minuteHand = document.querySelector('.hand-min')
const hourHand = document.querySelector('.hand-hour')

const updateClock = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secDegree = seconds * 6
  const minDegree = minutes * 6
  const hourDegree = hours * 6
}

setInterval(() => {
  updateClock()
}, 1000)

updateClock()
