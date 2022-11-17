<template>
    <div>
        <div v-if="loading" class="has-text-centered">
            Loading...
        </div>
        <div v-else>
            <div v-if="errorMessage">
                <article class="message is-danger">
                    <div class="message-header">
                        <p>Error</p>
                    </div>
                    <div class="message-body is-capitalized">
                        {{ errorMessage }}
                    </div>
                </article>
            </div>
            <div v-else class="columns is-multiline is-mobile is-tablet">
                <div v-for="item in lists" :key="item.id.value" class="column is-6-mobile is-4-tablet is-3-desktop">
                    <card v-bind="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {
        Card: () => import('../components/Card')
    },
    data: () => ({
        loading: true,
        errorMessage: null,
        lists: []
    }),
    mounted() {
        this.getApi()
    },
    methods: {
        async getApi() {
            this.loading = true
            const [err, result] = await axios.get('https://randomuser.me/api', { params: { results: 30, gender: 'male' } })
                .then(v => [null, v]).catch(e => [e, null])
            if (err) {
                this.errorMessage = err.toString()
            } else {
                const { status, statusText, data } = result
                this.errorMessage = null
                if (status !== 200) {
                    this.errorMessage = `${status} - ${statusText}`
                } else {
                    this.lists = 'results' in data ? data.results : []
                }
            }
            await this.$nextTick(() => {
                this.loading = false
            })
        }
    } 
}
</script>
