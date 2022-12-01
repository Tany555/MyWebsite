function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150; 

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
	// this is to repeat animation every time we view the content
     // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);