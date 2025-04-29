package br.gatocena.LojaCatverse.dto.response;

import br.gatocena.LojaCatverse.enums.TamanhoCamiseta;

import java.math.BigDecimal;

public record PedidoItemResponseDTO(String nomeProduto, TamanhoCamiseta tamanho, int quantidade, BigDecimal precoUnit, BigDecimal subtotal) {
}
