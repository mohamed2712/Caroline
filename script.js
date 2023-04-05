
let  products={

    0:{

        prodName:"Beauty Box",
        prodDesc:"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of products is about quality, our product just do their job, no compromises. You can subscribe and get our beauty box every month or just buy it once.",
        prodImg:"BeautyBox.jpg",
        prodPrice:120,
        prodLastPrice:0,

    },
    1:{

        prodName:"Body Milk",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"BodyMilk.jpg",
        prodPrice:16,
        prodLastPrice:22,

    },
    2:{

        prodName:"Bright Formula",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"BrightFormula.jpg",
        prodPrice:10,
        prodLastPrice:0,

    },
    3:{

        prodName:"Eye Cream",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"EyeCream.jpg",
        prodPrice:54,
        prodLastPrice:0,

    },
    4:{

        prodName:"Facial BalancingGel",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"FacialBalancingGel.jpg",
        prodPrice:32,
        prodLastPrice:0,

    },
    5:{

        prodName:"Facial Cleanser",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"FacialCleanser.jpg",
        prodPrice:19,
        prodLastPrice:25,

    },
    6:{

        prodName:"Light Wonder",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"LightWonder.jpg",
        prodPrice:16,
        prodLastPrice:0,

    },
    7:{

        prodName:"Natura lGel",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"NaturalGel.jpg",
        prodPrice:12,
        prodLastPrice:0,

    },
    8:{

        prodName:"Oil Water",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"OilWater.jpg",
        prodPrice:120,
        prodLastPrice:0,

    },
    9:{

        prodName:"Physical GiftCard",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"PhysicalGiftCard.jpg",
        prodPrice:100,
        prodLastPrice:0,

    },
    10:{

        prodName:"Super Glow",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"SuperGlow.jpg",
        prodPrice:21,
        prodLastPrice:28,

    }



}




