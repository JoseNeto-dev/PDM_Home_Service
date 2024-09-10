export interface PrestadorDTO {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    foto?: string; // Campo opcional
    prestador: {
        cnpj: string;
        horarioDisponibilidade: string;
        latitude?: number;
        longitude?: number;
    };
}