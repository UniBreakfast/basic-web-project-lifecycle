fetch('index.txt')
  .then(file => file.text())
  .then(text => text.split('\r\n\r\n')
    .map(block => block.split('\r\n  '))
    .filter(block => block.length>1)
    .map(block => ({header: block.shift(), moves: block
      .reduce((str, move) => str+`<li>${move}</li>\n`, '\n')}))
    .map(step =>
      `\n<li>${step.header}\n<ul class=moves>${step.moves}</ul>\n</li>`))
  .then(steps =>
    document.querySelector('.steps').innerHTML = steps.join('')+'\n')
