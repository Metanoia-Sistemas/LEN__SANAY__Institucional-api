<template>
    <section class="links-rapidos-imovel">
        <div class="container py-35 pym-30">
            <a 
                v-for="i in 7" 
                href="#" 
                :key="i"
                class="fs-24 fsm-14 fw-500 verde-inovacao"
            >Link {{ i }}</a>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" src="./LinksRapidos.scss" scoped></style>