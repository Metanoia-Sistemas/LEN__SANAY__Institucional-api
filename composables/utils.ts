import type { acfImagem } from "~/types/global/acfs";

export const getAlt = (imagem: acfImagem) => {
    if( imagem.alt !== '' ){
        return imagem.alt
    }

    if( imagem.caption !== '' ){
        return imagem.caption;
    }

    if(imagem.description !== ''){
        return imagem.description;
    }

    return imagem.title;
}