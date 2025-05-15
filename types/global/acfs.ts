export type acfImagem = {
    ID: number,
    id: number,
    title: string,
    filename: string,
    filesize: number,
    url: string,
    link: string,
    alt: string,
    author: string,
    description: string,
    caption: string,
    name: string,
    status: string,
    uploaded_to: number,
    date: string,
    modified: string,
    menu_order: number,
    mime_type: string,
    type: string,
    subtype: string,
    icon: string,
    width: number,
    height: number,
    sizes: {
        thumbnail: string,
        medium: string,
        medium_large: string,
        large: string,
    }
}

export type linkPadrao = {
    target: string,
    title: string,
    url: string
}