<template>
    <div>
        <NuxtLoadingIndicator color="#68D4FF" :height="10" />

        <NuxtPage />
    </div>
</template>

<script lang="ts" setup>

const route = useRoute();
    useHead(() => {
        return {
            link: [
                {
                    rel: 'canonical',
                    href: '' + route.path,
                },
            ],
            htmlAttrs: {
                lang: 'pt-BR'
            }
        };
    })
</script>