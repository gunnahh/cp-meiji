<template>
    <div id="sheet6">
        <div class="container-fluid g-0">
            <!-- Desktop -->
            <div class="d-none d-lg-block">
                <div class="row g-0">
                    <div class="col-12">
                        <!-- <div class="z-0 position-absolute w-100">
                            <img src="~/assets/img/sheet6/d-item-0.png" class="img-fluid w-100" data-aos="zoom-in" data-aos-delay="100" alt="">
                        </div> -->
                        <div class="z-0 position-absolute w-100">
                            <div class="container-fluid g-0 menu">
                                <div class="row g-0">
                                    <div class="col-6" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="row g-0">
                                            <div class="col-12 m-menu">
                                                <img src="~/assets/img/sheet6/d-item2.png" class="head-menu" />
                                            </div>
                                        </div>
                                        <div class="row g-0">
                                            <div class="col-7 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12">
                                                        <div class="carousel-sheet6-desktop-drink">

                                                            <!-- slide 1 -->
                                                            <div v-for="(drink, index) in drinks" :key="index">
                                                                <div class="row g-0">
                                                                    <div class="row g-0">
                                                                        <div class="col-12">
                                                                            <img :src="`${mPathDrink}${ drink.photo }`"
                                                                                class="img-fluid w-100" />
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <!-- <div class="z-0 position-absolute w-100">
                                                                                
                                                                            </div>
                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                    class="img-fluid w-100" /> -->

                                                                            <div class="z-0 position-absolute w-100">
                                                                                <div class="container-fluid g-0">
                                                                                    <div class="row g-0 ingr-list">
                                                                                        <div class="col-ingr">
                                                                                            <perfect-scrollbar>
                                                                                                <div
                                                                                                    style="height: 140px;">
                                                                                                    <img :src="`${mPathDrink}${ drink.ingredient }`"
                                                                                                        class="ingr" />
                                                                                                </div>
                                                                                            </perfect-scrollbar>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                                class="img-fluid w-100" />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- end slide 1 -->

                                                            <!-- slide 2 -->
                                                            <!-- <div>
                                                                <div class="row g-0">
                                                                    <div class="row g-0">
                                                                        <div class="col-12">
                                                                            <img src="~/assets/img/sheet6/drink-1.png"
                                                                                class="img-fluid w-100" />
                                                                        </div>
                                                                        <div class="col-12">
                                                                             <div class="z-0 position-absolute w-100">
                                                                                
                                                                            </div>
                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                    class="img-fluid w-100" /> 

                                                                            <div class="z-0 position-absolute w-100">
                                                                                <div class="container-fluid g-0">
                                                                                    <div class="row g-0 ingr-list">
                                                                                        <div class="col-ingr">
                                                                                            <perfect-scrollbar>
                                                                                                <div
                                                                                                    style="height: 160px;">
                                                                                                    <img src="~/assets/img/sheet6/drink-1-ingredient.jpg"
                                                                                                        class="ingr" />
                                                                                                </div>
                                                                                            </perfect-scrollbar>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                                class="img-fluid w-100" />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> -->
                                                            <!-- End slide -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6" data-aos="zoom-in" data-aos-delay="300">
                                        <div class="row g-0">
                                            <div class="col-12 m-menu">
                                                <img src="~/assets/img/sheet6/d-item3.png" class="head-menu" />
                                            </div>
                                        </div>
                                        <div class="row g-0">
                                            <div class="col-7 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12">
                                                        <div class="carousel-sheet6-desktop-drink">
                                                            <!-- Slide 1 -->
                                                            <div v-for="(dessert, index) in desserts" :key="index">
                                                                <div class="row g-0">
                                                                    <div class="row g-0">
                                                                        <div class="col-12">
                                                                            <img :src="`${mPathDessert}${ dessert.photo }`"
                                                                                class="img-fluid w-100" />
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <!-- <div class="z-0 position-absolute w-100">
                                                                                
                                                                            </div>
                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                    class="img-fluid w-100" /> -->

                                                                            <div class="z-0 position-absolute w-100">
                                                                                <div class="container-fluid g-0">
                                                                                    <div class="row g-0 ingr-list">
                                                                                        <div class="col-ingr">
                                                                                            <perfect-scrollbar>
                                                                                                <div
                                                                                                    style="height: 140px;">
                                                                                                    <img :src="`${mPathDessert}${ dessert.ingredient }`"
                                                                                                        class="ingr" />
                                                                                                </div>
                                                                                            </perfect-scrollbar>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                                class="img-fluid w-100" />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- end slide 1  -->

                                                            <!-- slide 2 -->
                                                            <!-- <div>
                                                                <div class="row g-0">
                                                                    <div class="row g-0">
                                                                        <div class="col-12">
                                                                            <img src="~/assets/img/sheet6/dessert-1.png"
                                                                                class="img-fluid w-100" />
                                                                        </div>
                                                                        <div class="col-12">
                                                                            <div class="z-0 position-absolute w-100">
                                                                                
                                                                            </div>
                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                    class="img-fluid w-100" /> 

                                                                            <div class="z-0 position-absolute w-100">
                                                                                <div class="container-fluid g-0">
                                                                                    <div class="row g-0 ingr-list">
                                                                                        <div class="col-ingr">
                                                                                            <perfect-scrollbar>
                                                                                                <div
                                                                                                    style="height: 160px;">
                                                                                                    <img src="~/assets/img/sheet6/dessert-1-ingredient.jpg"
                                                                                                        class="ingr" />
                                                                                                </div>
                                                                                            </perfect-scrollbar>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <img src="~/assets/img/sheet6/ingredient-bg.png"
                                                                                class="img-fluid w-100" />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> -->
                                                            <!-- end slide 2  -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="~/assets/img/sheet6/d-bg-00.jpg" class="img-fluid w-100" alt="">
                    </div>
                </div>
            </div>

            <!-- Mobile -->
            <div class="d-block d-lg-none">
                <div class="row g-0">
                    <div class="col-12">
                        <div class="z-0 position-absolute w-100">
                            <div class="container-fluid g-0 menu">
                                <div class="row g-0">
                                    <div class="col-11 mx-auto text-center">
                                        <ul class="nav nav-pills nav-menu" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link menu-tab active" id="pill-tab-0"
                                                    data-bs-toggle="pill" href="#drink" role="tab" aria-controls="drink"
                                                    aria-selected="true">เมนูเครื่องดื่ม</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link menu-tab" id="pill-tab-1" data-bs-toggle="pill"
                                                    href="#dessert" role="tab" aria-controls="pill-tabpanel-2"
                                                    aria-selected="false">เมนูของหวาน</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content py-3 mt-2">
                                            <div class="tab-pane active" id="drink" role="tabpanel"
                                                aria-labelledby="pill-tab-0">
                                                <div class="container-fluid g-0">
                                                    <div class="row g-0">
                                                        <div class="col-12">
                                                            <div class="carousel-sheet6-desktop-drink">
                                                                <!-- slide 1 -->
                                                                <div v-for="(drink, index) in drinks" :key="index">
                                                                    <div class="container-fluid g-0">
                                                                        <div class="row g-0">
                                                                            <div class="col-12">
                                                                                <img :src="`${mPathDrink}${ drink.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-12">
                                                                                <div
                                                                                    class="z-0 position-absolute w-100">
                                                                                    <div class="container-fluid g-0">
                                                                                        <div class="row g-0 ingr-list">
                                                                                            <div class="col-ingr">
                                                                                                <perfect-scrollbar>
                                                                                                    <div
                                                                                                        style="height: 160px;">
                                                                                                        <img :src="`${mPathDrink}${ drink.ingredient }`"
                                                                                                            class="ingr" />
                                                                                                    </div>
                                                                                                </perfect-scrollbar>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img src="~/assets/img/sheet6/ingredient-m-bg.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- end slide 1 -->

                                                                <!-- slide 2 -->
                                                                <!-- <div>
                                                                    <div class="container-fluid g-0">
                                                                        <div class="row g-0">
                                                                            <div class="col-12">
                                                                                <img src="~/assets/img/sheet6/drink-1.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-12">
                                                                                <div
                                                                                    class="z-0 position-absolute w-100">
                                                                                    <div class="container-fluid g-0">
                                                                                        <div class="row g-0 ingr-list">
                                                                                            <div class="col-ingr">
                                                                                                <perfect-scrollbar>
                                                                                                    <div
                                                                                                        style="height: 160px;">
                                                                                                        <img src="~/assets/img/sheet6/drink-1-ingredient.jpg"
                                                                                                            class="ingr" />
                                                                                                    </div>
                                                                                                </perfect-scrollbar>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img src="~/assets/img/sheet6/ingredient-m-bg.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> -->
                                                                <!-- end slide 2 -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="dessert" role="tabpanel"
                                                aria-labelledby="pill-tab-1">
                                                <div class="container-fluid g-0">
                                                    <div class="row g-0">
                                                        <div class="col-12">
                                                            <div class="carousel-sheet6-desktop-drink">
                                                                <!-- slide 1 -->
                                                                <div v-for="(dessert, index) in desserts" :key="index">
                                                                    <div class="container-fluid g-0">
                                                                        <div class="row g-0">
                                                                            <div class="col-12">
                                                                                <img :src="`${mPathDessert}${ dessert.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-12">
                                                                                <div
                                                                                    class="z-0 position-absolute w-100">
                                                                                    <div class="container-fluid g-0">
                                                                                        <div class="row g-0 ingr-list">
                                                                                            <div class="col-ingr">
                                                                                                <perfect-scrollbar>
                                                                                                    <div
                                                                                                        style="height: 160px;">
                                                                                                        <img :src="`${mPathDessert}${ dessert.ingredient }`"
                                                                                                            class="ingr" />
                                                                                                    </div>
                                                                                                </perfect-scrollbar>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img src="~/assets/img/sheet6/ingredient-m-bg.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- end slide 1 -->

                                                                <!-- slide 2 -->
                                                                <!-- <div>
                                                                    <div class="container-fluid g-0">
                                                                        <div class="row g-0">
                                                                            <div class="col-12">
                                                                                <img src="~/assets/img/sheet6/dessert-1.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-12">
                                                                                <div
                                                                                    class="z-0 position-absolute w-100">
                                                                                    <div class="container-fluid g-0">
                                                                                        <div class="row g-0 ingr-list">
                                                                                            <div class="col-ingr">
                                                                                                <perfect-scrollbar>
                                                                                                    <div
                                                                                                        style="height: 160px;">
                                                                                                        <img src="~/assets/img/sheet6/dessert-1-ingredient.jpg"
                                                                                                            class="ingr" />
                                                                                                    </div>
                                                                                                </perfect-scrollbar>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <img src="~/assets/img/sheet6/ingredient-m-bg.png"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> -->
                                                                <!-- end slide 2 -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- bg image -->
                        <img src="~/assets/img/sheet6/m-bg.jpg" class="img-fluid w-100" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const mPathDrink = useRuntimeConfig().public.basePath + 'img/drinks/';
