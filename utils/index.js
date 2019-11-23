import request from './request'
import config from './config'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  // const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1}`
}

let hourMinute = []
for (let i = 0; i < 24; i++) {
  let first = i < 10 ? `0${i}` : i
  for (let j = 0; j < 2; j++) {
    let second = j * 30 == 0 ? '00' : '30'
    let time = `${first}:${second}`
    hourMinute.push({
      name: time,
      id: time
    })
  }
}

function todayTime () {
  let list = []
  let date = new Date()
  let hours = date.getHours()
  for (let i = hours; i < 24; i++) {
    let first = i < 10 ? `0${i}` : i
    for (let j = 0; j < 2; j++) {
      let second = j * 30 == 0 ? '00' : '30'
      let time = `${first}:${second}`
      list.push({
        name: time,
        id: time
      })
    }
  }
  list.shift()
  return list
}

function creatTime () {
  let week = '日一二三四五六'
  let oneday = 24 * 60 * 60 * 1000
  let today = new Date().getTime()

  let timelist = []
  for (let i = 0; i < 7; i++) {
    let id = formatTime(new Date(today + i * oneday))
    let wee = week.charAt(new Date(today + i * oneday).getDay())
    let tmp = {
      id: id
    }
    if (i == 0) {
      tmp.name = id + '今天'
    } else if (i == 1) {
      tmp.name = id + '明天'
    } else {
      tmp.name = id + '星期' + wee
    }
    if (i == 0) {
      tmp.children = todayTime()
    } else {
      tmp.children = hourMinute
    }
    timelist.push(tmp)
  }
  return timelist
  // console.log(timelist)
  // console.log(formatTime(today))
  // console.log(week.charAt(new Date().getDay()))
}

export {
  formatNumber,
  config,
  formatTime,
  request,
  creatTime
}
