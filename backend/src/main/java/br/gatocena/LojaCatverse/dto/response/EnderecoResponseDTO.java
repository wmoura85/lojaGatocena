package br.gatocena.LojaCatverse.dto.response;

import br.gatocena.LojaCatverse.enums.TipoEndereco;

public record EnderecoResponseDTO(Long id, String rua, String numero, String cidade, String cep, TipoEndereco tipo) {
}
