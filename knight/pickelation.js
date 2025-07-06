let z = 1;
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  console.log(`Key code: ${event.code}`);

  
  if (event.key === 'z' && z == 1) {
    document.getElementById("soul").style.top = "355px";
    z = 2;
  }
  else if (event.key === 'z' && z == 2) {
    document.getElementById("soul").style.top = "315px";
    z = 1;
  }
});
