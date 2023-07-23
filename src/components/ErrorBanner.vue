<template>
    <div class="error" v-show="bannerMessage">
        <small>{{ bannerMessage }}</small>
        <span @click="clearBannerMessage" class="cancel">x</span>
    </div>
</template>

<script>
export default {
    name: "ErrorBanner", 
    props: {
        bannerMessage: {
            default: '',
            type: String
        }
    },
    methods: {
        clearBannerMessage() {
            this.$emit('cancelMessage')
        }
    }
}
</script>

<style>
    .error {
        background-color: black;
        opacity: 0.5;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin: 20px auto;
        width: 70%;
    }
    .cancel {
        float: right;
        cursor: pointer;
    }
</style>