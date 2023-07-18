//  --------------------------------------------------------------------- 
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


//  --------------------------------------------------------------------- 
// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



//  --------------------------------------------------------------------- 
// Animated counter
function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
  
  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();
  
  //pass the current timestamp to the step function
  const step = (currentTime ) => {
  
  //if the start time is null, assign the current time to startTime
  if (!startTime) {
    startTime = currentTime ;
  }
  
  //calculate the value to be used in calculating the number to be displayed
  const progress = Math.min((currentTime - startTime)/ duration, 1);
  
  //calculate what to be displayed using the value gotten above
  obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
  
  //checking to make sure the counter does not exceed the last value (lastVal)
  if (progress < 1) {
    window.requestAnimationFrame(step);
  } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start animating
    window.requestAnimationFrame(step);
  }
  let text1 = document.getElementById('practise');
  let text2 = document.getElementById('sundays');
  let text3 = document.getElementById('coffee');
  let text4 = document.getElementById('gaming');
//   const load = () => {
//     animate(text1, 0, 100, 7000);
//     animate(text2, 0, 60, 7000);
//     animate(text3, 0, 40, 7000);
//     animate(text4, 0, 80, 7000);
//   }
  
  
//  --------------------------------------------------------------------- 
// Typewriter text in Banner
class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    animate(text1, 0, 300, 7000);
    animate(text2, 0, 100, 7000);
    animate(text3, 0, 260, 7000);
    animate(text4, 0, 150, 7000);
};


//  --------------------------------------------------------------------- 
// SweetAlert Function
function myFunctionBook() {

    swal({ 
     title: "The Contact form is not yet Activated!!",
      text: "Kindly mail to techwithapd@gmail.com!",
      icon: "warning",
      button: "Okay",
      dangerMode: false,
    })
}

// ----------------------------------------------------------------------------
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/2tiqYLqxl347rvj3/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
      });
}
