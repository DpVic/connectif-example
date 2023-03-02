<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div v-for="index in 20" :key="index" class="col-md-4">
                    <product-card :slug="generateRandomSlug()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'IndexPage',
        methods: {
            generateRandomSlug (): string {
                return (Math.random() + 1).toString(36).substring(7)
            }
        }
    })
</script>
