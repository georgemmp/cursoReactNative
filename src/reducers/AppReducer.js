import { 
    MODICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO
 } from '../actions/Types';

const INITIAL_STATE = {
    adicionar_contato_email: '',
    cadastro_resultado_txt_erro: '',
    cadastro_resultado_inclusao: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MODICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adicionar_contato_email: action.payload };
        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload };
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload, adicionar_contato_email: '' };
        default:
            return state;
    }
};
