<template>
    <section class="galeria-imovel">
        <div class="container">
            <div class="title-row py-30 pym-30">
                <h3 class="title verde-terreno fs-72 fsm-32">Imagens</h3>
            </div>
        </div>

        <div class="container full">
            <div class="grid" :class="galeryClass" >
                <picture class="container-img" v-for="i in imagens">
                    <img :src="generatePlaceholder( `1000x1000`, i % 2 == 0 ? 2 : 3 )" alt="" loading="lazy">

                    <figcaption class="branco fs-25 fsm-20 py-25 px-30 pxm-20 pym-20">Legenda {{ i }}</figcaption>

                    <div class="zoom">
                        <img src="/icons/search.png" alt="ícone de zoom" loading="lazy">

                        <p class="branco mt-15 mtm-10 fs-18 fsm-18">Ver projeto</p>
                    </div>
                </picture>

                <a @click.prevent="" class="more-images branco" v-if="totalImages > 5">
                    <span class="fs-40 fsm-24 fw-300">Veja todas</span>
                    <span class="fs-52 fsm-40 fw-300 verde-inovacao">imagens</span>
                    <img src="/icons/plus-button.png" alt="ícone de mais opcões" loading="lazy">
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

const totalImages = ref(6);

const galeryClass = computed( () => {
    if(totalImages.value > 5){
        return 'type-full';
    }

    return 'type-'+totalImages.value;

    
} );

const imagens = ref(5);

</script>

<style lang="scss" src="./Galeria.scss" scoped></style>