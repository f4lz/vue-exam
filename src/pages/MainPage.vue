<template>
<div class="main__wrapper main">
    <aside class="main__sidebar">
        <h1 class="main__title">Киноафиша</h1>
        <h2 class="main__subtitle">Все категории</h2>
        <p v-for="category, index in categories" :key=index>
            {{ category.name }}
        </p>
    </aside>
    <section class="films film__wrapper">
        <div class="film" v-for="film in films" :key="film.id">
            <img class="film__img" :src="`/images/${film.img}`" :alt="film.alt">
            <div class="film__text text">
                <p class="film__text-title"> {{ film.title }} </p>
                <p class="film__text-genre"> {{ film.genre }} </p>
            </div>
        </div>
    </section>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

    data: () => ({
        films: [],
        categories: [
            {
                name: 'Романтика',
            },
            {
                name: 'Драма',
            },
            {
                name: 'Научная фантастика',
            },
            {
                name: 'Боевик',
            },
            {
                name: 'Триллер',
            },
            {
                name: 'Ужасы',
            },
            {
                name: 'Приключения',
            },
            {
                name: 'Детектив',
            },
            {
                name: 'Криминал',
            },
            {
                name: 'Фэнтэзи',
            },
            {
                name: 'Детский',
            },
            {
                name: 'Спорт',
            },
        ]
    }),

    async created() {
       await fetch('/api/main.json')
      .then(response => response.json())
      .then(json => this.films = json)
    },

    computed: {
        ...mapGetters(['allPosts'])
    }

}

</script>

<style lang="scss" scoped>
.main {
    &__wrapper {
    display: flex;
    gap: 80px;
    max-width: 1400px;
    margin: 0 auto;
        & p {
            cursor: pointer;
        }
    }
    &__subtitle {
        font-size: 26px;
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
        }
        &__wrapper {
            display: flex;
            gap: 15px;
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
}
</style>