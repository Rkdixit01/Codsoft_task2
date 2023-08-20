// ==========js for skills section==================
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
   for(tablink of tablinks){
    tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

//================== js for sumbit form to google sheet==============

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxCH7q8R_soLYe--IfArThHrC5U0T2pZXgRw3eg0lywQnu5NRomn_ZPfbFBc5HvoSzvzw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{ msg.innerHTML = "Submit Succcessfully "
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    
    })
      .catch(error => console.error('Error!', error.message))

  })
