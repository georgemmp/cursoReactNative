import { MODICA_ADICIONA_CONTATO_EMAIL } from '../actions/Types';

const INITIAL_STATE = {
    adicionar_contato_email: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MODICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adicionar_contato_email: action.payload };
        default:
            return state;
    }
};
