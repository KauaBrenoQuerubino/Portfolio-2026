export interface Projeto {
    url_image : string,
    url_video : string,
    nome : string,
    descricao: string,
    link_repositorio: string,
    link_download: string,
    tecnologias: string[]
}

export const PROJETO_PADRAO: Projeto[] = [

    {
        url_image : "imgs/OIP.jfif",
        url_video : "video/videoteste.mp4",
        nome : "PROJETO 2",
        descricao: "lorem ipson teste2",
        link_repositorio: "link",
        link_download: "https://github.com/KauaBrenoQuerubino/KauaBrenoQuerubino/archive/refs/heads/main.zip",

        tecnologias: [
            "angular", "java"
        ]
    }

];