<template>
    <div class="has-text-centered">
        <h1 class="is-size-5 is-size-6-mobile">
            Demo Tomato Timer
        </h1>
        <h1 class="is-size-1 is-family-sans-serif has-text-weight-medium">
            {{ minutes }}:{{ seconds }}
        </h1>
        <div class="columns is-multiline">
            <div v-if="!isClockRunning" class="column is-12">
                <button class="button is-info is-outlined" style="width: 125px;" @click="onStart">
                    Start
                </button>
            </div>
            <div v-if="isClockRunning" class="column is-12">
                <button class="button is-danger is-outlined" style="width: 125px;" @click="onStop">
                    Stop
                </button>
            </div>
            <div v-if="isClockRunning" class="column is-12">
                <button class="button is-success is-outlined" style="width: 125px;" @click="onReset">
                    Reset
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sessionDuration: 1500,
            currentLeftInSession: 1500,
            isClockRunning: false,
            clockTimer: null,
            minutes: 0,
            seconds: 0
        }
    },
    methods: {
        setTimer() {
            const secondsLeft = this.currentLeftInSession
            const seconds = secondsLeft % 60
            const minutes = parseInt(secondsLeft / 60) % 60
            this.minutes = minutes.toString().padStart(2, '0')
            this.seconds = seconds.toString().padStart(2, '0')
        },
        onStart() {
            this.isClockRunning = true
            if (!this.clockTimer && this.isClockRunning) {
                this.clockTimer = setInterval(() => {
                    if (this.currentLeftInSession <= 0) { return false }
                    this.currentLeftInSession--
                    this.setTimer()
                }, 1000)
            }
        },
        onStop() {
            if (this.clockTimer) {
                clearInterval(this.clockTimer)
                this.clockTimer = null
            }
        },
        onReset() {
            this.isClockRunning = false
            this.currentLeftInSession = this.sessionDuration
            this.setTimer()
            this.onStop()
        }
    }
}
</script>
