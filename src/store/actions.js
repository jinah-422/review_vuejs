import { fetchNewsList, fetchAskList ,fetchJobsList, fetchItemList, fetchUserInfo } from '../api/index.js';

export default {
    /* 화면단 OOOView.vue에서 호출한 actions(fetchOOOList)수행. api !!
        response.data를 {data}로 받고 context.commitdms {commit}으로
        mutations (SET_OOO) 호출 */

    FETCH_NEWS({commit}){
        fetchNewsList()
        .then(({data}) => {
            commit('SET_NEWS', data)
        })
        .catch(error => console.log(error))
    },

    FETCH_ASK({commit}){
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASK', data)
        })
        .catch(error => console.log(error))
    },

    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ITEM({commit}, userid) {
        fetchItemList(userid)
        .then(({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(error => console.log(error))
    },
    FETCH_USER({commit}, username) {
        fetchUserInfo(username)
        .then(({data}) => {
            commit('SET_USER', data)
        })
        .catch((error) => console.log(error))

    }

}