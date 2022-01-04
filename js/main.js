window.onclick = e =>
{
  console.log(e.target.className);
  switch(e.target.className)
  {
    case "navbar-toggler":
      document.querySelector(".navbar-menu").classList.toggle("active");
    break;
    case "toggler":
      document.querySelector(".navbar-menu").classList.toggle("active");
    break;
    case "bar":
      document.querySelector(".navbar-menu").classList.toggle("active");
    break;
  }
}