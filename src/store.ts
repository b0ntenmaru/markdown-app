import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
  },
  mutations: {
    setLoginUser(state, user): void {
      state.login_user = user;
    },

    deleteLoginUser(state) {
      state.login_user = null;
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
  },
  getters: {
    userName: (state: any) => state.login_user ? state.login_user.displayName : '',
    photoURL: (state: any) => state.login_user ? state.login_user.photoURL : '',
    uid: (state: any) => state.login_user ? state.login_user.uid : null,
  },
});
