<template>
    <div class="container is-fluid">
        <div class="columns is-centered is-multiline has-text-centered">
            <div class="column is-12 mt-3">
                <h1 class="is-size-5">
                    {{ title }}
                </h1>
            </div>
            <div class="column is-12">
                <div class="columns is-multiline mt-4">
                    <div class="column is-3">
                        <button class="button is-fullwidth is-primary" @click="onPage('/')">
                            Home
                        </button>
                    </div>
                    <div class="column is-3">
                        <button class="button is-fullwidth is-info" @click="onPage('/number')">
                            Inc and Dec Number
                        </button>
                    </div>
                    <div class="column is-3">
                        <button class="button is-fullwidth is-danger" @click="onPage('/timer')">
                            Tomato Timer
                        </button>
                    </div>
                    <div class="column is-3">
                        <button class="button is-fullwidth is-warning" @click="onPage('/card')">
                            Card View
                        </button>
                    </div>
                </div>
            </div>
            <div class="column is-12">
                <hr />
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE || 'Welcome to VueJs'
        }
    },
    methods: {
        onPage(key) {
            const currentRoute = this.$router.currentRoute
            if (currentRoute.path === key) { return false }
            this.$router.push(key)
        }
    }
}
</script>