window.onload=()=>{


    const heroBackgroundImages=document.querySelectorAll("#hero .background img");
    const services = document.querySelectorAll(".service");
    const serviceDesc = document.querySelector(".service-desc");
    const testimonials = document.querySelectorAll(".testimonial");
    const opinion = document.querySelector(".opinion");
    const faqs = document.querySelectorAll(".faq");
    const countDiv  = document.querySelector("header .cart .count");
    const body = document.querySelector("body");
    const preLoader = document.querySelector("body .pre-loader");


    getCartCount();
    expandNav();
    changeHeroBackground();
    clickService();
    clickTestimonial();
    clickFaq();
    SwiperJs();
    animateSpanInFooter();
    removePreLoader();
    controllBookingShow();
    SendAppointment();
    loadSomeProductts();
    addToCard();






    function expandNav(){
        const nav = document.querySelector("nav");
    const navList = document.querySelector(".nav-list");
    const expandNav = document.querySelector(".expand-nav");
    expandNav.onclick=()=>{

        navList.classList.toggle("active");
        expandNav.classList.toggle("active");
        nav.classList.toggle("active");
        navList.classList.toggle("shadow");


    }

    }

    function SwiperJs(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
              },
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
      });
    }

    function changeHeroBackground(){
           let i = 0;
        setInterval(() => {
        heroBackgroundImages[i].classList.remove("active");
        i=(i+1)%heroBackgroundImages.length;
        heroBackgroundImages[i].classList.add("active");
        }, 3000);



    }


    function clickService(){

        let current=0;

        services.forEach((service,index)=>{
            service.onclick=()=>{

                services[current].classList.remove("active");

                service.classList.add("active");
                current = index;

                serviceDesc.textContent=service.getAttribute("data-desc");


            }
        })


    }


    function clickTestimonial(){

        let current=0;

        testimonials.forEach((testimonial,index)=>{
            testimonial.onclick=()=>{

                testimonials[current].classList.remove("active");

                testimonial.classList.add("active");
                current = index;

                opinion.textContent=testimonial.getAttribute("data-opinion");


            }
        })


    }

    function clickFaq(){


        faqs.forEach((faq,indexMain)=>{

            faq.onclick=()=>{

                faqs.forEach((faq,index)=>{

                    if(index != indexMain){
                     faq.classList.remove("active")

                    }



                })

                faq.classList.toggle("active");

            }


        })


    }


    function animateSpanInFooter(){
        const SpanInFooter = document.querySelector("footer .animated-text span");

        const words=["see","feel","enjoy"];
        let i = 0;

        setInterval(() => {

            SpanInFooter.classList.remove("hide");
            SpanInFooter.classList.remove(words[i]);
            i = (i+1)%words.length;
            setTimeout(() => {
                SpanInFooter.classList.add("hide");

            }, 1000);

            SpanInFooter.classList.add(words[i]);




        }, 2000);


    }


    function removePreLoader(){


        body.removeChild(preLoader);


    }




    function controllBookingShow(){


      const btnsBooking=  document.querySelectorAll(".btn-booking");
      const closesBooking = document.querySelectorAll(".close-booking");


      btnsBooking.forEach((btnBooking)=>{
        btnBooking.onclick=()=>{

            body.classList.add("show-booking");

          }

      })


      closesBooking.forEach((closeBooking)=>{
         closeBooking.onclick=()=>{

        body.classList.remove("show-booking");


      }

      })






    }




    function SendAppointment(){

        let day="";
        let hour = "";


        const daysLis = document.querySelectorAll(".booking .days ul li");
        const hoursLis = document.querySelectorAll(".booking .hours ul li");
        const dayBtn = document.querySelector(".booking .days button");
        const hourBtn = document.querySelector(".booking .hours button");

        daysLis.forEach(dayLi => {

            dayLi.onclick=()=>{

                if(dayLi.textContent!="Wednesday"||dayLi.textContent!="Friday"){
                    day = dayLi.textContent;
                    dayBtn.textContent=day;

                }


            }


        });

        hoursLis.forEach(hourLi => {

            hourLi.onclick=()=>{

                if(hourLi.textContent!="12:00 PM"||hourLi.textContent!="1:00 PM"){
                    hour = hourLi.textContent;
                    hourBtn.textContent=hour;

                }


            }


        });



        const btnBook = document.querySelector("body .booking .book");

        btnBook.onclick=()=>{
            const name = document.querySelector("body .booking #name");
            const email = document.querySelector("body .booking #email");
            const phone = document.querySelector("body .booking #phone");
            const problem = document.querySelector("body .booking .problem");




            if(name.value.trim()=="" || email.value.trim()=="" || phone.value.trim()==""||day.trim()==""||hour.trim()==""){


                problem.textContent="*All Fields are required !";




            }else{


                if(ValidateEmail(email.value)){


                    if(phone.value.length>10){

                        btnBook.innerHTML = `Booking••• <span class="spinner-border booking-spinner spinner-border-sm" role="status" aria-hidden="true"></span>`

                        btnBook.style.pointerEvents="none";
                        setTimeout(() => {

                            btnBook.innerHTML = `Booked successfully <i class="fa-solid fa-check text-success"></i>`



                        }, 2000);


                        setTimeout(() => {

                            body.classList.remove("show-booking")
                            name.value="";
                            email.value="";
                            phone.value="";
                            btnBook.innerHTML = "Book"
                            day="";
                            hour="";
                            dayBtn.textContent="Day";
                            hourBtn.textContent="Hour";

                            btnBook.style.pointerEvents="auto";

                        }, 3500);

                        problem.textContent="";

                    }else{
                        problem.textContent="*Not a valid phone !"

                    }



                }else{

                    problem.textContent="*Not a valid email !"

                }


            }



        }







    }



    function ValidateEmail(inputText){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputText.match(mailformat))
    {
        return true;
    }else
    {

            return false;
    }
        }


    function loadSomeProductts(){

            const productsDiv = document.querySelector("#shop .products");

            for (let i = 1; i <6; i++) {


              let product =   products[i];



              if(product.prodLastPrice!=0){

              let productDiv = `

              <div class="product sale">

                    <img src="assets/images/products/${product.prodImg}" alt="">
                    <h4 class="prod-name" my-3>${product.prodName}</h4>

                    <div class="prices text-center d-flex flex-row gap-2 justify-content-center align-items-center">
                      <del class="old-price fs-6">$${product.prodLastPrice}</del>
                      <p class="new-price fw-bold fs-6">$${product.prodPrice}</p>


                    </div>


                    <div data-id="${i}" class="btn-add-product bg-black text-white px-4 py-2 mt-2 mx-4">Add To cart</div>

                </div>
                `
                productsDiv.insertAdjacentHTML("beforeend",productDiv)

            }else{

                let productDiv = `

                <div class="product">

                      <img src="assets/images/products/${product.prodImg}" alt="">
                      <h4 class="prod-name" my-3>${product.prodName}</h4>

                      <div class="prices text-center d-flex flex-row gap-2 justify-content-center align-items-center">
                        <del class="old-price d-none fs-6">$${product.prodLastPrice}</del>
                        <p class="new-price fw-bold fs-6">$${product.prodPrice}</p>


                      </div>


                      <div data-id="${i}" class="btn-add-product bg-black text-white px-4 py-2 mt-2 mx-4">Add To cart</div>

                  </div>

                `

                productsDiv.insertAdjacentHTML("beforeend",productDiv)


              }






            }






        }


        function addToCard(){

            const btnsAddProduct = document.querySelectorAll(".products .product .btn-add-product");

            btnsAddProduct.forEach(btnAddProduct => {

              let prodID=  btnAddProduct.getAttribute("data-id");

                btnAddProduct.onclick=()=>{


                    btnAddProduct.innerHTML=`Adding...<span class="spinner-border booking-spinner spinner-border-sm" role="status" aria-hidden="true"></span>`;
                    btnAddProduct.style.pointerEvents="none";


                    setTimeout(() => {
                        if(window.localStorage.getItem(`${prodID}`)){

                            let newCount = parseInt(window.localStorage.getItem(`${prodID}`)) + 1;
                            window.localStorage.setItem(`${prodID}`,newCount);



                        }else{
                            window.localStorage.setItem(`${prodID}`,1);


                        }


                        btnAddProduct.innerHTML = `Added <i class="fa-solid fa-check text-success"></i>`;
                        countDiv.innerHTML= parseInt(countDiv.innerHTML) + 1;
                        setTimeout(() => {
                            btnAddProduct.style.pointerEvents = "auto";
                            btnAddProduct.innerHTML = `Add To Cart`;

                        }, 1000);


                    }, 1500);



                }



            });




        }

        function getCartCount(){

            let count = 0;



            for (let i = 0; i < 11; i++) {

            if(localStorage.getItem(i)){

                count = count + parseInt(localStorage.getItem(i));


            }


            }

            countDiv.innerHTML = `${count}`;





        }

}



