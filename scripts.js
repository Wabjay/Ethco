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




// AIRTABLE SNIPPET FOR FORM UPDATE
function waitlist(){
var thisForm = document.getElementById("waitlist_form");
const headers_ = {
  // API KEY IN Bearer
     'Authorization': 'Bearer keyAs1krG80fTzo0c',
     'Content-Type': 'application/json'
};
// When the form is submitted...
thisForm.addEventListener("submit", function(event) {
   event.preventDefault();
// POST the data
axios.post('https://api.airtable.com/v0/appJWS6wauaLZYypK/waitlist',
{
   "fields": {
    "Email": document.getElementById("waitlist_email").value,
    "Zip code": document.getElementById("zipCode").value
}
}, {headers: headers_}
)
.then((resp) => {
  console.log("success!")
})
.catch(function (error) {
  console.log(error);
});
});
}
// waitlist()


function contactForm(){
  var thisForm = document.getElementById("contact_form");
  const headers_ = {
       'Authorization': 'Bearer keyAs1krG80fTzo0c',
       'Content-Type': 'application/json'
  };
  // When the form is submitted...
  thisForm.addEventListener("submit", function(event) {
     event.preventDefault();
  // POST the data
  axios.post('https://api.airtable.com/v0/appJWS6wauaLZYypK/contactForm',
  {
     "fields": {
      "Title": document.getElementById("contact_title").value,
      "Message": document.getElementById("contact_message").value
  }
  }, {headers: headers_}
  )
  .then((resp) => {
    console.log("success!")
  })
  .catch(function (error) {
    console.log(error);
  });
  });
  }
// contactForm()