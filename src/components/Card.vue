<template>
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <img :src="currentImage" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{ currentName }}</p>
                    <p class="subtitle is-7">{{ email }}</p>
                </div>
            </div>
            <div class="content">
                <p class="subtitle is-7 is-capitalized">{{ gender }}</p>
                <p class="subtitle is-7">{{ country }}</p>
                <p class="subtitle is-7">{{ phone }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        picture: { type: Object, default: null },
        name: { type: Object, default: null },
        email: { type: String, default: '' },
        gender: { type: String, default: '' },
        country: { type: String, default: '' },
        phone: { type: String, default: '' },
    },
    computed: {
        currentName() {
            return `${this.name.title}. ${this.name.first} ${this.name.last}`
        },
        currentImage() {
            return this.picture ? this.picture.large : 'https://bulma.io/images/placeholders/1280x960.png'
        }
    }
}
</script>

