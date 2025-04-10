import { ParamListBase } from '@react-navigation/native';
export interface CategoriaDTO {
    id: string;
    servico: string;
    icone: string;
}


export interface RouteParams extends ParamListBase {
    CategoriaEscolhida: {
        idCategoria: string;
    };
}
