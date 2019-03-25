fetch('index.txt')
  .then(file => file.text().split('\r\n\r\n'))
  .then(blocks => blocks
    .map(block => block.split('\r\n  '))
    .filter(block => block.length>1)
    .map(block => ({header: block.shift(), moves: block
      .reduce((str, move) => str+`<li>${move}</li>`, '')}))
    .map(step => `<li>${step.header}<ul class=moves>${step.moves}</ul></li>`))
  .then(steps => document.querySelector('.steps').innerHTML = steps.join(''))
