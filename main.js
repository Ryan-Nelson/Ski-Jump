function skiJump(mountain){
  let speed = mountain.length * 1.5
  let jumpLength = ((mountain.length * speed * 9) / 10).toFixed(2)
  
  if (jumpLength < 10){
    return `${jumpLength} metres: He's crap!`
  }
  else if (jumpLength > 10 && jumpLength < 25){
    return `${jumpLength} metres: He's ok!`
  }
  else if (jumpLength > 10 && jumpLength < 50){
    return `${jumpLength} metres: He's flying!`
  }
  else if (jumpLength > 50){
    return `${jumpLength} metres: Gold!!`
  };
}
