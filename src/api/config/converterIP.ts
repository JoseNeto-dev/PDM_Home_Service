import { AnuncioCompletoDTO } from "../../dto/AnuncioCompletoDTO";
import { PrestadorDTO } from "../../dto/GetPrestadorDTO";

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

  export const processarPrestador = (prestadores: PrestadorDTO[], enderecoIp: string): PrestadorDTO[] => {
    return prestadores.map((prestador) => ({
      ...prestador,
      foto: prestador.foto
        ? substituirLocalhostPorIp(prestador.foto, enderecoIp)
        : undefined,
    }));
  };
