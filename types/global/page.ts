import type { SEO } from "./seo"

export type paginaPadrao = {
    slug: string,
    type: string,
    title: string,
    post_id: number,
    content: string,
    SEO: SEO,
    taxonomies: {
        [key: string] : {
            term_id: number,
            name: string,
            slug: string,
            term_group: number,
            term_taxonomy_id: number,
            taxonomy: string,
            description: string,
            parent: number,
            count: number,
            filter: string,
            term_order: string,
            nome? : string
        }[]
    },
    thumbnail: boolean | string,
    acfs: {
        integracao_crm_page: {
            mtnstudio: {
                mtn_chat: string,
                mtn_email: string,
                mtn_ligamos: string,
                mtn_produto: string,
                mtn_whatsapp: string,
            }
        }
    },
    prev_post: false | string,
    next_post: false | string,
}


