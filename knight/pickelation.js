let z = 1;
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  
  if (event.key === 'ArrowDown' || event.key === 's' && z == 1) {
    document.getElementById("soul").style.top = "357px";
    z = 2;
  }
  else if (event.key === 'ArrowUp' || event.key === 'w' && z == 2) {
    document.getElementById("soul").style.top = "312px";
    z = 1;
  }
});