const mPathDessert = useRuntimeConfig().public.basePath + 'img/desserts/';
const desserts = ref([
  {
    id: "1",
    photo: "dessert-1.png",
    ingredient: "dessert-1-ingredient.jpg",
    
  },  
  {
    id: "2",
    photo: "dessert-2.png",
    ingredient: "dessert-2-ingredient.jpg",
    
  },  
  {
    id: "3",
    photo: "dessert-3.png",
    ingredient: "dessert-3-ingredient.jpg",
    
  },  
 
]);

const drinks = ref([
  {
    id: "1",
    photo: "drink-1.png",
    ingredient: "drink-1-ingredient.jpg",
    
  }, 
  {
    id: "2",
    photo: "drink-2.png",
    ingredient: "drink-2-ingredient.jpg",
    
  }, 
  {
    id: "3",
    photo: "drink-3.png",
    ingredient: "drink-3-ingredient.jpg",
    
  }, 
 
]);
function onScroll(event) {
    console.log(event)
}
if (process.client) {
    const winWidth = $(window).width();

    $(function () {
        if (winWidth > 991) {
        $('.carousel-sheet6-desktop-drink').slick({
            dots: true,
            arrows: true,
            infinite: true,
            autoplay: false,
            // autoplaySpeed: 5000,
        });
        $('.carousel-sheet6-desktop-drink').on('init breakpoint', function (event, slick, direction) {
            setTimeout(function () {
                AOS.refresh();
            }, 500);
        });
    } else {
        $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
            e.target // newly activated tab
            e.relatedTarget // previous active tab
            $('.carousel-sheet6-desktop-drink').slick('setPosition');
        })
    }


    });
}
</script>

