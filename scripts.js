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

// waitlist()
function waitlist(){
  const waitlist_pop = document.getElementById("waitlist_popup");
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
  waitlist_pop.classList.add("show")
  if(waitlist_pop.classList.contains("show")) // Check if the popup is shown
setTimeout(() => waitlist_pop.classList.remove("show"), 5500);

})
.catch(function (error) {
  console.log(error);
})
event.target.reset();
});
}


// contactForm()
function contactForm(){
  const contact_popup = document.getElementById("contact_popup");
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
    contact_popup.classList.add("show")
    if(contact_popup.classList.contains("show")) // Check if the popup is shown
  setTimeout(() => contact_popup.classList.remove("show"), 5500);
  })
  .catch(function (error) {
    console.log(error);
  });
  event.target.reset();
  });
  }

  // subscribers()
  function subscribe(){
    const subcribers_pop = document.getElementById("subcribers_popup");
    var thisForm = document.getElementById("subscribe_form");
    const headers_ = {
      // API KEY IN Bearer
         'Authorization': 'Bearer keyAs1krG80fTzo0c',
         'Content-Type': 'application/json'
    };
    // When the form is submitted...
    thisForm.addEventListener("submit", function(event) {
       event.preventDefault();
    // POST the data
    axios.post('https://api.airtable.com/v0/appJWS6wauaLZYypK/subscribers',
    {
       "fields": {
        "Subscribers": document.getElementById("subscribe_email").value,
    }
    }, {headers: headers_}
    )
    .then((resp) => {
      console.log("success!")
      subcribers_pop.classList.add("show")
      if(subcribers_pop.classList.contains("show")) // Check if the popup is shown
    setTimeout(() => subcribers_pop.classList.remove("show"), 5500);
    
    })
    .catch(function (error) {
      console.log(error);
    })
    event.target.reset();
    });
    }