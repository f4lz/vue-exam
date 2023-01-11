<template>
<div class="main__wrapper main" id="main">
    <aside class="main__sidebar">
        <h1 class="main__title">Киноафиша</h1>
        <h2 class="main__subtitle" @click="changeGenre(null)" :class="{ active: !genre }">Все категории</h2>
        <p v-for="item in unique" :key=item.id @click="changeGenre(item.genre)" :class="{ active: item.genre == genre }">
            {{ item.genre  }}
        </p>
    </aside>
    <section class="films film__wrapper">
        <div class="film" v-for="film in films" :key="film.id" @click="$router.push({path:`/${film.id}`})">
            <img class="film__img" :src="`/images/${film.img}`" :alt="film.alt">
            <div class="film__text text">
                <p class="film__text-title"> {{ film.title }} </p>
                <span class="film__text-genre"> {{ film.genre }} </span>
            </div>
        </div>
    </section>
</div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

    data: () => ({
        genre: null,
    }),

    computed: {
        ...mapGetters(['allFilms']),

        unique() {
            let result = []
            this.allFilms.forEach(film => result.push({id: film.id, genre: film.genre})) 
            return new Set(result)
           
        },
        films() {
            return this.$store.getters.categoryFilms(this.genre)
        }
    },
   
    async created() {
       await this.$store.dispatch('searchFilms', null)
    },
    
    methods: {
        changeGenre(genre) {
            this.genre = genre
        },
        
    }

}

</script>

<style lang="scss" scoped>

@media screen and (max-width:800px) {
        .main__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .main .film__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

.active {
    color: #69DA69;
}
.main {
    &__wrapper {
    display: flex;
    gap: 80px;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
        & p {
            cursor: pointer;
        }
    }
    &__subtitle {
        font-size: 26px;
        cursor: pointer;
    }
    &__title {
        font-size: 36px;
    }
    &__sidebar {
        background-color: #2B2A2A;
        padding: 20px 40px;
    }
    

.film {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    
    &__img {
        border-radius: 9.5px;
        width: 300px;
    }
    &__wrapper {
        display: flex;
        gap: 60px;
        row-gap: 40px;
        flex-wrap: wrap;
    }
    
    &__text {
        text-align: center;
        flex: 1 0;
        max-width: 262px;
        margin: 0 auto;
        line-height: 29px; 

        &-title {
            font-size: 1.4em;
            padding: 0 30px 0;
            font-weight: 800;
        }

        &-genre {
            font-size: 1em;
            font-weight: 300;
        }
    }
    
}



    @media print {
        * {
            color:black;
        }
        div img {
            display: none;
        }
    }


}
</style>