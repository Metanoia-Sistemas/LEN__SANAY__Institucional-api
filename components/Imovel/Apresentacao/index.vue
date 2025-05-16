<template>
    <section class="apresentacao-imovel pt-130">
        <div class="container full">
            <div class="wrapper-content branco pb-70 ptm-80 pbm-160">
                <p class="status fs-24 fsm-18 verde-inovacao">
                    Lançamento
                </p>

                <h2 class="nome-imovel fs-52 fsm-32 fw-500">
                    Sampa Consolação
                </h2>

                <p class="text fs-18 fsm-18 mt-45 mtm-45">
                    Lorem ipsum dolor sit amet consectetur. Et enim molestie sed elementum. 
                    Ac convallis velit erat vitae tellus lorem.. Blandit nullam blandit morbi 
                    in ultricies nec sed.. Cursus condimentum nisl commodo integer massa velit 
                    egestas nibh mattis..

                    <br><br>

                    Lorem ipsum dolor sit amet consectetur. Et enim molestie sed elementum. 
                    Ac convallis velit erat vitae tellus lorem.. Blandit nullam blandit morbi 
                    in ultricies nec sed.. Cursus condimentum nisl commodo integer massa velit 
                    egestas nibh mattis..
                </p>

                <div class="address mt-45 mtm-45">
                    <h3 class="label fs-40 fsm-32 mb-20 mbm-20 fw-500">
                        Localização
                    </h3>

                    <p class="fs-20 fsm-18">
                        Rua Américo de Campos, 39 – Liberdade
                    </p>
                </div>

                <div class="disclaimer mt-100 mtm-80">
                    <div class="top fs-12 fsm-12">
                        <img src="/icons/alert-circle.png" alt="ícone de informação" loading="lazy">
                        <p>
                            O EMPREENDIMENTO POSSUIRÁ UNIDADES HIS E HMP, SENDO QUE AS 
                            CONDIÇÕES DE AQUISIÇÃO CONSTAM DO INSTRUMENTO DE PROMESSA DE 
                            VENDA E COMPRA, BEM COMO DO DECRETO 63.130/2024.
                        </p>
                    </div>

                    <button class="primary button mt-25 mtm-30">
                        <span>Saiba mais</span>
                        <img src="/icons/arrow-right-circle.png" alt="ícone com seta" loading="lazy">
                    </button>
                </div>
            </div>

            <div class="wrapper-featured-img">
                <picture class="container-img">
                    <img :src="generatePlaceholder('800x950', 4)" alt="" loading="lazy">
                </picture>
            </div>

            <div class="wrapper-grafismo">
                <picture>
                    <source media="(max-width: 900px)" srcset="/grafismos/im-apresentacao-mobile.png">

                    <img src="/grafismos/im-apresentacao-desk.png" alt="" loading="lazy">
                </picture>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" src="./Apresentacao.scss"></style>