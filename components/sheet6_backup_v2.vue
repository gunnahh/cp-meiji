<template>
    <div id="sheet6" class="bg-white bg-sheet6">
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
                                    <div class="col-12 col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="row g-0">
                                            <div class="col-12 col-lg-8 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12 pt-3">
                                                        <div class="row g-0 row-drinks mb-4">
                                                            <div class="mt-5">
                                                                <h2 class="sheet6-header text-center">
                                                                    <img src="~/assets/img/star.png" alt="star icon" class="position-relative icon-red-star" width="18" />
                                                                    เมนูเครื่องดื่ม
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div class="carousel-sheet6-desktop-drink carousel-sheet6-desktop-drink-lg">

                                                            <!-- slide 1 -->
                                                            <div v-for="(drink, index) in drinks" :key="index">
                                                                <div class="row g-0">
                                                                    <h3 class="head-red text-center mb-3">{{ drink.name }}</h3>
                                                                    <div class="p-4 pb-4 pt-0">
                                                                        <div class="row g-0 card-container">
                                                                            <div class="col-6">
                                                                                <img :src="`${mPathDrink}${ drink.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-6 bg-white">
                                                                                <h4 class="head-bar text-center text-white">สูตร</h4>
                                                                                <div class="card border-0">
                                                                                    <div class="card-body border-0">
                                                                                        <p class="d-flex description-red" v-for="(value, key) in drink.ingredients" :key="key">
                                                                                            <span>{{ key }}</span>
                                                                                            <span class="ms-auto">{{ value }}</span>
                                                                                        </p>
                                                                                        <b-button class="card-footer d-flex ms-auto border-0 bg-transparent px-0 pb-0" data-bs-toggle="modal" :data-bs-target="`#modal-${drink.id}`">
                                                                                            <span class="card-link">อ่านเพิ่มเติม</span>
                                                                                        </b-button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-7 container-thumbnail m-auto">
                                                                <div class="carousel-sheet6-desktop-drink-thumbnail carousel-sheet6-desktop-drink-thumbnail-lg">
                                                                    <div v-for="(thumb, index) in drinks" class="d-flex m-auto" :key="index" style="max-width: 100px; ">
                                                                        <div class="row g-0">
                                                                            <div class="p-2 pb-3 pt-3">
                                                                                <div class="row g-0 card-container card-container-thumb">
                                                                                    <div class="col-12">
                                                                                        <img :src="`${mPathDrink}${ thumb.photo }`"
                                                                                            class="img-fluid w-100 aspect-1-1" />
                                                                                    </div>
                                                                                </div>
                                                                                <h3 class="head-red-thumb text-center mb-3 mt-4">{{ thumb.name }}</h3>
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
                                    </div>
                                    <div class="col-12 col-lg-6" data-aos="zoom-in" data-aos-delay="300">
                                        <div class="row g-0">
                                            <!-- <div class="col-12 m-menu">
                                                <img src="~/assets/img/sheet6/d-item3.png" class="head-menu" />
                                            </div> -->
                                            <div class="col-12 col-lg-8 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12 pt-3 container-row-dessert">
                                                        <!-- <div class="row g-0 row-drinks mb-4">
                                                            <div class="mt-5">
                                                                <h2 class="sheet6-header text-center">
                                                                    <img src="~/assets/img/star.png" alt="star icon" class="position-relative icon-red-star" width="18" />
                                                                    เมนูเครื่องดื่ม
                                                                </h2>
                                                            </div>
                                                        </div> -->
                                                        <div class="row g-0 row-desserts mb-4">
                                                            <div class="mt-5">
                                                                <h2 class="sheet6-header text-center">
                                                                    <img src="~/assets/img/star.png" alt="star icon" class="position-relative icon-red-star" width="18" />
                                                                    เมนูของหวาน
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div class="carousel-sheet6-desktop-dessert carousel-sheet6-desktop-dessert-lg">

                                                            <!-- slide 1 -->
                                                            <div v-for="(dessert, index) in desserts" :key="index">
                                                                <div class="row g-0">
                                                                    <h3 class="head-red text-center mb-3">{{ dessert.name }}</h3>
                                                                    <div class="p-4 pb-4 pt-0">
                                                                        <div class="row g-0 card-container">
                                                                            <div class="col-6">
                                                                                <img :src="`${mPathDessert}${ dessert.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-6 bg-white">
                                                                                <h4 class="head-bar text-center text-white">สูตร</h4>
                                                                                <div class="card border-0">
                                                                                    <div class="card-body border-0">
                                                                                        <p class="d-flex description-red border-0" v-if="dessert?.title1">
                                                                                            <span>{{ dessert.title1 }}</span>
                                                                                        </p>
                                                                                        <p class="d-flex description-red" v-for="(value, key) in dessert.ingredients" :key="key">
                                                                                            <span>{{ key }}</span>
                                                                                            <span class="ms-auto">{{ value }}</span>
                                                                                        </p>
                                                                                        <b-button v-if="dessert?.ingredients && Object.keys(dessert.ingredients).length > 2" class="card-footer d-flex ms-auto border-0 bg-transparent px-0 pb-0" data-bs-toggle="modal" :data-bs-target="`#modal-dessert-${dessert.id}`">
                                                                                            <span class="card-link">อ่านเพิ่มเติม</span>
                                                                                        </b-button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-7 container-thumbnail m-auto">
                                                                <div class="carousel-sheet6-desktop-drink-thumbnail carousel-sheet6-desktop-dessert-thumbnail-lg">
                                                                    <div v-for="(thumb, index) in desserts" class="d-flex m-auto" :key="index" style="max-width: 100px; ">
                                                                        <div class="row g-0">
                                                                            <div class="p-2 pb-3 pt-3">
                                                                                <div class="row g-0 card-container card-container-thumb">
                                                                                    <div class="col-12">
                                                                                        <img :src="`${mPathDessert}${ thumb.photo }`"
                                                                                            class="img-fluid w-100 aspect-1-1" />
                                                                                    </div>
                                                                                </div>
                                                                                <h3 class="head-red-thumb text-center mb-3 mt-4">{{ thumb.name }}</h3>
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
                        <div class="z-0 position-absolute w-100 bg-mobile">
                            <div class="container-fluid g-0 menu">
                                <div class="row g-0">
                                    <!-- <div class="col-11 mx-auto text-center">
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
                                    </div> -->
                                    <div class="col-12" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="row g-0">
                                            <div class="col-12 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12">
                                                        <div class="row g-0 mt-2">
                                                            <div class="mt-3">
                                                                <h2 class="sheet6-header text-center">
                                                                    <img src="~/assets/img/star.png" alt="star icon" class="position-relative icon-red-star" width="18" />
                                                                    เมนูเครื่องดื่ม
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div class="carousel-sheet6-desktop-drink carousel-sheet6-desktop-drink-mobile">

                                                            <!-- slide 1 -->
                                                            <div v-for="(drink, index) in drinks" :key="index">
                                                                <div class="row g-0">
                                                                    <h3 class="head-red text-center mb-3 header-item-name">{{ drink.name }}</h3>
                                                                    <div class="p-2 pb-4 pt-0">
                                                                        <div class="row g-0 card-container">
                                                                            <div class="col-6">
                                                                                <img :src="`${mPathDrink}${ drink.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-6 bg-white">
                                                                                <h4 class="head-bar text-center text-white">สูตร</h4>
                                                                                <div class="card border-0">
                                                                                    <div class="card-body border-0">
                                                                                        <p class="d-flex description-red" v-for="(value, key) in drink.ingredients" :key="key">
                                                                                            <span>{{ key }}</span>
                                                                                            <span class="ms-auto">{{ value }}</span>
                                                                                        </p>
                                                                                        <b-button class="card-footer d-flex ms-auto border-0 bg-transparent px-0 pb-0" data-bs-toggle="modal" :data-bs-target="`#modal-${drink.id}`">
                                                                                            <span class="card-link">อ่านเพิ่มเติม</span>
                                                                                        </b-button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-7 container-thumbnail m-auto">
                                                                <div class="carousel-sheet6-desktop-drink-thumbnail carousel-sheet6-desktop-drink-thumbnail-mobile">
                                                                    <div v-for="(thumb, index) in drinks" class="d-flex m-auto" :key="index" style="max-width: 100px; ">
                                                                        <div class="row g-0">
                                                                            <div class="p-2 pb-3 pt-3">
                                                                                <div class="row g-0 card-container card-container-thumb">
                                                                                    <div class="col-12">
                                                                                        <img :src="`${mPathDrink}${ thumb.photo }`"
                                                                                            class="img-fluid w-100 aspect-1-1" />
                                                                                    </div>
                                                                                </div>
                                                                                <h3 class="head-red-thumb text-center mb-3 mt-4">{{ thumb.name }}</h3>
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
                                    </div>
                                </div>
                                <div class="row g-0">
                                    <!-- <div class="col-11 mx-auto text-center">
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
                                    </div> -->
                                    <div class="col-12" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="row g-0">
                                            <div class="col-12 mx-auto">
                                                <div class="row g-0">
                                                    <div class="col-12">
                                                        <div class="row g-0 mt-2">
                                                            <div class="mt-3">
                                                                <h2 class="sheet6-header text-center">
                                                                    <img src="~/assets/img/star.png" alt="star icon" class="position-relative icon-red-star" width="18" />
                                                                    เมนูของหวาน
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div class="carousel-sheet6-desktop-dessert carousel-sheet6-desktop-dessert-mobile">

                                                            <!-- slide 1 -->
                                                            <div v-for="(dessert, index) in desserts" :key="index">
                                                                <div class="row g-0">
                                                                    <h3 class="head-red text-center mb-3 header-item-name">{{ dessert.name }}</h3>
                                                                    <div class="p-2 pb-4 pt-0">
                                                                        <div class="row g-0 card-container">
                                                                            <div class="col-6">
                                                                                <img :src="`${mPathDessert}${ dessert.photo }`"
                                                                                    class="img-fluid w-100" />
                                                                            </div>
                                                                            <div class="col-6 bg-white">
                                                                                <h4 class="head-bar text-center text-white">สูตร</h4>
                                                                                <div class="card border-0">
                                                                                    <!-- <div class="card-body border-0">
                                                                                        <p class="d-flex description-red" v-for="(value, key) in dessert.ingredients" :key="key">
                                                                                            <span>{{ key }}</span>
                                                                                            <span class="ms-auto">{{ value }}</span>
                                                                                        </p>
                                                                                        <b-button class="card-footer d-flex ms-auto border-0 bg-transparent px-0 pb-0" data-bs-toggle="modal" :data-bs-target="`#modal-${drink.id}`">
                                                                                            <span class="card-link">อ่านเพิ่มเติม</span>
                                                                                        </b-button>
                                                                                    </div> -->
                                                                                    <div class="card-body border-0">
                                                                                        <p class="d-flex description-red border-0" v-if="dessert?.title1">
                                                                                            <span>{{ dessert.title1 }}</span>
                                                                                        </p>
                                                                                        <p class="d-flex description-red" v-for="(value, key) in dessert.ingredients" :key="key">
                                                                                            <span>{{ key }}</span>
                                                                                            <span class="ms-auto">{{ value }}</span>
                                                                                        </p>
                                                                                        <b-button v-if="dessert?.ingredients && Object.keys(dessert.ingredients).length > 2" class="card-footer d-flex ms-auto border-0 bg-transparent px-0 pb-0" data-bs-toggle="modal" :data-bs-target="`#modal-dessert-${dessert.id}`">
                                                                                            <span class="card-link">อ่านเพิ่มเติม</span>
                                                                                        </b-button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row g-0">
                                                            <div class="col-7 container-thumbnail m-auto">
                                                                <div class="carousel-sheet6-desktop-drink-thumbnail carousel-sheet6-desktop-dessert-thumbnail-mobile">
                                                                    <div v-for="(thumb, index) in desserts" class="d-flex m-auto" :key="index" style="max-width: 100px; ">
                                                                        <div class="row g-0">
                                                                            <div class="p-2 pb-3 pt-3">
                                                                                <div class="row g-0 card-container card-container-thumb">
                                                                                    <div class="col-12">
                                                                                        <img :src="`${mPathDessert}${ thumb.photo }`"
                                                                                            class="img-fluid w-100 aspect-1-1" />
                                                                                    </div>
                                                                                </div>
                                                                                <h3 class="head-red-thumb text-center mb-3 mt-4">{{ thumb.name }}</h3>
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
    <!-- Drinks Modal -->
    <div class="modal fade" v-for="(item, index) in drinks" :key="index" :id="`modal-${item.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-drink">
            <div class="modal-content">
                <div class="modal-header border-0 p-0 d-flex flex-column">
                    <button type="button" class="bg-transparent border-0 ms-auto btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                        <img src="~/assets/img/w-pop-up.png" alt="close icon" />
                    </button>
                    <h5 class="modal-title head-red text-center" id="exampleModalLabel">{{ item.name }}</h5>
                </div>
                <NuxtScrollbar :options="{ suppressScrollX : true }" tag="aside"  @ps-scroll-y="onScroll">
                    <div style="height: 350px;">
                        <div class="modal-body pe-4">
                            <h6 class="sub-header text-primary-red">สูตร</h6>
                            <p class="d-flex description-red" v-for="(value, key) in item.ingredients" :key="key">
                                <span>{{ key }}</span>
                                <span class="ms-auto">{{ value }}</span>
                            </p>
                            <h6 class="sub-header pt-2">วิธีทำ</h6>
                            <ol class="item-list">
                                <li v-for="(value, key) in item.howto" :key="key" class="list-item-size">
                                    {{ value }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </NuxtScrollbar>
            </div>
        </div>
    </div>

    <!-- Drinks Modal -->
    <div class="modal fade" v-for="(item, index) in desserts" :key="index" :id="`modal-dessert-${item.id}`" tabindex="-1" aria-labelledby="dessertModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-drink">
            <div class="modal-content">
                <div class="modal-header border-0 p-0 d-flex flex-column">
                    <button type="button" class="bg-transparent border-0 ms-auto btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                        <img src="~/assets/img/w-pop-up.png" alt="close icon" />
                    </button>
                    <h5 class="modal-title head-red text-center" id="dessertModalLabel">{{ item.name }}</h5>
                </div>
                <NuxtScrollbar :options="{ suppressScrollX : true }" tag="aside"  @ps-scroll-y="onScroll">
                    <div style="height: 350px;">
                        <div class="modal-body pe-4">
                            <h6 class="sub-header text-primary-red">สูตร</h6>
                            <p class="d-flex description-red border-0" v-if="item?.title1">
                                <span>{{ item.title1 }}</span>
                            </p>
                            <p class="d-flex description-red" v-for="(value, key) in item.ingredientsModal" :key="key">
                                <span>{{ key }}</span>
                                <span class="ms-auto">{{ value }}</span>
                            </p>
                            <p class="d-flex description-red border-0 pt-2" v-if="item?.title2">
                                <span>{{ item.title2 }}</span>
                            </p>
                            <div v-if="item?.ingredientsModal2">
                                <p class="d-flex description-red" v-for="(value, key) in item.ingredientsModal2" :key="key">
                                    <span>{{ key }}</span>
                                    <span class="ms-auto">{{ value }}</span>
                                </p>
                            </div>
                            <h6 v-if="item?.howto" class="sub-header pt-2">วิธีทำ</h6>
                            <ol v-if="item?.howto" class="item-list">
                                <li v-for="(value, key) in item.howto" :key="key" class="list-item-size">
                                    {{ value }}
                                </li>
                            </ol>
                            <h6 v-if="item?.title3" class="sub-header pt-2">{{ item.title3 }}</h6>
                            <ol v-if="item?.howto2" class="item-list">
                                <li v-for="(value, key) in item.howto2" :key="key" class="list-item-size">
                                    {{ value }}
                                </li>
                            </ol>
                            <h6 v-if="item?.title4" class="sub-header pt-2">{{ item.title4 }}</h6>
                            <ol v-if="item?.howto3" class="item-list">
                                <li v-for="(value, key) in item.howto3" :key="key" class="list-item-size">
                                    {{ value }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </NuxtScrollbar>
            </div>
        </div>
    </div>
</template>

<script setup>
const mPathDrink = useRuntimeConfig().public.basePath + 'img/drinks/';
const mPathDessert = useRuntimeConfig().public.basePath + 'img/desserts/';
const desserts = ref([
{
    id: 1,
    name: "ทาร์ตผลไม้ครีมชีสมิกซ์มิลค์",
    photo: "ss01.jpg",
    ingredients: {
        "เมจิ มิกซ์มิลค์": "400 มล.",
        "กลิ่นวานิลลา": "1 ช้อนชา",
        "แป้งข้าวโพด": "1 ช้อนโต๊ะ",
        "แป้งอเนกประสงค์": "1 ช้อนโต๊ะ",
        "ไข่ไก่เบอร์ 0": "1 ฟอง",
    },
    ingredientsModal: {
        "เมจิ มิกซ์มิลค์": "400 มล.",
        "กลิ่นวานิลลา": "1 ช้อนชา",
        "แป้งข้าวโพด": "1 ช้อนโต๊ะ",
        "แป้งอเนกประสงค์": "1 ช้อนโต๊ะ",
        "ไข่ไก่เบอร์ 0": "1 ฟอง",
        "เนยเค็ม": "20 กรัม",
        "น้ำตาลทรายขาว": "50 กรัม",
        "ครีมชีส": "100 กรัม"
    }
  },    
  {
    id: 2,
    name: "ซอสนมสดมิกซ์มิลค์",
    photo: "ss02.jpg",
    ingredients: {
        "เมจิ มิกซ์มิลค์": "440 มล.",
        "แป้งข้าวโพด": "2 ช้อนโต๊ะ"
    }
  },
  {
    id: 3,
    name: "พุดดิ้งนมสดมิกซ์มิลค์มะพร้าวอ่อน",
    photo: "ss03.jpg",
    title1: "เนื้อพุดดิ้ง",
    title2: "น้ำราดพุดดิ้ง",
    ingredients: {
        "เมจิ มิกซ์มิลค์": "200 มล.",
        "ผงวุ้น": "1 ช้อนชา",
        "ผงเจลาติน": "1.5 ช้อนชา",
        "น้ำตาลทรายขาว": "75 กรัม"
    },
    ingredientsModal: {
        "เมจิ มิกซ์มิลค์": "200 มล.",
        "ผงวุ้น": "1 ช้อนชา",
        "ผงเจลาติน": "1.5 ช้อนชา",
        "น้ำตาลทรายขาว": "75 กรัม",
        "น้ำเปล่า": "200 มล.",
        "เนื้อมะพร้าว": "300 กรัม",
        "น้ำมะพร้าวสด": "500 มล."
    },
    ingredientsModal2: {
        "เมจิ มิกซ์มิลค์": "200 มล.",
        "เกลือป่น": "¼ ช้อนชา",
        "น้ำตาลทรายขาว": "50 กรัม",
        "เนื้อมะพร้าว": "150 กรัม",
        "น้ำเปล่า": "200 มล.",
        "น้ำมะพร้าวสด": "500 มล."
    }
  },
  {
    id: 4,
    name: "สังขยาชาไทย",
    photo: "ss04.jpg",
    ingredients: {
        "ใบชาไทย": "40 กรัม",
        "น้ำร้อน": "100 กรัม",
        "เมจิ มิกซ์มิลค์": "260 กรัม",
        "ไข่ไก่": "1 ฟอง",
        "ไข่แดง": "1 ฟอง"
    },
    ingredientsModal: {
        "ใบชาไทย": "40 กรัม",
        "น้ำร้อน": "100 กรัม",
        "เมจิ มิกซ์มิลค์": "260 กรัม",
        "ไข่ไก่": "1 ฟอง",
        "ไข่แดง": "1 ฟอง",
        "น้้ำตาล": "20 กรัม",
        "แป้งข้าวโพด": "10 กรัม",
        "เกลือ": "⅛ ช้อนชา",
        "เนย": "40 กรัม"
    },
    howto: [
        "แช่ใบชาในน้ำร้อน 15 นาที",
        "ผสมไข่ไก่ ไข่แดง น้ำตาล แป้งข้าวโพด ลงชามผสมและผสมให้เข้ากัน",
        "เทมิกซ์มิลค์ใส่หม้อ ตั้งไฟพออุ่น ค่อยๆเทลงชามผสมที่เตรียมไว้และคนไปพร้อมกัน",
        "เทส่วนผสมกลับลงไปในหม้อ ตั้งไฟพออุ่น (คนผสมตลอดเวลา)",
        "คนผสมให้เข้ากันจนเนื้อเนียน ข้น ปิดไฟใส่เนยและคนผสมจนเป็นเนื้อเดียวกัน"
    ]
  },
  {
    id: 5,
    name: "คาราเมลคอร์นเฟล็ค",
    photo: "ss05.jpg",
    ingredients: {
        "น้ำเปล่า": "20 กรัม",
        "น้ำตาล": "30 กรัม",
        "เกลือ": "40 กรัม",
        "เมจิ มิกซ์มิลค์": "200 กรัม",
        "เนย": "30 กรัม"
    },
    ingredientsModal: {
        "น้ำเปล่า": "20 กรัม",
        "น้ำตาล": "30 กรัม",
        "เกลือ": "40 กรัม",
        "เมจิ มิกซ์มิลค์": "200 กรัม",
        "เนย": "30 กรัม",
        "คอร์นเฟล็ค": "200 กรัม",
        "เม็ดมะม่วง": "80 กรัม",
        "ลูกเกด": "80 กรัม"
    },
    howto: [
        "ผสมน้ำเปล่า น้ำตาล เกลือ ลงในกระทะ เคี่ยวจนเป็นคาราเมล",
        "ใส่เมจิมิกซ์มิลค์ เคี่ยวผสมต่อให้เข้ากัน",
        "ปิดไฟ ใส่เนยและน้ำเปล่า",
        "เทใส่ชามผสมที่มีคอร์นเฟล็คและเม็ดมะม่วง ผสมให้ซอสเคลือบแผ่นคอร์นเฟล็ค",
        "นำใส่ถาด เข้าอบ 150°C 10 นาที",
        "นำออกมาพัก และผสมลูกเกด"
    ]
  },
  {
    id: 6,
    name: "เค้กลอดช่อง",
    photo: "ss06.jpg",
    title1: "ตัวครีมลอดช่อง",
    title2: "ตัวเค้ก",
    title3: "วิธีทำตัวเค้ก",
    title4: "วิธีทำครีมลอดช่อง",
    ingredients: {
        "ผงวุ้น": "¼ ช้อนชา",
        "เมจิ มิกซ์มิลค์": "200 กรัม",
        "กะทิ": "100 กรัม",
        "กะทิลอดช่อง": "150 กรัม"
    },
    ingredientsModal: {
        "ผงวุ้น": "¼ ช้อนชา",
        "เมจิ มิกซ์มิลค์": "200 กรัม",
        "กะทิ": "100 กรัม",
        "กะทิลอดช่อง": "150 กรัม",
        "เกลือ": "¼ ช้อนชา",
        "แป้งข้าวโพด": "18 กรัม",
        "เนื้อลอดช่อง": "250 กรัม"
    },
    ingredientsModal2: {
        "เมจิ มิกซ์มิลด์": "125 กรัม",
        "ไข่แดง": "4 ฟอง",
        "น้ำมัน": "40 กรัม",
        "แป้งเค้ก": "90 กรัม",
        "ผงฟู": "½ ช้อนชา",
        "ไข่ขาว": "4 ฟอง",
        "น้ำตาล": "6 กรัม",
        "ครีมออฟทาร์ทาร์": "¼ ช้อนชา"
    },
    howto2: [
        "ผสมเมจิ มิกซ์มิลค์ ไข่แดง น้ำมัน แป้งเค้ก ผงฟู เข้าด้วยกันในชามผสม พักไว้",
        "ผสมไข่ขาว ครีมออฟทาร์ทาร์ ลงในโถ และตีด้วยสปีดแรงสุด จนเป็นเป็นฟองหยาบๆ",
        "ใส่น้ำตาล ตีปีดแรงสุด จนตั้งยอดอ่อน",
        "แบ่งส่วนไข่ขาวในโถตีเป็น 3 ส่วน ค่อยๆตะล่อมผสมกับส่วนผสมในชามที่พักไว้อย่างเบามือ จนเนื้อเริ่มเข้ากันดี",
        "เทใส่ถาดอบขนาด 9x9 (2 ถาด)",
        "เข้าอบ 180°C 13 นาที"
    ],
    howto3: [
        "ผสมส่วนผสมทั้งหมดลงหม้อ ยกเว้นเนื้อลอดช่อง",
        "คนส่วนผสมให้เข้า ตั้งไฟ จนสุกทั่วกัน",
        "ปิดไฟ ใส่เนื้อลอดช่องและคนผสมให้เข้ากัน"
    ]
  },
  {
    id: 7,
    name: "ขนมปังนมสด",
    photo: "ss07.jpg",
    ingredients: {
        "น้ำตาล": "450 กรัม",
        "เกลือ": "50 กรัม",
        "ยีสต์": "4 กรัม",
        "เมจิ มิกซ์มิลค์": "280 กรัม",
        "น้ำเปล่า": "30-35 กรัม",
    },
    ingredientsModal: {
        "น้ำตาล": "450 กรัม",
        "เกลือ": "50 กรัม",
        "ยีสต์": "4 กรัม",
        "เมจิ มิกซ์มิลค์": "280 กรัม",
        "น้ำเปล่า": "30-35 กรัม",
        "เนย": "80 มล."
    },
    howto: [
        "เทส่วนของแห้งลงโถตี ตีผสมเข้ากันด้วยสปีดต่ำ",
        "ผสมส่วนของเปียกลงไป ตีผสมให้เข้ากันด้วยสปีดกลาง จนเป็นก้อนโดว์เนื้อเดียวกัน",
        "นำออกมาคลุมพลาสติกแรป ไม่ให้สัมผัสอากาศ พักไว้ 30 นาที",
        "นำโดว์กลับลงโถ ตีด้วยสปีดกลางจนโดว์เกือบแข็งแรง ใส่เนยและตีด้วยสปีดต่ำ 5 นาที",
        "พักโดว์ด้านนอกโถ 15 นาที  ตัดแบ่งเป็นก้อนละ 150 กรัม",
        "ขึ้นรูปก้อนกลม พักไว้ 15 นาที และคลึงโดว์ให้แน่น",
        "ทาเนยรอบพิมพ์ ใส่โดว์ที่ได้ลงไป พรูฟรอบสุดท้าย 1 ชั่วโมง (โดว์สูงขึ้น 1.5 เท่า)",
        "ทาไข่แดงบางๆบนผิวขนมปัง เข้าอบ 170 °C  15-20 นาที",
        "นำออกจากพิมพ์ ทาเมจิมิกซ์มิลค์ด้านบน เพิ่มความนุ่มและหอม"
    ]
  },
]);

const drinks = ref([
    {
        id: 1,
        name: "ลอดช่องนมสดมิกซ์มิลค์",
        photo: "dd01-drink-1.jpg",
        ingredients: {
            "เมจิ มิกซ์มิลค์": "180 มล.",
            "น้ำแข็ง": "1 แก้ว (16 ออนซ์)",
            "ลอดช่องสำหรับตกแต่ง": ""
        },
        howto: [
            "เทเมจิ มิกซ์มิลค์ ลงในแก้วขนาด 16 ออนซ์",
            "เติมน้ำแข็ง",
            "เทลอดช่องตกแต่งด้านบนตามใจชอบ"
        ]
  },
  {
        id: 2,
        name: "เฉาก๊วยนมสด",
        photo: "dd02-drink-2.jpg",
        ingredients: {
            "เมจิ มิกซ์มิลค์": "70 มล.",
            "นมสด": "60 มล.",
            "น้ำแข็ง": "1 แก้ว (16 ออนซ์)",
            "เฉาก๊วยสำหรับตกแต่ง": "",
            "น้ำตาลทรายแดงสำหรับตกแต่ง": ""
        },
        howto: [
            "ผสมเมจิ มิกซ์มิลค์ และนมสด ลงในแก้วขนาด 16 ออนซ์",
            "ผสมให้เข้ากัน และเติมน้ำแข็ง",
            "เทเฉาก๊วยตกแต่งด้านบนตามใจชอบ"
        ]
  },
  {
        id: 3,
        name: "โกโก้ภูเขาไฟ",
        photo: "dd03-drink-3.jpg",
        ingredients: {
            "ผงโกโก้": "20 กรัม",
            "น้ำร้อน": "60 มล.",
            "เมจิ มิกซ์มิลค์": "75 มล.",
            "น้ำแข็ง": "1 แก้ว (16 ออนซ์)",
        },
        howto: [
            "ละลายผงโกโก้กับน้ำร้อน",
            "ผสมเมจิ มิกซ์มิลค์ลงในน้ำโกโก้ให้เข้ากัน",
            "เทน้ำแข็งและน้ำโกโก้ที่ผสมไว้ลงในโถปั่น",
            "ปั่นจนน้ำแข็งละเอียด เนื้อเนียนเข้ากัน",
            "เสิร์ฟในแก้ว 16 ออนซ์ ตกแต่งได้ตามใจชอบ"
        ]
  },
  {
        id: 4,
        name: "มะพร้าวอะโวคาโด้ปั่น",
        photo: "dd04-drink-4.jpg",
        ingredients: {
            "อะโวคาโด": "1 ลูก",
            "เนื้อมะพร้าว": "ตามใจชอบ",
            "เมจิ มิกซ์มิลค์": "60 มล.",
            "น้ำมะพร้าว": "70 มล.",
            "น้ำแข็ง": "1 แก้ว (16 ออนซ์)"
        },
        howto: [
            "ใส่เนื้อมะพร้าว,อะโวคาโด,น้ำมะพร้าว,เมจิ มิกซ์มิลค์ และน้ำแข็งลงในโถปั่น",
            "ปั่นส่วนผสมทั้งหมดให้เนื้อเนียนเข้ากัน",
            "เสิร์ฟในแก้ว 16 ออนซ์ ตกแต่งได้ตามใจชอบ"
        ]
  },
  {
        id: 5,
        name: "เอสเย็น",
        photo: "dd05-drink-5.jpg",
        ingredients: {
            "เอสเพรสโซ่ช็อต": "50 มล.",
            "เมจิ มิกซ์มิลค์": "60 มล.",
            "เมจิ เรย์": "60 มล.",
        },
        howto: [
            "ผสมเมจิ มิกซ์มิลค์, เมจิ เรย์ และเอสเพรซโซ่ช็อต ลงในแก้วขนาด 16 ออนซ์",
            "ผสมให้เข้ากัน",
            "ใส่น้ำแข็ง"
        ]
  },
  {
        id: 6,
        name: "ชาไทย",
        photo: "dd06-drink-6.jpg",
        ingredients: {
            "ชาไทย": "90 มล.",
            "เมจิ มิกซ์มิลค์": "90 มล."
        },
        howto: [
            "ผสมน้ำชาไทยโดยผสมผงชา 20 กรัม กับน้ำร้อน 160 มล. แช่ทิ้งไว้ 15 นาที",
            "กรองเอาผงชาไทยออก จะได้น้ำชา 90 มล.",
            "ผสมน้ำชาไทยและ เมจิ มิกซ์มิลค์ คนผสมให้เข้ากัน ลงในแก้วขนาด 16 ออนซ์",
            "ใส่น้ำแข็ง"
        ]
  },
  {
        id: 7,
        name: "ชาไทย",
        photo: "dd07-drink-7.jpg",
        ingredients: {
            "โกโก้": "45 มล.",
            "เมจิ มิกซ์มิลค์": "75 มล.",
            "เมจิ เรย์": "60 มล."
        },
        howto: [
            "ผสมน้ำโกโก้โดยละลายผงโกโก้กับน้ำร้อน  ได้น้ำโกโก้ 45 มล.",
            "ผสมน้ำโกโก้,เมจิ มิกซ์มิลค์ และเมจิ เรย์ ลงในแก้วขนาด 16 ออนซ์",
            "คนผสมให้เข้ากัน",
            "ใส่น้ำแข็ง"
        ]
  },
]);

function onScroll (event) {
  console.log(event)
}
if (process.client) {
    

    $(function () {
    
        $('.carousel-sheet6-desktop-drink-lg').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-drink-thumbnail-lg'
            // autoplaySpeed: 5000,
        });

        $('.carousel-sheet6-desktop-dessert-lg').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-dessert-thumbnail-lg'
            // autoplaySpeed: 5000,
        });
        $('.carousel-sheet6-desktop-drink-lg').on('init breakpoint', function (event, slick, direction) {
            setTimeout(function () {
                AOS.refresh();
            }, 500);
        });

        $('.carousel-sheet6-desktop-dessert-lg').on('init breakpoint', function (event, slick, direction) {
            setTimeout(function () {
                AOS.refresh();
            }, 500);
        });

        $('.carousel-sheet6-desktop-drink-thumbnail-lg').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-drink-lg',
            slidesToShow: 3,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '5px',
            // autoplaySpeed: 5000,
        });

        $('.carousel-sheet6-desktop-dessert-thumbnail-lg').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-dessert-lg',
            slidesToShow: 3,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '5px',
            // autoplaySpeed: 5000,
        });

        //Mobile
        $('.carousel-sheet6-desktop-drink-mobile').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-drink-thumbnail-mobile'
            // autoplaySpeed: 5000,
        });

        $('.carousel-sheet6-desktop-dessert-mobile').slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-dessert-thumbnail-mobile'
            // autoplaySpeed: 5000,
        });

        $('.carousel-sheet6-desktop-dessert-mobile').on('init breakpoint', function (event, slick, direction) {
            setTimeout(function () {
                AOS.refresh();
            }, 500);
        });

        $('.carousel-sheet6-desktop-drink-thumbnail-mobile').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-drink-mobile',
            slidesToShow: 3,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '5px',
            // autoplaySpeed: 5000,
        });

        $('.carousel-sheet6-desktop-dessert-thumbnail-mobile').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            asNavFor: '.carousel-sheet6-desktop-dessert-mobile',
            slidesToShow: 3,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '5px',
            // autoplaySpeed: 5000,
        });
    
        $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
            e.target // newly activated tab
            e.relatedTarget // previous active tab
            $('.carousel-sheet6-desktop-drink').slick('setPosition');
        })
    
    });
}

