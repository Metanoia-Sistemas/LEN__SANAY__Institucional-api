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

export const generatePlaceholder = (size: string, variacao: 1 | 2 | 3 | 4 = 1) => {
    switch (variacao) {
        case 1:
            return `https://placehold.co/${size}/0A544D/ABE2B1?font=poppins`;

        case 2: 
            return `https://placehold.co/${size}/2F302A/F7F6F5?font=poppins`;

        case 4: 
            return `https://placehold.co/${size}?font=poppins`;

        default:
            return `https://placehold.co/${size}/68D4FF/2F302A?font=poppins`;
    }
}