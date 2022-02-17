var level = document.getElementById("level")
var ctx = level.getContext('2d')
var ship = new Image();
ship.src = "ship.png"
var pattern = ctx.createPattern(ship, 'no-repeat')
// Black background
ctx.fillRect(0, 0, 500, 500)
// Randomized starscape
for (let i = 1; i < 14; i++) {
  absoluteY = i * 30
  for (let x = 10; x < 490; x += Math.floor(Math.random() * 20) + 7) {
  y = Math.floor(Math.random() * 8) + absoluteY
  ctx.clearRect(x, y, 1, 1)
  }
}

// Ship itself
ctx.fillStyle = 'rgb(255, 255, 255)'
ctx.fillRect(230,450,50,25)