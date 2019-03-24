fetch('index.txt')
  .then(file => file.text())
  .then(text => text.split('\r\n\r\n'))
  .then(blocks => blocks.map(block => block.split('\r\n  '))
    .filter(block => block.length>1)
    .map(lines => {
      const step = lines.reduce((step, line, move) => { move
          ? (step.moves? step.moves.push(line) : step.moves = [line])
          : step.header = line
        return step
      }, {})
      step.moves = step.moves.map(move => '<li>'+move+'</li>')
      return `<li>${step.header}
        <ul class=moves>${step.moves.join('')}</ul>
      </li>`
    } )
    .join('')
  )
  .then(steps => document.querySelector('.steps').innerHTML = steps)
