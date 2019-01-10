import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from '../actions/Types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadLogin: false,
    loadCadastro: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loadCadastro: false };
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadCadastro: false };
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loadLogin: false };
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loadLogin: true };
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadCadastro: true };
        default:
            break;
    }
    return state;
};
