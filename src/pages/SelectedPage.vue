<template>
<div class="wrapper">
  <div class="elements">
      <div class="elements__inner film" v-if="obj">
        <div>
          <img width="340px" :src="`/images/${obj.img}`">
        </div>
        <div class="film__info">
          <h2 class="film__title"> {{ obj.title }} </h2>
          <p class="film__desc">{{ obj.desc }}</p>
          <v-btn
            class="act-btn"
            color="black"
            elevation="1"
            large
            outlined
          >Купить и смотреть</v-btn>
        </div>
      </div>
  </div>
    <div class="comments darken">
      <hr>
      <h2 class="comments__desc">Оставьте ваш комментарий</h2>  
      <v-text-field type="text" v-model="form.text" class="comments__input"></v-text-field>
      <v-btn  x-large @click="addComment" class="comments__btn" id="btn">Оставить комментарий</v-btn>
      <p v-if="error" class="red--text pt-3">Пожалуйста введите текст комментария</p>
      <h3 class="comments__title"> Комментарии </h3>
    <div class="comments__wrapper">
        <div v-for="(comment, index) in comments" :key="index" class="comment__inner">
         <h3> {{ comment.name }} </h3> 
          <p class="comment__line">{{ comment.text }}</p> 
        </div> 
      </div>
    </div>
</div>
</template>

<script>

export default {
  data: () => ({
      comments: [
        {
          name: 'Igor',
          text: 'Текст комментария'
        },
        {
          name: 'Vika',
          text: 'Текст комментария'
        }
      ],
      form: {
        name: '',
        text: ''
      },
      fetchElements:[],
      obj: null,
      error: false
  }),
  async mounted() {
        try {
            await fetch('/api/main.json')
                .then(response => response.json())
                .then(data => this.fetchElements = data);
                this.obj = this.fetchElements.filter(objInfo => objInfo.id == this.$route.params.id)
                this.obj = this.obj[0]
        } catch(e) {
            console.log(e)
        }
    },
    methods: {
      addComment() {
        const authing = localStorage.getItem('auth')
        if (authing && this.form.text != '') {
          this.comments.reverse()
          this.comments.push({
            name: this.$root.login,
            text: this.form.text
          })
          this.comments.reverse()
          this.error = false
        } else if (authing == null) {
          this.$router.push({name: 'login'})
        }
        if (this.form.text == '') {
          this.error = true
        }
      }
    }
}
</script>

<style scoped>

@media screen and (max-width:800px) {
  .elements__inner {
    display: flex;
    flex-direction: column;
  }
}

@media print {
  img {
    display: none;
  }
  .act-btn {
    display: none !important;
  }
  #btn {
    display: none;
  }
  * {
    color:black;
  }
  .login-btn {
    display: none;
  }
  
}

.act-btn {
  display: flex;
  flex: 1 0 1;
  max-width: 200px;
  flex-wrap: wrap;
  background-color: #69DA69;
}

.film__title {
  width: 60%;
  font-size: 34px;
  margin-bottom: 10px;
}
.film__desc {
  font-size: 25px;
  width: 70%;
}

hr {
  margin-top: 150px;
}

.comment__input {
  color: #ffe;
  background-color: white;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}

img {
  border-radius: 12px;
}

.comments__desc {
  text-align: center;
  margin: 100px 0 30px;
  font-size: 23px;
}

.film {
  gap: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.film__info {
  display: flex;
  flex-direction: column;
}
.elements {
  background-color: #4B4949 ;
}
.comments {
  margin-top: 30px;
  margin-bottom: 20px;
  max-width: 100%;
}
.comments__wrapper {
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  border: 1px solid rgb(255, 255, 255);
}

#btn {
  color: white;
  background-color: #2B2A2A;
}
.comments__btn {
  margin-bottom: 20px ;
}

.comment__inner {
  padding: 20px 0 0 20px;
}

.comments__title {
  margin-bottom: 20px;
}

</style>