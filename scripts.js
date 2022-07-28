// NAVBAR DROPDOWN
var grid = document.querySelector(".grid");
var display_toggle = document.querySelector(".display_toggle");
grid.addEventListener("click", function () {
  console.log(display_toggle.classList);
  display_toggle.classList.toggle("toggle");
});

// FAQ
var acc = document.getElementsByClassName("faq_title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log(panel.style.maxHeight);
    }
  });
}

//  SWITCHER
const shop = document.getElementById("shopper");
const store = document.getElementById("storeowners");
var pageSwitch = document.querySelectorAll(".label");

for (let i = 0; i < pageSwitch.length; i++) {
  pageSwitch[i].addEventListener("click", function () {
    if (pageSwitch[i].textContent === "For shoppers") {
      // console.log(pageSwitch[i].innerHTML)
      console.log("first");
      store.classList.add("display");
      shop.classList.remove("display");
    } else if (pageSwitch[i].textContent === "For storeowners") {
      console.log("second");
      store.classList.remove("display");
      shop.classList.add("display");
    }
  });
}

// Modal Box
const pop = document.querySelectorAll(".pop");
const popup = document.getElementById("popup");
for (let i = 0; i < pop.length; i++) {
  pop[i].addEventListener("click", function () {
    popup.style.display = "block";
  });
}

// Close Modal Bos
const close_popup = document.querySelector(".close_popup");
close_popup.addEventListener("click", function () {
  popup.style.display = "none";
});
