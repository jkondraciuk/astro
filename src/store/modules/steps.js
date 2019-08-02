import { isContext } from "vm";

const state = {
    step: false
}

const getters = {
    getStep : state => state.step
}

const actions = {
    changeStep ({ commit }) {
        commit('changeStep')
    }
}

const mutations = {
    changeStep (state) {
        state.step = !state.step;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}