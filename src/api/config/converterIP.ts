import { AnuncioCompletoDTO } from "../../dto/AnuncioCompletoDTO";

const substituirLocalhostPorIp = (url: string, enderecoIp: string): string => {
    return url.replace('localhost', enderecoIp);
  };
  
  export const processarAnuncios = (anuncios: AnuncioCompletoDTO[], enderecoIp: string): AnuncioCompletoDTO[] => {
    return anuncios.map((anuncio) => ({
      ...anuncio,
      categoria: {
        ...anuncio.categoria,
        icone: substituirLocalhostPorIp(anuncio.categoria.icone, enderecoIp),
      },
      prestador: {
        ...anuncio.prestador,
        usuario: {
          ...anuncio.prestador.usuario,
          foto: anuncio.prestador.usuario.foto
            ? substituirLocalhostPorIp(anuncio.prestador.usuario.foto, enderecoIp)
            : undefined,
        },
      },
    }));
  };