</script>

<style>
.menu {
    margin-top: 3rem;
}

h2.sheet6-header {
    font-family: 'DB HeaventRounded Bold Cond';
    font-size: 2.8vw;
    line-height: 2vw;
    color: #5D3422;
}

.head-red {
    color: #DD0B2B;
    font-size: 2.1vw;
    line-height: 1;
}

.head-red-thumb {
    color: #DD0B2B;
    font-size: 24px;
    line-height: 1;
}

.description-red {
    font-size: 1.28vw;
    line-height: 1;
    color: #DD0B2B;
    border-bottom: solid 1px #806054;
}

.card-container {
    border-radius: 10px;
    border: solid 3px #e71b2a;
    overflow: hidden;
    box-shadow: 0 25px 29px -15px rgb(0 0 0 / 0.2)
}

.card-container-thumb {
    border: solid 2px #aaa;
}

.slick-active.slick-center .card-container-thumb {
    scale: 1.2;
    border: solid 2px #e71b2a;
}

.card-footer {
    border-bottom: solid 1px #806054 !important;
    width: fit-content;
    border-radius: 0 !important;
}

.card-link {
    font-family: 'DB HeaventRounded Med Cond';
    font-size: 1.15vw;
    line-height: 1;
    color: #DD0B2B;
    cursor: pointer;
}

