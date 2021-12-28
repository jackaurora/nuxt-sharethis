export const state = () => ({
  sharers: []
})

export const actions = {
  async addOne ({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/sharers', payload)
    } catch (err) {
      console.error("sharer/addOne", err)
    }
  },

  async getAll ({ commit }) {
    try {
      const response = await this.$axios.$get('/api/sharers')

      commit('set', response)

      return response
    } catch (err) {
    }
  }
}

export const mutations = {
  set(state, sharers) {
    state.sharers = sharers
  }
}