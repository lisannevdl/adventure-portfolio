<template>
    <section id="parallax-container">
        <div class="parallax-element" v-for="(banner, index) in 9" 
            :key="banner" :style="`background-image:url(/img/banner-${index}.png)`">
            <img src="../assets/images/logo.svg" class="logo" v-if="index === 1">
        </div>
    </section>
</template>

<script>
export default {
    created() {
        window.addEventListener('scroll', this.parallexScroll);
    },
     destroyed() {
        window.removeEventListener('scroll', this.parallexScroll);
    },
    methods: {
        parallexScroll() {
            let parent =  document.getElementById('parallax-container');
            let children = parent.getElementsByTagName('div');
            for(let i = 0; i < children.length; i++) {
                children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
            }
        }
    }
}
</script>