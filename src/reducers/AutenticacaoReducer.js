const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload };
        case 'modifica_email':
            return { ...state, email: action.payload };
        case 'modifica_senha':
            return { ...state, senha: action.payload };
        case 'cadastroUsuarioErro':
            return { ...state, erroCadastro: action.payload };
        default:
            break;
    }
    return state;
};
