	   const themeToggler = document.getElementById("chk")


  let theme = window.localStorage.getItem("qservTheme") || "light"
  if (theme === "darkweb") {
    document.body.classList.add("darkweb")
 
 
 
    themeToggler.setAttribute("checked", "true")
  }

  themeToggler?.addEventListener("click", () => {
    theme = window.localStorage.getItem("qservTheme") || "light"
    if (theme === "light") {
      window.localStorage.setItem("qservTheme", "darkweb")
    } else {
      window.localStorage.setItem("qservTheme", "light")
    }
    document.body.classList.toggle("darkweb")
  });

$("#exampleModalToggle").on("hidden.bs.modal", function () {
var lightBoxVideo = document.getElementById("VisaChipCardVideo");
lightBoxVideo.pause();
  // put your default event here
});


function onVideoClick(videoUrl) {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");

  lightBoxVideo.setAttribute('src',videoUrl);
    // put your default event here
  };
// 
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
