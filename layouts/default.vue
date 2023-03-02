<template>
    <div>
        <header>
            <div class="navbar navbar-dark bg-dark box-shadow">
                <div class="container d-flex justify-content-between">
                    <nuxt-link :to="{name: 'index'}" href="#" class="navbar-brand d-flex align-items-center">
                        <strong>Home</strong>
                    </nuxt-link>
                </div>
            </div>
        </header>

        <main role="main">
            <Nuxt/>
        </main>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        watch: {
            $route () {
                this.$nextTick(() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.connectif.managed.sendEvents([{ type: 'page-visit' }])
                    this.$toast.info('Route changed')
                })
            }
        }
    })
</script>
