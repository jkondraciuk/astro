import { isContext } from "vm";

const state = {
    step: false
}

const getters = {
    getStep : state => state.step
}

const actions = {
    changeStep ({ commit }, value) {
        commit('changeStep', value)
    }
}

const mutations = {
    changeStep (state, value) {
        state.step = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}