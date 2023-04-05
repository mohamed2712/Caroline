
let  products=[

    {

        prodName:"Beauty Box",
        prodDesc:"Our beauty box is a set of best full-size products that are top sellers in out online shop. We want you to be able to try everything at once and make sure that our selection of products is about quality, our product just do their job, no compromises. You can subscribe and get our beauty box every month or just buy it once.",
        prodImg:"BeautyBox.jpg",
        prodPrice:120,
        prodLastPrice:0,

    },
    {

        prodName:"Body Milk",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"BodyMilk.jpg",
        prodPrice:16,
        prodLastPrice:22,

    },
    {

        prodName:"Bright Formula",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"BrightFormula.jpg",
        prodPrice:10,
        prodLastPrice:0,

    },
    {

        prodName:"Eye Cream",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"EyeCream.jpg",
        prodPrice:54,
        prodLastPrice:0,

    },
    {

        prodName:"Facial BalancingGel",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"FacialBalancingGel.jpg",
        prodPrice:32,
        prodLastPrice:0,

    },
    {

        prodName:"Facial Cleanser",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"FacialCleanser.jpg",
        prodPrice:19,
        prodLastPrice:25,

    },
    {

        prodName:"Light Wonder",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"LightWonder.jpg",
        prodPrice:16,
        prodLastPrice:0,

    },
    {

        prodName:"Natura lGel",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"NaturalGel.jpg",
        prodPrice:12,
        prodLastPrice:0,

    },
    {

        prodName:"Oil Water",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"OilWater.jpg",
        prodPrice:120,
        prodLastPrice:0,

    },
    {

        prodName:"Physical GiftCard",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"PhysicalGiftCard.jpg",
        prodPrice:100,
        prodLastPrice:0,

    },
    {

        prodName:"Super Glow",
        prodDesc:"A potent anti-oxidant blend formulated with generous doses of Vitamins C and E to gently nourish and protect the delicate skin surrounding the eyes.",
        prodImg:"SuperGlow.jpg",
        prodPrice:21,
        prodLastPrice:28,

    }



]


window.onload=()=>{


    const countDiv  = document.querySelector("header .cart .count");
    const order = document.querySelector("body .order");
    const empty = document.querySelector("body .empty");
    const body = document.querySelector("body");
    const preLoader = document.querySelector("body .pre-loader");



    getCartCount();
    animateSpanInFooter();
    expandNav();
    SendAppointment();
    controllBookingShow();
    removePreLoader();
    orderDetails();
    Send();





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



    function getCartCount(){

        let count = 0;



        for (let i = 0; i < 11; i++) {

        if(localStorage.getItem(i)){

            count = count + parseInt(localStorage.getItem(i));


        }


        }

        countDiv.innerHTML = `${count}`;





    }


    function orderDetails(){

        if(localStorage.length>0){
            empty.classList.add("d-none");
            console.log(order);
            order.classList.remove("d-none");
            let totalPrice =0;

            const itemsDiv = document.querySelector(".order-details .items");
            const totalDiv = document.querySelector(".order-details .total .total");


            products.forEach((element,index) => {


                if(localStorage.getItem(index)){

                    let prodCount  = localStorage.getItem(index);
                    let prodPrice =parseInt(element.prodPrice);
                    let prodImg =element.prodImg;
                    let prodName = element.prodName;
                    totalPrice+=(prodPrice*prodCount);


                    let itemDiv = `

                    <div class="item mb-5 d-flex justify-content-between align-items-center">

                    <div class="info d-flex align-items-center me-1">

                        <img style="width: 90px;height: 90px;" class="me-4" src="../../assets/images/products/${prodImg}" alt="">

                        <h6 class='fw-bold'>${prodName}</h6>


                    </div>
                    <div class="price d-flex align-items-center">

                        <p class="price me-3">$${prodPrice}</p>
                        <p class="count fw-bold">x${prodCount}</p>

                    </div>

                </div>




                    `


                    itemsDiv.insertAdjacentHTML("beforeend",itemDiv);




                }

            });

            totalDiv.textContent=`$${totalPrice}`

        }








    }


    function Send(){
        const btnSend = document.querySelector("body .container #btn-send");

        btnSend.onclick=()=>{
            const name = document.querySelector("body .form #name");
            const email = document.querySelector("body .form #email");
            const phone = document.querySelector("body .form #phone");
            const problem = document.querySelector("body .form .problem");




            if(name.value.trim()=="" || email.value.trim()=="" || phone.value.trim()==""){


                problem.textContent="*All Fields are required !";





            }else{


                if(ValidateEmail(email.value)){


                    if(phone.value.length>10){

                        btnSend.innerHTML = `Sending•• <span class="spinner-border Sending-spinner spinner-border-sm" role="status" aria-hidden="true"></span>`

                        btnSend.style.pointerEvents="none";
                        setTimeout(() => {

                            btnSend.innerHTML = `Sent <i class="fa-solid fa-check text-white"></i>`



                        }, 2000);


                        setTimeout(() => {


                            name.value="";
                            email.value="";
                            phone.value="";
                            localStorage.clear();
                            window.location.assign("../../index.html");

                        }, 4000);

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


}
