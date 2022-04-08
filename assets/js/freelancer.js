(function() {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

  function verificaEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  $(function() {
    $("#contatti").validate ({
    rules:{
    'nome':{
    required: true,
    minlength: 3
    },
    'email':{
    required: true,
    email: true
    },
    'messaggio':{
    required: true,
    minlength: 10
    }
    },
    messages:{
    'nome':{
    required: "Il campo nome è obbligatorio!",
    minlength: "Inserisci un nome di almeno 3 lettere!"
    },
    'email':{
    required: "L' email è obbligatoria!",
    email: "L'Email inserita non è valida!"
    },
    'messaggio':{
    required: "Il campo messaggio è obbligatorio!",
    minlength: "Insersci un messaggio di almeno 10 caratteri!"
    }
    },
    submitHandler : function(form) {
    form.submit();
    }
    });
    });
})(); // End of use strict
