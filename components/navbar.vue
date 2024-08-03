<template>
    <div>

        <nav class="navbar bg-body-tertiary" id="secondbar">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="~/assets/img/logo-blank.png" alt="CP Meiji" class="logo">
                </a>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-meiji-navbar shadow" id="mainbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="logo">
                    <img src="~/assets/img/logo.png" alt="CP Meiji" class="logo">
                </a>
                <button class="navbar-toggler hamburger hamburger--emphatic" id="hamburger" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <!-- <span class="navbar-toggler-icon"></span> -->
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NuxtLink to="#sheet2" class="nav-link main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">ทำไมต้องใช้ เมจิ มิกซ์มิลค์</span>
                                <span class="d-none d-lg-block">ทำไมต้องใช้ เมจิ มิกซ์มิลค์</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet3" class="nav-link main-menu"> 
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">นมมิกซ์ คืออะไร</span>
                                <span class="d-none d-lg-block">นมมิกซ์ คืออะไร</span>
                            </NuxtLink>        
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet4" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">ข้อดีของ เมจิ มิกซ์มิลค์</span>
                                <span class="d-none d-lg-block">ข้อดีของ เมจิ มิกซ์มิลค์</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet5" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">TIPS การใช้งาน</span>
                                <span class="d-none d-lg-block">TIPS การใช้งาน</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet6" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">เมนูแนะนำ</span>
                                <span class="d-none d-lg-block">เมนูแนะนำ</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet7" class="nav-link main main-menu">
                                
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">ความเห็นจากมิกซ์ มาสเตอร์</span>
                                <span class="d-none d-lg-block">ความเห็นจากมิกซ์ มาสเตอร์</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet8" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">ถาม-ตอบข้อสงสัย</span>
                                <span class="d-none d-lg-block">ถาม-ตอบข้อสงสัย</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet9" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">สั่งซื้อ เมจิ มิกซ์มิลค์</span>
                                <span class="d-none d-lg-block">สั่งซื้อ เมจิ มิกซ์มิลค์</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="#sheet10" class="nav-link main main-menu">
                                <span data-bs-toggle="collapse" data-bs-target="#navbarNav" class="d-lg-none">ติดต่อเรา</span>
                                <span class="d-none d-lg-block">ติดต่อเรา</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (process.client) {
    gsap.registerPlugin(ScrollToPlugin);
    
    // const hamburgers = document.getElementById('hamburger');   

    // hamburgers.addEventListener('click', function() {
    //     hamburgers.classList.toggle('is-active')
    // }); 

    //click nav item and add active class    
    // const links = document.querySelectorAll('.nav-link');

    // if (links.length) {
    //     links.forEach((link) => {
    //         link.addEventListener('click', (e) => {
    //             links.forEach((link) => {
    //                 link.classList.remove('active');
    //             });
    //             e.preventDefault();
    //             link.classList.add('active');
    //         });
    //     });
    // }

    $(function () {
        const winWidth = $(window).width();
        const hamburger = $('#hamburger');
        const mainBar = $('#mainbar');
        const logo = $('#logo');
        const secondbar = $('#secondbar');

        hamburger.on('click', function () {
            hamburger.toggleClass("is-active");
        });

        //if (winWidth < 991) {
            $('a.main-menu').on('click', function (e) {
            //e.preventdefault();
            // remove hagtag
            history.pushState("", document.title, window.location.pathname)
            //check has class
            if (hamburger.hasClass("is-active")) {
                hamburger.removeClass("is-active");
            }
            //scroll    
            if (this.hash !== '') {
                // console.log(this.hash)
                var contentTopPosition = $(this.hash).offset().top
                if (winWidth > 991) {
                    var navbarHeight = mainBar.outerHeight()
                } else {
                    var navbarHeight = secondbar.outerHeight()
                }
                if (this.hash != '#sheet10') { 
                    var hashPosition = contentTopPosition - navbarHeight
                } else {
                    var hashPosition = contentTopPosition - navbarHeight
                }
                console.log('navbarHeight', navbarHeight)
                console.log('contentTopPosition', contentTopPosition)
                // $('html, body').animate({scrollTop: hashPosition}, 800)
                window.scrollTo(0, hashPosition)
            }
        }) 
    
        //} 
        // else {
        //     gsap.utils.toArray("a.main-menu").forEach(function(a) {
        //     a.addEventListener("click", function(e) {                              
        //         e.preventDefault();
        //         gsap.to(window, {
        //             duration: 1,
        //             scrollTo: e.target.getAttribute("href")
        //         });
        //     });
        // });

//         if(window.location.hash) {
//     let targetPosition = $(window.location.hash).offset().top;
//     gsap.to(window, {duration: 2, scrollTo:  targetPosition });
//   } 

//   // Check # on anchor click
//   $("a.main-menu").click(function( event ) {
//     let href = $(this).attr('href');
//     let hash = href.substring(href.indexOf('#') + 1);
//     if(hash){
//       if ($('#' + hash).length) {
//         event.preventDefault();
        
//         let targetPosition = $('#' + hash).offset().top;
//         gsap.to(window, { scrollTo:  targetPosition });
//       }
//     }
//   });       


       
        // }
              
    });
    
}
</script>

<style scoped>
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

.bg-meiji-navbar {
    background-color: #F0E9DC !important;
}

.logo {
    width: 30%;
}

.navbar .navbar-nav .nav-link {
    font-size: 1.6vw;
    line-height: 1.6vw;
    color: #5D3422;
}

.navbar .navbar-nav .nav-item .nav-link {
    padding: 0em 0.3em;
}

.navbar .navbar-nav .nav-item:not(:last-child) .nav-link {
    border-right: 1px solid #5D3422;
    border-bottom: none;
}

.navbar .navbar-nav .nav-link:hover {
    color: #DD0B2B;
}


.nav-link.active {
    color: #DD0B2B !important;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
    background-color: #693B1A;
    height: 2px;

}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after,
.hamburger.is-active .hamburger-inner:before {
    background-color: #693B1A;
}
@media screen and (max-width: 991.5px) {
    .navbar .navbar-nav .nav-link {
        font-size: 4vw;
        line-height: 4vw;
    }
    .navbar .navbar-nav .nav-item .nav-link {
        padding: 0.3em 0em;
    }
    .navbar .navbar-nav .nav-item:not(:last-child) .nav-link {
        border-right: none;
        border-bottom: 2px solid #5D3422;
    }

    .logo {
        width: 45%;   }
}
@media screen and (max-device-width: 767.5px),
screen and (max-width: 767.5px) and (orientation: portrait) {
    .navbar .navbar-nav .nav-link {
        font-size: 6vw;
        line-height: 6vw;
    }

    .navbar .navbar-nav .nav-item .nav-link {
        padding: 0.3em 0em;
    }

    .navbar .navbar-nav .nav-item:not(:last-child) .nav-link {
        border-right: none;
        border-bottom: 2px solid #5D3422;
    }

    .logo {
        width: 35%;   }

   
}
</style>