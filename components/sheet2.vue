<template>
    <div id="sheet2">
        <div class="container-fluid g-0">
            <div class="row g-0">
                <div class="col-12">
                    <div class="position-absolute w-100 py-5">
                        <div class="container-fluid">
                            <div class="row g-0">
                                <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="100">
                                    <h2 class="sheet2-header">ทำไม? เราต้องยอม “เสีย”</h2>
                                    <p class="sheet2-sub">ทั้ง “เวลา” “ความคุ้มค่า” “คุณภาพ” <br class="d-block d-md-none">ไปกับการมิกซ์นมเอง</p>
                                </div>
                            </div>
                            <div class="row g-0 d-block d-lg-none">
                                <div class="col-11 mx-auto">
                                    <hr class="border border-1 m-0 border-meiji opacity-100" data-aos="zoom-in" data-aos-delay="100">
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-11 mx-auto">
                                    <div class="row g-0">
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3 pt-3 pt-lg-4" data-aos="zoom-in" data-aos-delay="200"><img src="~/assets/img/sheet2/d-res-1.png"
                                                class="img-fluid w-100" alt=""></div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3 pt-3 pt-lg-4" data-aos="zoom-in" data-aos-delay="300"><img src="~/assets/img/sheet2/d-res-2.png"
                                                class="img-fluid w-100" alt=""></div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3 pt-3 pt-lg-4" data-aos="zoom-in" data-aos-delay="400"><img src="~/assets/img/sheet2/d-res-3.png"
                                                class="img-fluid w-100" alt=""></div>
                                        <div class="col-6 col-sm-6 col-md-6 col-lg-3 pt-3 pt-lg-4" data-aos="zoom-in" data-aos-delay="500"><img src="~/assets/img/sheet2/d-res-4.png"
                                                class="img-fluid w-100" alt=""></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <img src="~/assets/img/sheet2/d-bg.jpg" class="img-fluid w-100 d-none d-lg-block" alt="">
                    <img src="~/assets/img/sheet2/m-bg.jpg" class="img-fluid w-100 d-block d-lg-none" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2.sheet2-header {
    font-family: 'DB HeaventRounded Bold Cond';
    font-size: 7.5vw;
    line-height: 6vw;
    color: #E7002A;
}

p.sheet2-sub {
    font-family: 'DB HeaventRounded Med Cond';
    font-size: 3vw;
}

@media screen and (max-device-width: 767.5px),
screen and (max-width: 767.5px) and (orientation: portrait) {
    h2.sheet2-header {
        font-size: 11.5vw;
        line-height: 10vw;
    }

    p.sheet2-sub {
        font-size: 9vw;
        line-height: 8vw;
    }
    .border-meiji {    
        border-color: #64301A!important;
    }
}</style>