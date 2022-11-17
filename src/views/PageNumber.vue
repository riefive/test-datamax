<template>
    <div class="has-text-centered">
        <h1 class="is-size-5 is-size-6-mobile">
            Demo Increment and Decrement a Number
        </h1>
        <h1 class="is-size-1 is-family-sans-serif has-text-weight-medium">
            {{ number }}
        </h1>
        <div class="columns is-multiline">
            <div class="column is-12">
                <button class="button is-info is-outlined" style="width: 125px;" @click="onIncrement">
                    Increment
                </button>
            </div>
            <div class="column is-12">
                <button class="button is-danger is-outlined" style="width: 125px;" @click="onDecrement">
                    Decrement
                </button>
            </div>
            <div class="column is-12">
                <button class="button is-success is-outlined" style="width: 125px;" @click="onReset">
                    Reset
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        number() {
            return this.$store.state.number || 0
        }
    },
    methods: {
        onIncrement() {
            this.$store.dispatch('updateNumber', 'inc')
        },
        onDecrement() {
            this.$store.dispatch('updateNumber', 'dec')
        },
        onReset() {
            this.$store.dispatch('updateNumber', 'reset')
        }
    }
}
</script>
