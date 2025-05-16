<template>
    <section class="banner-imovel">
        <div class="container-img bg">
            <picture>
                <source media="(min-width: 600px )" :srcset="generatePlaceholder('1920x1080')">
                <img :src="generatePlaceholder('600x850')" alt="">
            </picture>
        </div>

        <div class="container off-white">
            <div class="left">
                <p class="lancamento fs-24 fsm-18">
                    Lançamento
                </p>

                <h1 class="nome-imovel mb-25 mbm-25 fs-52 fsm-32 fw-500 branco">
                    Sampa <br>
                    Consolação
                </h1>

                <div class="descricao fs-32 fsm-20">
                    <span class="dorms fw-500">Studios</span>
                    <span class="fw-600">|</span>
                    <span class="metragem fw-500"> 28 e 30 m²</span>
                    <span class="fw-600">|</span>
                    <span class="vagas fw-500">X vaga</span>
                </div>
            </div>

            <div class="right hide-mobile">
                <picture>
                    <img :src="generatePlaceholder('320x140', 3)" alt="" loading="lazy">
                </picture>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style src="./Banner.scss" scoped></style>