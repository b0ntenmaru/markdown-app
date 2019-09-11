import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from './router';

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

    updateMarkdown(state: { markdowns: object[]} , markdown: {id: string, markdownText: string}): void {
      const index: number = state.markdowns.findIndex((md: any) => md.id === markdown.id);
      state.markdowns[index] = markdown;
    },

    deleteMarkdown(state: {markdowns: object[]}, markdown: {id: string, markdownText: string}): void {
      const index: number = state.markdowns.findIndex((md: any) => md.id === markdown.id);
      state.markdowns.splice(index, 1);
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

    addMarkdown({ getters, commit }): void {
      if (getters.uid) {
        // tslint:disable-next-line:max-line-length
        firebase.firestore().collection(`users/${getters.uid}/markdowns`).add({ markdownText: '' }).then((doc: { id: string }) => {
          // 保存されたidのURLを開く
          router.push({ name: 'edit', params: { markdown_id: doc.id } });
          commit('addMarkdown', { id: doc.id, markdownText: '' });
        });
      }
    },
    // TODO 文字を入力した後にIndexに戻ると中身が更新されていない状態になっている
    // 理由は、firestoreに更新をかけただけで、stateの値が書き換わっていないから
    // なのでstateの値も更新する実装が必要になる。
    updateMarkdown({commit, getters}, { markdownText, markdownId }): void {
      if (getters.uid) {
        // tslint:disable-next-line: max-line-length
        firebase.firestore().collection(`users/${getters.uid}/markdowns`).doc(markdownId).update({ markdownText }).then(() => {
          commit('updateMarkdown', { markdownText, id: markdownId });
        });
      }
    },

    deleteMarkdown({ commit, getters}, markdown: { id: string}): void {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/markdowns`).doc(markdown.id).delete().then(() => {
          commit('deleteMarkdown', markdown)
        });
      }
    },

    fetchMarkdowns({ getters, commit }) {
      firebase.firestore().collection(`users/${getters.uid}/markdowns`).get().then((snapshot: any) => {
        snapshot.forEach((doc: any) => {
          commit('addMarkdown', { id: doc.id, markdownText: doc.data().markdownText });
        });
      });
    },
  },
  getters: {
    userName: (state: any) => state.login_user ? state.login_user.displayName : '',
    photoURL: (state: any) => state.login_user ? state.login_user.photoURL : '',
    uid: (state: any) => state.login_user ? state.login_user.uid : null,
    // tslint:disable-next-line: max-line-length
    getMarkdownById: (state: any) => (id: string) => state.markdowns.find((markdown: {id: string}) => markdown.id === id),
  },
});
