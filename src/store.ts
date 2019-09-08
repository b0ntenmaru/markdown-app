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

    // firebase ログアウト処理
    logout(): void {
      firebase.auth().signOut();
    },

    deleteLoginUser({ commit }): void {
      commit('deleteLoginUser');
    },
    toggleLoading({ commit }) {
      commit('toggleLoading');
    },
  },
  getters: {
    userName: (state: any) => state.login_user ? state.login_user.displayName : '',
    photoURL: (state: any) => state.login_user ? state.login_user.photoURL : '',
    uid: (state: any) => state.login_user ? state.login_user.uid : null,
  },
});
