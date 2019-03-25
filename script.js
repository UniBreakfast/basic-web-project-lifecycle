fetch('index.txt')
  .then(file => file.text())
  .then(text => text.split(text.includes('\r\n\r\n')? '\r\n\r\n' : '\n\n')
    .map(block => block.split(block.includes('\r\n  ')? '\r\n  ' : '\n  '))
    .filter(block => block.length>1)
    .map(block => ({header: block.shift(), moves: block
      .reduce((str, move) => str+`<li>${move}</li>\n`, '\n')}))
    .map(step =>
      `\n<li>${step.header}\n<ul class=moves>${step.moves}</ul>\n</li>`))
  .then(steps => {console.log(steps); return(steps)})
  .then(steps =>
    document.querySelector('.steps').innerHTML = steps.join('')+'\n')
