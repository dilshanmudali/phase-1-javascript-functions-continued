// Your code here
function saturdayFun(arg="roller-skate"){
    return `This Saturday, I want to ${arg}!`
}

saturdayFun()

const mondayWork = function(arg='go to the office'){
    return `This Monday, I will ${arg}.`
}

const wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
}