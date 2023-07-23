<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style>
    h1 {
        text-align: center;
        margin: 20px;
    }
</style>