<template>
    <div>
        <h1 style="display: none;">
            Meiji Mixed Milk - เมจิ มิกซ์มิลค์ นมมิกซ์พร้อมใช้รูปแบบพาสเจอร์ไรส์
        </h1>
        <h2 style="display: none;">
            นมมิกซ์พร้อมใช้ในรูปแบบพาสเจอร์ไรส์
        </h2>
        <Navbar />
        <div data-bs-spy="scroll" data-bs-target="#mainbar" data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary" tabindex="2">
            <Sheet1 />
            <Sheet2 />
            <Sheet3 />
            <Sheet4 />
            <Sheet5 />
            <Sheet6 />
            <Sheet7 />
            <Sheet8 />
            <Sheet9 />
            <Sheet10 />


        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Meiji Mixed Milk - เมจิ มิกซ์มิลค์ นมมิกซ์พร้อมใช้รูปแบบพาสเจอร์ไรส์',
    ogTitle: 'Meiji Mixed Milk - เมจิ มิกซ์มิลค์ นมมิกซ์พร้อมใช้รูปแบบพาสเจอร์ไรส์',
    keyword: 'Meiji Mixed Milk, เมจิ มิกซ์มิลค์, ซีพี เมจิ มิกซ์มิลค์, นมมิกซ์, นมผสม, CP-Meiji, ซีพี-เมจิ, นมมิกซ์พร้อมใช้, นมผสมพร้อมใช้',
    description: 'นมมิกซ์พร้อมใช้ในรูปแบบพาสเจอร์ไรส์',
    ogDescription: 'นมมิกซ์พร้อมใช้ในรูปแบบพาสเจอร์ไรส์',
    ogImage: process.env.usedomain + process.env.basePath + '~/assets/img/share.jpg',
    twitterCard: 'summary_large_image',
});
</script>

<style scoped>

</style>