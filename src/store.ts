import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    isloading: true,
    theme: {
      dark: true,
    },
    markdowns: [],
  },

  mutations: {
    setLoginUser(state, user): void {
      state.login_user = user;
    },

    deleteLoginUser(state): void {
      state.login_user = null;
    },

    toggleLoading(state) {
      state.isloading = !state.isloading;
    },

    addMarkdown(state: { markdowns: object[]}, markdown: object) {
      state.markdowns.push(markdown);
    },
  },

  actions: {
    // firebase ログイン処理
    login(): void {
      // tslint:disable-next-line: variable-name
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },

    setLoginUser({ commit }, user): void {
      commit('setLoginUser', user);
    },

    logout(): void {
      firebase.auth().signOut();
    },

    deleteLoginUser({ commit }): void {
      commit('deleteLoginUser');
    },
    toggleLoading({ commit }) {
      commit('toggleLoading');
    },

    addMarkdown({getters, commit}, markdownText: any): void {
      // tslint:disable-next-line:max-line-length
      firebase.firestore().collection(`users/${getters.uid}/markdowns`).add({ markdownText }).then((doc: {id: string}) => {
        commit('addMarkdown', { id: doc.id, markdownText });
      });
    },
  },
  getters: {
    userName: (state: any) => state.login_user ? state.login_user.displayName : '',
    photoURL: (state: any) => state.login_user ? state.login_user.photoURL : '',
    uid: (state: any) => state.login_user ? state.login_user.uid : null,
  },
});
