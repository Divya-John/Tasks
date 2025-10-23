enum Direction{
  Up="Up",Down="Down",Left="Left",Right="Right"
}

function direction(direction:Direction) {
  console.log(`You moved ${direction}!`);
}
direction(Direction.Up)