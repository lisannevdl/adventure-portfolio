<template>
    <section id="waterfall-container">
        <div class="waterfall-element" v-for="(speed, index) in waterfall" 
            :key="index" :data-speed="speed" :style="`background-image:url(/img/waterfall/waterfall-${index}.png)`">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            waterfall: [5, 25, 30, 47]
        }
    },
    created() {
        window.addEventListener('scroll', this.parallexScroll);
    },
     destroyed() {
        window.removeEventListener('scroll', this.parallexScroll);
    },
    methods: {
        parallexScroll() {
            const parent =  document.getElementById('waterfall-container');
            const children = parent.getElementsByTagName('div');
            for(let i = 0; i < children.length; i++) {
                if (window.pageYOffset + window.innerHeight >= parent.offsetTop) {
                    const speed = children[i].getAttribute('data-speed');
                    children[i].style.transform = 'translateY(-' + ((window.pageYOffset - parent.offsetTop) * speed / 100) + 'px)';
                } else {
                    children[i].style.transform = 'translateY(0px)';
                }
            }
        }
    }
}
</script>