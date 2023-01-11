export default {
  state: {
    films: [],
  },
  getters: {
    allFilms(state) {
      return state.films
    },
    categoryFilms: state => genre => {
      if (!genre) {
        return state.films
      }
      return state.films.filter(film => genre == film.genre)
    },
  },
  mutations: {
    UPDATE_FILMS(state, payload) {
      state.films = payload
    }
  },
  actions: {
    async searchFilms({commit}, query) {
      const result = await fetch('/api/main.json')
      const films = await result.json();
      if (!query) {
        commit('UPDATE_FILMS', films)
        return
      }
      let res = films.filter(film => {
        let index = film.title.toLowerCase().indexOf(query.toLowerCase())
        if (index !== -1) {
          return film
        }
      })
      commit('UPDATE_FILMS', res)
    }
  },

}