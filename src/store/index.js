import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0
    },
    mutations: {
        changeNumberInc(state) {
            if (state.number >= 50) { return false }
            state.number++
        },
        changeNumberDec(state) {
            if (state.number <= 0) { return false }
            state.number--
        },
        resetNumber(state) {
            state.number = 0
        }
    },
    actions: {
        updateNumber({ commit }, value) {
            const key = value || 'inc'
            switch (key) {
                case 'inc': commit('changeNumberInc')
                    break
                case 'dec': commit('changeNumberDec')
                    break
                default: commit('resetNumber')
                    break
            }
        }
    },
    modules: {
    }
})
