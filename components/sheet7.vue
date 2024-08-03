<template>
    <div id="sheet7">
        <div class="container-fluid g-0">
            <!-- Desktop -->
            <!-- <div class="d-none d-lg-block"> -->
                <div class="row g-0">
                    <div class="col-12">
                        <div class="z-1 position-absolute w-100">

                            <div class="container-fluid g-0">
                                <div class="row g-0">
                                    <div class="col-12 col-sm-9 col-lg-8 col-xl-7 mx-auto" id="sheet7-desktop-slider">
                                        <div v-for="(chef, index) in chefs" :key="index">
                                           <img :src="`${mPathChef}${ chef.photo_d }`" class="d-none d-lg-block"/>
                                           <img :src="`${mPathChef}${ chef.photo_m }`"  class="d-block d-lg-none"/>
                                        </div>
                                        <!-- <div>
                                            <img src="~/assets/img/sheet7/d-slide4.png"  class="d-none d-lg-block"/>
                                            <img src="~/assets/img/sheet7/m-slide1.png"  class="d-block d-lg-none"/>
                                        </div>
                                        <div>
                                            <img src="~/assets/img/sheet7/d-slide5.png" class="d-none d-lg-block"/>
                                            <img src="~/assets/img/sheet7/m-slide2.png"  class="d-block d-lg-none"/>
                                        </div>
                                        <div>
                                            <img src="~/assets/img/sheet7/d-slide6.png" class="d-none d-lg-block"/>
                                            <img src="~/assets/img/sheet7/m-slide3.png"  class="d-block d-lg-none"/>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="z-0 position-absolute w-100" data-aos="zoom-in" data-aos-delay="100">
                            <img src="~/assets/img/sheet7/d-item1.png" class="img-fluid w-100 d-none d-lg-block" alt="">
                            <img src="~/assets/img/sheet7/m-item1.png" class="img-fluid w-100 d-block d-lg-none" alt="">
                        </div>
                        <img src="~/assets/img/sheet7/d-bg.jpg" class="img-fluid w-100 d-none d-lg-block" alt="">
                        <img src="~/assets/img/sheet7/m-bg.jpg" class="img-fluid w-100 d-block d-lg-none" alt="">
                    </div>
                </div>
            <!-- </div> -->

            <!-- Mobile -->
            <div class=""></div>
        </div>
    </div>
</template>

<script setup>
const mPathChef = useRuntimeConfig().public.basePath + 'img/chefs/';
const chefs = ref([
  {
    id: "1",
    photo_d: "d-slide1.png",
    photo_m: "d-slide1.png",
    btn_links: "",
  },
  {
    id: "2",
    photo_d: "d-slide2.png",
    photo_m: "d-slide2.png",
    btn_links: "",
  },
  {
    id: "3",
    photo_d: "d-slide3.png",
    photo_m: "d-slide3.png",
    btn_links: "",
  },
  {
    id: "4",
    photo_d: "d-slide4.png",
    photo_m: "d-slide4.png",
    btn_links: "",
  },
  {
    id: "5",
    photo_d: "d-slide5.png",
    photo_m: "d-slide5.png",
    btn_links: "",
  },
  {
    id: "6",
    photo_d: "d-slide6.png",
    photo_m: "d-slide6.png",
    btn_links: "",
  },
  {
    id: "7",
    photo_d: "d-slide7.png",
    photo_m: "d-slide7.png",
    btn_links: "",
  },
  {
    id: "8",
    photo_d: "d-slide8.png",
    photo_m: "d-slide8.png",
    btn_links: "",
  },
 
]);
import 'animate.css';
if (process.client) {
    $(function () {
        const winWidth = $(window).width();

        // if (winWidth > 991) {

            $("#sheet7-desktop-slider").slick({
                centerMode: true,
                centerPadding: "0px",
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true
            }).slickAnimation();

            $('#sheet7-desktop-slider').on('init breakpoint', function (event, slick, direction) {
                setTimeout(function () {
                    AOS.refresh();
                }, 500);
            });
        // }    



        
    });
}
</script>

<style>
#sheet7-desktop-slider {
    /* max-width: 80%;
    margin: 0 auto; */
    margin-top:11.3030%;
}
#sheet7-desktop-slider > .slick-prev {
    left: -45px;
}
#sheet7-desktop-slider >.slick-prev:before,#sheet7-desktop-slider > .slick-next:before {
    font-family: 'slick';
    font-size: 40px;
}

#sheet7-desktop-slider .slick-track {
    padding-top: 120px;
    padding-bottom: 120px;
}

#sheet7-desktop-slider>div>.slick-slide {
    text-align: center;
    transition: transform 0.8s ease-in-out;
}

#sheet7-desktop-slider>div>div>.slick-slide:not(.slick-current) {
    filter: opacity(0.5);
}

#sheet7-desktop-slider>div>div>.slick-slide.slick-current {
    transform: scale(1.65);
    position: relative;
    z-index: 1;
}

#sheet7-desktop-slider .slick-slide img {
    width: 100%;
}

.slick-prev:before,
.slick-next:before {
    color: #E7002A;
}

@media screen and (max-device-width: 991px){  
    #sheet7-desktop-slider {
     /* max-width: 80%;
    margin: 0 auto;  */
    margin-top: 33.303%;
}
    #sheet7-desktop-slider>div>div>.slick-slide.slick-current {
    transform: scale(2.2);
    position: relative;
    z-index: 1;
}
#sheet7-desktop-slider>div>div>.slick-slide:not(.slick-current) {
    filter: opacity(0.3);
    transform: scale(1.4);
}
/* #sheet7-desktop-slider > .slick-prev, #sheet7-desktop-slider > .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 30px;
    height: 30px;
  } */
  #sheet7-desktop-slider >.slick-prev:before,#sheet7-desktop-slider > .slick-next:before {
    font-family: 'slick';
    font-size: 45px;
}
#sheet7-desktop-slider > .slick-next {
    right: 11%;
}
#sheet7-desktop-slider >  .slick-prev {
    left: 0%;
}
  }

  @media screen and (max-device-width: 450px){  
  #sheet7-desktop-slider {
     /* max-width: 80%;
    margin: 0 auto;  */
    margin-top: 22.303%;
}
  }
</style>