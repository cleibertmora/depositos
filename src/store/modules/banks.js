import firebase from 'firebase'
import db from '@/firebase/init'

const state = {
  name: null,
  number: null,
  type: null,
  comment: null,
  feedback: null
}

const getters = {

}

const actions = {
  addBank: (context, payload) => {
    context.commit('addBank', payload)
  }
}

const mutations = {
  addBank: (state, payload) => {
    db.collection('banks').add({
      name: payload.name,
      number: payload.number,
      type: payload.type,
      comment: payload.comment
    }).then(docRef => {
      // this.feedback = null
      // this.$router.push({name: 'bank'})
    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