.head-bar {
    background: #dd0b2b;
    font-size: 2.1vw;
}

.carousel-sheet6-desktop-drink>.slick-prev:before,
.carousel-sheet6-desktop-drink>.slick-next:before,
.carousel-sheet6-desktop-dessert>.slick-prev:before,
.carousel-sheet6-desktop-dessert>.slick-next:before {
    font-family: 'slick';
    font-size: 30px;

}

.carousel-sheet6-desktop-drink>.slick-next,
.carousel-sheet6-desktop-dessert>.slick-next {
    right: 28px;
    top: 28% !important;
    z-index: 1;
}

.carousel-sheet6-desktop-drink>.slick-prev,
.carousel-sheet6-desktop-dessert>.slick-prev {
    left: 20px;
    top: 28% !important;
    z-index: 1;
}

.carousel-sheet6-desktop-drink>.slick-dots li button:before,
.carousel-sheet6-desktop-dessert>.slick-dots li button:before {
    font-size: 1vw;
    color: #E7002A;
}

.carousel-sheet6-desktop-drink>.slick-dots {
    bottom: inherit;
    top: 57%;
}

.carousel-sheet6-desktop-drink-thumbnail .slick-slide,
.carousel-sheet6-desktop-dessert-thumbnail .slick-slide {
    -webkit-transition: all .25s ease-in-out;
    transition: all .25s ease-in-out;
}

