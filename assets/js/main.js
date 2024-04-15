(function () {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll("#navbar a");

  function navbarlinksActive() {
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navbar a").forEach((navbarlink) => {
    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**PROFILE BUTTON IN THE NAVBAR */
  // Get the profile dropdown element
var profileDropdown = document.querySelector('.profile-dropdown');

// Add click event listener to the profile dropdown
profileDropdown.addEventListener('click', function() {
  // Get the dropdown content element
  var dropdownContent = document.getElementById('dropdownContent');
  
  // Toggle the 'show' class to display or hide the dropdown content with animation
  dropdownContent.classList.toggle('show');
});


  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  /**
   * Gallery Slider
   */
  new Swiper(".gallery-slider", {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  /*-------------------------- GADGETS SECTION -------------------------*/
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
})();


(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();
var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

///// TYPE H2 SPAN IN SHOP /////
var typed = new Typed(".animate", {
  strings: ["Shopping!!", "Browsing!!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/////MODALS//////
///// I PHONE 14 PROMAX //////
// Function to calculate the total price of iphone14promax based on quantity and GB
function calculatePrice() {
  var quantity = document.getElementById("quantity").value;
  var gb = document.getElementById("gb").value;
  var pricePerGB = {
    "128": 38950,
    "256": 43950,
    "512": 48950
  };
  var totalPrice = quantity * pricePerGB[gb];
  document.getElementById("totalPrice").value = "₱" + totalPrice.toFixed(2);
}
// Function to open the iPhone 14 Pro Max modal
function openModal1() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "block";
}
// Function to close the iPhone 14 Pro Max modal
function closeModal1() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "none";
}
// Function to add iPhone 14 Pro Max to cart
function addToCart() {
  // Your logic to add the selected product to the cart
  alert("iPhone 14 Pro Max added to cart!");
}

////// LENOVO V14G2 ALC ////////////
// Function to calculate and update total price for Lenovo Laptop
function calculateTotalPriceLenovo() {
  var quantity = parseInt(document.getElementById("quantityLenovo").value);
  var ram = parseInt(document.getElementById("ramLenovo").value);
  var pricePerRam = {
    "8": 35000,
    "16": 45000,
    "32": 55000
  };
  var totalPrice = quantity * pricePerRam[ram];
  document.getElementById("totalPriceLenovo").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the Lenovo Laptop modal
function openModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}
// Function to close the Lenovo Laptop modal
function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}
// Function to add Lenovo laptop to cart
function addToCartLenovo() {
  alert("Lenovo V14G2 ALC Laptop added to cart!");
}

/////// RYZEN 5 5600G /////////
// Function to calculate the total price for Ryzen
function calculatePriceRyzen() {
  var quantity = document.getElementById("quantityRyzen").value;
  var pricePerUnit = 7799;
  var totalPrice = quantity * pricePerUnit;
  document.getElementById("totalPriceRyzen").value = "₱" + totalPrice.toFixed(2);
}
// Function to open the Ryzen 5 5600 modal
function openModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "block";
}
// Function to close the Ryzen Modal
function closeModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "none";
}
// Function to add Ryzen
function addToCartRyzen() {
  calculatePriceRyzen(); // Calculate the price before adding to cart
  alert("Ryzen 5 5600g added to cart!");
}

//////  APPLE MGN93PP  ////////
// Function to calculate and update total price for APPLE MGN93PP
function calculateTotalPriceApple() {
  var quantity = parseInt(document.getElementById("quantityApple").value);
  var ssd = parseInt(document.getElementById("ramApple").value);
  var pricePerSSD = {
    "256": 69990,
    "512": 81990
  };
  var totalPrice = quantity * pricePerSSD[ssd];
  document.getElementById("totalPriceApple").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the APPLE MGN93PP modal
function openModal4() {
  var modal = document.getElementById("myModal4");
  modal.style.display = "block";
}
// Function to close the APPLE MGN93PP modal
function closeModal4() {
  var modal = document.getElementById("myModal4");
  modal.style.display = "none";
}
// Function to add APPLE MGN93PP to cart
function addToCartApple() {
  alert("APPLE MGN93PP Laptop added to cart!");
}


//////  Trident Z RGB DDR4-3466  ////////
// Function to calculate and update total price for Trident Z RGB DDR4-3466
function calculateTotalPriceTrident() {
  var quantity = parseInt(document.getElementById("quantityTrident").value);
  var pricePerUnit = 3680;
  var totalPrice = quantity * pricePerUnit;
  document.getElementById("totalPriceTrident").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the Trident Z RGB DDR4-3466 modal
function openModal5() {
  var modal = document.getElementById("myModal5");
  modal.style.display = "block";
}
// Function to close the Trident Z RGB DDR4-3466 modal
function closeModal5() {
  var modal = document.getElementById("myModal5");
  modal.style.display = "none";
}
// Function to add Trident Z RGB DDR4-3466 to cart
function addToCartTrident() {
  alert("Trident Z RGB DDR4-3466 added to cart!");
}

//////  POCO F5 PRO 5G  ////////
// Function to calculate and update total price for POCO F5 Pro 5G
function calculateTotalPricePoco() {
  var quantity = parseInt(document.getElementById("quantityPoco").value);
  var price = parseInt(document.getElementById("storageRamPoco").value);
  var totalPrice = quantity * price;
  document.getElementById("totalPricePoco").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the POCO F5 Pro 5G modal
function openModal6() {
  var modal = document.getElementById("myModal6");
  modal.style.display = "block";
}
// Function to close the POCO F5 Pro 5G modal
function closeModal6() {
  var modal = document.getElementById("myModal6");
  modal.style.display = "none";
}
// Function to add POCO F5 Pro 5G to cart
function addToCartPoco() {
  alert("POCO F5 Pro 5G added to cart!");
}

//////  B450 MOTHERBOARD  ////////
// Function to calculate and update total price for MSI B450 MOTHERBOARD
function calculateTotalPriceMSI() {
  var quantity = parseInt(document.getElementById("quantityMSI").value);
  var price = 5999; // Price for MSI B450 MOTHERBOARD
  var totalPrice = quantity * price;
  document.getElementById("totalPriceMSI").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the MSI B450 MOTHERBOARD modal
function openModal7() {
  var modal = document.getElementById("myModal7");
  modal.style.display = "block";
}
// Function to close the MSI B450 MOTHERBOARD modal
function closeModal7() {
  var modal = document.getElementById("myModal7");
  modal.style.display = "none";
}
// Function to add MSI B450 MOTHERBOARD to cart
function addToCartMSI() {
  alert("MSI B450 MOTHERBOARD added to cart!");
}

//////  HONOR MAGIC 6 PRO ////////
// Function to calculate and update total price for HONOR MAGIC6 PRO
function calculateTotalPriceMagic6Pro() {
  var quantity = parseInt(document.getElementById("quantityMagic6Pro").value);
  var ramStoragePrice = 78691; // Price for HONOR MAGIC6 PRO (12GB + 512GB)
  var totalPrice = quantity * ramStoragePrice;
  document.getElementById("totalPriceMagic6Pro").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the HONOR MAGIC6 PRO modal
function openModal8() {
  var modal = document.getElementById("myModal8");
  modal.style.display = "block";
}
// Function to close the HONOR MAGIC6 PRO modal
function closeModal8() {
  var modal = document.getElementById("myModal8");
  modal.style.display = "none";
}
// Function to add HONOR MAGIC6 PRO to cart
function addToCartMagic6Pro() {
  alert("HONOR MAGIC6 PRO added to cart!");
}

////// MACBOOK PRO 14-INCH M1 PRO 10-CORE ///////
// Function to calculate and update total price for MACBOOK PRO 14-INCH M1 PRO 10-CORE
function calculateTotalPriceMacbookPro() {
  var quantity = parseInt(document.getElementById("quantityMacbookPro").value);
  var ramSsdPriceMap = {
    "16gb_512gb_14_core": 83650,
    "16gb_1tb_14_core": 90650,
    "16gb_2tb_14_core": 97650,
    "16gb_4tb_14_core": 100650,
    "16gb_512gb_16_core": 87150,
    "16gb_1tb_16_core": 94150,
    "16gb_2tb_16_core": 101150,
    "16gb_4tb_16_core": 111650
  };
  var ramSsdOption = document.getElementById("ramSsd").value;
  var gpuOption = document.getElementById("gpu").value;
  var totalPriceKey = ramSsdOption + "_" + gpuOption;
  var totalPrice = quantity * ramSsdPriceMap[totalPriceKey];
  document.getElementById("totalPriceMacbookPro").value = '₱' + totalPrice.toLocaleString();
}
// Function to open the MACBOOK PRO 14-INCH M1 PRO 10-CORE modal
function openModal9() {
  var modal = document.getElementById("myModal9");
  modal.style.display = "block";
}
// Function to close the MACBOOK PRO 14-INCH M1 PRO 10-CORE modal
function closeModal9() {
  var modal = document.getElementById("myModal9");
  modal.style.display = "none";
}
// Function to add MACBOOK PRO 14-INCH M1 PRO 10-CORE to cart
function addToCartMacbookPro() {
  alert("MACBOOK PRO 14-INCH M1 PRO 10-CORE added to cart!");
}




// Close the modals when clicking outside of them
window.onclick = function(event) {
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  var modal4 = document.getElementById("myModal4");
  var modal5 = document.getElementById("myModal5");
  var modal6 = document.getElementById("myModal6");
  var modal7 = document.getElementById("myModal7");
  var modal8 = document.getElementById("myModal8");
  var modal9 = document.getElementById("myModal9");
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
};