<style>
.menu {
    margin-top: 3rem;
}

.carousel-sheet6-desktop-drink>.slick-prev:before,
.carousel-sheet6-desktop-drink>.slick-next:before {
    font-family: 'slick';
    font-size: 30px;

}

.carousel-sheet6-desktop-drink>.slick-next {
    right: 28px;
    top: 28% !important;
    z-index: 1;
}

.carousel-sheet6-desktop-drink>.slick-prev {
    left: 20px;
    top: 28% !important;
    z-index: 1;
}

.carousel-sheet6-desktop-drink>.slick-dots li button:before {
    font-size: 1vw;
    color: #E7002A;
}

.carousel-sheet6-desktop-drink>.slick-dots {
    bottom: inherit;
    top: 57%;
}

.ingr {
    width: 100%;
}

.ingr-list {
    margin-top: 3.5rem;
    margin-left: 2rem;
}

.head-menu {
    width: 16%;
}

.m-menu {
    margin-left: 30%;
}

.col-ingr {
    flex: 0 0 auto;
    width: 12%;
}

@media screen and (max-device-width: 991px) {

    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        background-color: #E7002A;
        border-radius: 1rem;
    }

    .menu-tab {
        font-size: 5vw;
        padding: 0.2em 1em;
        margin: 0em 0.4em;
    }

    .menu {
        margin-top: 7rem;
    }

    .nav-menu {
        display: inline-flex;
    }

    .carousel-sheet6-desktop-drink>.slick-prev:before,
    .carousel-sheet6-desktop-drink>.slick-next:before {
        font-family: 'slick';
        font-size: 45px;
    }

    .carousel-sheet6-desktop-drink>.slick-prev {
        left: 0%;
        top: 28% !important;
        z-index: 1;
    }

    .carousel-sheet6-desktop-drink>.slick-dots li button:before {
        font-size: 4vw;
        color: #E7002A;
    }

    .carousel-sheet6-desktop-drink>.slick-dots {
        bottom: inherit;
        top: 55%;
    }

    .ingr-list {
        margin-top: 3.5rem;
        margin-left: 4rem;
    }

    .col-ingr {
        flex: 0 0 auto;
        width: 10%;
    }
    
}
</style>