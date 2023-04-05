
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


    const countDiv  = document.querySelector("header .cart .count");
    const body = document.querySelector("body");
    const preLoader = document.querySelector("body .pre-loader");


    getCartCount();
    animateSpanInFooter();
    loadProducts();
    expandNav();
    SendAppointment();
    controllBookingShow();
    removePreLoader();
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

                        btnBook.style.pointerEvents="none"
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

                            btnBook.style.pointerEvents="auto"

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


      function removePreLoader(){


        body.removeChild(preLoader);


    }



    function loadProducts(){


        const productsDiv = document.querySelector("main .products");




        for(let i = 0;i<10; i++) {



          let product =   products[i];



          if(product.prodLastPrice!=0){



          let productDiv = `

          <div class="product sale text-center col-lg-3 col-md-4 col-6 py-3">

                <img src="../../assets/images/products/${product.prodImg}" alt="">
                <h4 class="prod-name mt-3 mb-1">${product.prodName}</h4>

                <div class="prices text-center d-flex flex-row gap-2 justify-content-center align-items-center">
                  <del class="old-price fs-5">$${product.prodLastPrice}</del>
                  <p class="new-price fw-bold fs-5">$${product.prodPrice}</p>


                </div>


                <div style="max-width:fit-content;" data-id="${i}" class="btn-add-product mx-auto bg-black text-white px-4 py-2 mt-2 mx-4">Add To cart</div>

            </div>
            `
            productsDiv.insertAdjacentHTML("beforeend",productDiv)

        }else{

            let productDiv = `

            <div class="product text-center col-lg-3 col-md-4 col-6 py-3">

                  <img src="../../assets/images/products/${product.prodImg}" alt="">
                  <h4 class="prod-name mt-3 mb-1">${product.prodName}</h4>

                  <div class="prices text-center d-flex flex-row gap-2 justify-content-center align-items-center">
                    <del class="old-price d-none fs-5">$${product.prodLastPrice}</del>
                    <p class="new-price fw-bold fs-5">$${product.prodPrice}</p>


                  </div>


                  <div style="max-width:fit-content;" data-id="${i}" class="btn-add-product mx-auto bg-black text-white px-4 py-2 mt-2 mx-4">Add To cart</div>

              </div>

            `

            productsDiv.insertAdjacentHTML("beforeend",productDiv)


          }






        }






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
