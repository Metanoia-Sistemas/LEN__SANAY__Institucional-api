import type { retornoPadraoAction } from '~/types/global/requisicoes';

export const realizarRequisicaoJSON = async ( 
    endpoint : string , 
    body: any = null,
    method: string = 'GET',
    useHeaders : boolean = true,
): Promise<retornoPadraoAction> => {
    return await enviarRequisicao(endpoint, body, method, useHeaders, 'JSON');
};


export const realizarRequisicaoQueryString = async ( 
    endpoint : string , 
    params: any = null,
    method: string = 'GET',
    useHeaders : boolean = true,
): Promise<retornoPadraoAction> => {
    return await enviarRequisicao(endpoint, params, method, useHeaders, 'queryString');
};


export const enviarRequisicao = async (
    endpoint : string , 
    body: any = null,
    method: string = 'GET',
    useHeaders : boolean = true,
    type: string = 'JSON',
): Promise<retornoPadraoAction> => {

    const appConfig = useRuntimeConfig().public;
    const apiBase = appConfig.API_BASE;


    let objRetorno: retornoPadraoAction = { 
        sucesso : true,
        mensagem : 'Requisição finalizada com sucesso.',
        error : false,
        data : false
    }

    let requestData: {
        method: string,
        body?: any,
        params?: any,
        initialCache: boolean,
        headers : {}
    } = { method, initialCache: false, headers : {} }

    if( type == 'JSON' ){
        requestData.body = body;
    }

    if( type == 'queryString' ){
        requestData.params = body;
    }

    if(useHeaders){
        requestData.headers = {
        }
    }

    const urlCompleta = apiBase+endpoint;

    try {
        const { 
            data : respostaRequisicao, 
            error : erroRequisicao 
        } = await useFetch(
            urlCompleta,
            requestData as any
        );
        
        if( erroRequisicao.value ){
            if( erroRequisicao.value.statusCode == 404  ){
                throw erroRequisicao.value;
            }            

            objRetorno.error = {
                codigo : erroRequisicao.value?.statusCode ,
                data : erroRequisicao.value?.data
            }

            objRetorno.sucesso = false;
            objRetorno.mensagem = 'Um erro ocorreu durante a requisição.';
        }

        if(respostaRequisicao.value){
            objRetorno.data = respostaRequisicao.value;
        }

        return objRetorno;

    } catch (error: any) {
        console.error( error );

        if( error.statusCode ){
            if( error.statusCode == 404 ){
                showError( { 
                    statusCode: error.statusCode ,
                    statusMessage : 'Página não encontrada.'
                } );
            }
        }

        showError( { statusCode: 500 } );
    }

    return objRetorno;
}