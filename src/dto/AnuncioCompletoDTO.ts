export interface AnuncioCompletoDTO {
  id: string;
  titulo: string;
  descricao: string;
  preco: string;
  dtCriacao: string;
  dtAtualizacao: string;
  prestadorId: string;
  categoriaId: string;
  fotoCategoria: string;
  prestador: {
    cnpj: string;
    horarioDisponibilidade: string;
    usuarioIdPrestador: string;
    latitude: number;
    longitude: number;
  }
  usuario: {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    foto?: string; // Campo opcional
  }
  categoria: {
    id: string;
    servico: string;
    icone: string;
  }
}