.carousel-sheet6-desktop-drink-thumbnail .slick-slide:hover,
.carousel-sheet6-desktop-dessert-thumbnail .slick-slide:hover {
    -webkit-transform: translateY(-0.5422094841vw);
    transform: translateY(-0.5422094841vw);
    cursor: pointer;
}

.carousel-sheet6-desktop-drink-thumbnail .slick-active.slick-center:hover,
.carousel-sheet6-desktop-dessert-thumbnail .slick-active.slick-center:hover {
    -webkit-transform: translateY(-0.3422094841vw);
    transform: translateY(-0.3422094841vw);
}

.carousel-sheet6-desktop-drink-thumbnail .slick-prev:before,
.carousel-sheet6-desktop-drink-thumbnail .slick-next:before,
.carousel-sheet6-desktop-dessert-thumbnail .slick-prev:before,
.carousel-sheet6-desktop-dessert-thumbnail .slick-next:before {
    font-size: 40px;
}

.ingr {
    width: 100%;
}

.ingr-list {
    margin-top: 2%;
    margin-left: 1%;
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

.icon-red-star {
    top: -13px;
    right: -3px;
}

.aspect-1-1 {
    aspect-ratio: 1/1;
}

body.modal-open {
    padding-right: 0 !important;
    overflow: hidden;
}

.modal-content {
    border: solid 3px #e71b2a;
    padding: 0 24px 12px;
    min-height: 450px;
    position: relative;
}

.modal-content::after {
    position: absolute;
    content: "";
    left: 3px;
    right: 46px;
    top: auto;
    bottom: 3px;
    height: 40px;
    display: block;
    background: rgb(255,255,255, 0.8);
}

.text-primary-red {
    color: #DD0B2B;
}

.sub-header {
    font-size: 1.92vw;
}

.list-item-size {
    font-size: 1.4vw;
}

.btn-close-modal {
    margin-right: -26px;
}

.item-list {
    margin-left: -12px;
}



@media screen and (min-width: 768px) {
    .carousel-sheet6-desktop-drink .card-body,
    .carousel-sheet6-desktop-dessert .card-body {
        min-height: 263px;
    }

    .row-drinks,
    .row-desserts {
        margin-top: 8px;
    }

    .bg-sheet6 {
        padding-bottom: 150px;
    }

    .container-thumbnail {
        width: 54%;
    }

    .head-red-thumb {
        font-size: 18px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-prev,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-prev {
        left: -30px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-next,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-next {
        right: -13px;
    }
}

@media screen and (min-width: 320px) {
    .carousel-sheet6-desktop-drink .card-body,
    .carousel-sheet6-desktop-dessert .card-body {
        min-height: 263px;
    }

    .row-drinks,
    .row-desserts {
        margin-top: 8px;
    }

    .bg-sheet6 {
        padding-bottom: 750px;
    }

    .container-thumbnail {
        width: 80%;
        max-width: 430px;
    }

    .head-red-thumb {
        font-size: 18px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-prev,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-prev {
        left: -30px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-next,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-next {
        right: -13px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-prev,
    .carousel-sheet6-desktop-drink-thumbnail .slick-next,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-prev,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-next {
        top: 26%;
    }

    .modal-dialog-drink {
        margin-top: 40px;
    }
}

@media screen and (min-width: 992px) {
    .carousel-sheet6-desktop-drink .card-body,
    .carousel-sheet6-desktop-dessert .card-body {
        min-height: 200px;
    }

    .row-drinks,
    .row-desserts {
        margin-top: 8px;
    }

    .bg-sheet6 {
        padding-bottom: 150px;
    }

    .container-thumbnail {
        width: 82%;
    }

    .head-red-thumb {
        font-size: 19px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-prev,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-prev {
        left: -40px;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-prev,
    .carousel-sheet6-desktop-drink-thumbnail .slick-next,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-prev,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-next {
        top: 26%;
    }

    .carousel-sheet6-desktop-drink-thumbnail .slick-next,
    .carousel-sheet6-desktop-dessert-thumbnail .slick-next {
        right: -25px;
    }

    .container-row-dessert {
        margin-left: -4%;
    }
}

@media screen and (min-width: 1200px) {
    .carousel-sheet6-desktop-drink .card-body,
    .carousel-sheet6-desktop-dessert .card-body {
        min-height: 270px;
    }

    .row-drinks,
    .row-desserts {
        margin-top: 100px;
    }

    .bg-sheet6 {
        padding-bottom: 40px;
    }

    .head-red-thumb {
        font-size: 22px;
    }

    .container-thumbnail {
        width: 58.33333333%;
    }
}

@media screen and (max-width: 991px) {

    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        background-color: #E7002A;
        border-radius: 1rem;
    }

    .menu-tab {
        font-size: 5vw;
        padding: 0.4em 1em;
        margin: 0em 0.4em;
    }

    .menu {
        margin-top: 28%;
    }

    .nav-menu {
        display: inline-flex;
    }

    .carousel-sheet6-desktop-drink>.slick-prev:before,
    .carousel-sheet6-desktop-drink>.slick-next:before,
    .carousel-sheet6-desktop-dessert>.slick-prev:before,
    .carousel-sheet6-desktop-dessert>.slick-next:before {
        font-family: 'slick';
        font-size: 45px;
    }

    .carousel-sheet6-desktop-drink>.slick-prev,
    .carousel-sheet6-desktop-dessert>.slick-prev {
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
        margin-top: 2%;
        margin-left: 2.2%;
    }

    .col-ingr {
        flex: 0 0 auto;
        width: 10%;
    }

    .bg-mobile {
        padding-top: 10%;
    }
    
    h2.sheet6-header {
        font-size: 48px;
        line-height: 1;
    }

    .header-item-name,
    .head-bar,
    .head-red {
        font-size: 34px;
    }

    .sub-header {
        font-size: 32px;
    }

    .description-red,
    .list-item-size {
        font-size: 20px;
    }

    .card-link {
        font-size: 18px;
    }
}

@media screen and (max-device-width: 767px) {
    .bg-mobile {
        padding-top: 4%;
    }
}
</style>