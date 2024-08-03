<template>
    <div id="sheet1">
        <div class="container-fluid g-0">
            <div class="row g-0">
                <div class="col-12">
                    <div id="carousel-sheet1" class="animate__animated animate__fadeIn animate__slow">
                        <div class="position-relative">
                            <img src="~/assets/img/sheet1/d-theme-1-new.jpg" class="img-fluid w-100 d-none d-lg-block" />
                            <img src="~/assets/img/sheet1/m-theme-1-new.jpg" class="img-fluid w-100 d-block d-lg-none" />
                            <div class="position-absolute intro-logo text-center">
                                <img src="~/assets/img/sheet1/d-logo-intro.png" class="img-fluid d-none d-lg-block img-theme" />
                                <NuxtLink to="#sheet6" class="nav-link main main-menu pt-3">
                                    <img src="~/assets/img/sheet1/w-bt.png" class="btn-pc mx-auto mt-4 img-fluid d-none d-lg-block" />
                                </NuxtLink>
                            </div>
                            
                            <div class="position-absolute top-0 mt-3">
                                <img src="~/assets/img/sheet1/m-banner-1-new.png" class="m-auto img-fluid d-block d-lg-none" />
                                <NuxtLink to="#sheet6" class="nav-link main main-menu pt-2">
                                    <img src="~/assets/img/sheet1/m-bt.png" class="m-auto img-fluid d-block d-lg-none m-bt-img" />
                                </NuxtLink>
                            </div>
                        </div>                                               
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import 'animate.css';
if (process.client) {

    $(function () {
        $('#carousel-sheet1').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 5000,
        });
        $('#carousel-sheet1').on('init breakpoint', function (event, slick, direction) {
            setTimeout(function () {
                AOS.refresh();
            }, 500);
        });
    });
}
</script>

<style>
#carousel-sheet1>.slick-dots {
    bottom: 25px;
}

.slick-slide {
    /* width:100%!important; */
    line-height: 0 !important;
}

.slick-dotted.slick-slider {
    margin-bottom: 0px !important;
}

#carousel-sheet1>.slick-dots li button:before {
    font-size: 1vw;
    color: #E7002A;
}

.intro-logo {
    right: 8%;
}

@media (min-width: 1250px) {
    .intro-logo {
        max-width: 42%;
    }
}

@media (min-width: 992px) {
    .intro-logo {
        max-width: 40%;
        top: 115px;
    }

    .btn-pc {
        max-width: 75%;
    }
}

@media (min-width: 1024px) {
    .intro-logo {
        max-width: 42%;
    }
}

@media (min-width: 1136px) {
    .intro-logo {
        max-width: 43%;
    }
}

@media (min-width: 1136px) {
    .intro-logo {
        max-width: 45%;
    }
}

@media (min-width: 1350px) {
    .intro-logo {
        max-width: 46%;
    }
}

@media (min-width: 1500px) {
    .intro-logo {
        max-width: 44%;
        top: 160px;
    }
}

@media (min-width: 1700px) {
    .btn-pc,
    .intro-logo {
        max-width: none;
    }

    .intro-logo {
        max-width: 780px;
        top: 180px;
    }
}

@media (max-width: 440px) {
    .m-bt-img {
        max-width: 290px;
    }
}

@media (max-width: 400px) {
    .m-bt-img {
        max-width: 260px;
    }
}


@media screen and (max-device-width: 767.5px),
screen and (max-width: 767.5px) and (orientation: portrait) {
    #carousel-sheet1>.slick-dots li button:before {
        font-size: 3vw;
        color: #E7002A;
    }

    #carousel-sheet1>.slick-dots {
        bottom: 15px;
    }
}
</style>