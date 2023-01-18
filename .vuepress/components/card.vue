<template>
    <div class='card hvr-buzz-out' @click="clickEvt">
        <i aria-hidden="true" :class="['fa', icon, 'card-icon']" :style="{ color }"></i>
        <div class="card-name">{{ name }}</div>
        <div class="card-text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'card',
    components: {},
    props: {
        link: String,
        color: String,
        icon: String,
        name: String,
        text: String,
        tagline: String,
    },
    data() {
        return {
        };
    },

    computed: {
        url() {
            return new URL(this.link)
        }
    },
    mounted() { },

    destroyed() { },

    methods: {
        clickEvt() {
            this.$router.push(this.link)
        }
    }
}

</script>
<style lang='scss' scoped>
.card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 6px, rgba(0, 0, 0, 0.3) 10px 7px 13px 1px, rgba(0, 0, 0, 0.2) 1px -3px 3px inset;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 30px;
    text-align: center;
    z-index: 20;
    &-icon {
        margin-top: 10px;
        font-size: 2.2rem;
    }

    &-name {
        margin-top: 20px;
        font-size: 14px;
        font-weight: bold;
        color: #34495e;
    }

    &-text {
        margin: 10px 0;
        font-size: 12px;
        color: #7f8c8d;
    }
}
</style>