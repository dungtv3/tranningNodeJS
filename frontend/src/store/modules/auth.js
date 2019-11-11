import * as types from '../mutation-types'

// state
export const state = {
    user: null,
    token: null
}

// mutations
export const mutations = {
    [types.SAVE_TOKEN] (state, { token, user }) {
        state.token = token
        state.user = user
    },
}

// actions
export const actions = {
    saveToken ({ commit }, payload) {
        commit(types.SAVE_TOKEN, payload)
    },
}

export const getter = {
  authToken : state => state.token
}

// getters
export const getters = {
    authUser: state => state.user,
    authToken: state => state.token,
    authCheck: state => state.user !== null
}
