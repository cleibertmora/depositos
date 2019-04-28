<template>
    <div class="AddBank container">
        <div class="row">
            <a v-on:click="goBack" class="go-back">&lArr; Volver</a>
        </div>
        <div class="row">
            <div class="center-align">
                <h4><b>Nuevo Banco</b></h4>
            </div>

            <form @submit.prevent="sendBankData">
                <div class="field">
                    <label for="name">Nombre Banco</label>
                    <input type="text" v-model="name">
                </div>
                <div class="field">
                    <label for="name">Nro. de Cuenta</label>
                    <input type="text" v-model="number">
                </div>
                <div class="field">
                    <label for="name">Tipo de Cuenta</label>
                    <input type="text" v-model="type">
                </div>
                <div class="field">
                    <label for="name">Comentario</label>
                    <textarea class="materialize-textarea" v-model="comment"></textarea>
                </div>
                <div class="field center-align">
                    <input type="submit" class="waves-effect waves-light btn center-align" value="Guardar">
                </div>
            </form>

            <p v-if="feedback" class="red-text center-align">{{ feedback }}</p>

        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'AddBank',
  data () {
    return {
      name: null,
      number: null,
      type: null,
      comment: null,
      feedback: null
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    addNewBank () {
      if (this.name) {
        this.$store.dispatch('addBank', {
          name: this.name,
          number: this.number,
          type: this.type,
          comment: this.comment
        })
        this.$router.push({ name: 'bank' })
      }
    },
    sendBankData () {
      if (this.name) {
        db.collection('banks').add({
          name: this.name,
          number: this.number,
          type: this.type,
          comment: this.comment
        }).then(docRef => {
          this.feedback = null
          this.$router.push({ name: 'bank' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'El banco debe tener un nombre para guardarlo.'
      }
    }
  }
}
</script>
