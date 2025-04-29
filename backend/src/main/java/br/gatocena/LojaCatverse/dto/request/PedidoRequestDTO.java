package br.gatocena.LojaCatverse.dto.request;

import java.util.List;

public record PedidoRequestDTO(List<PedidoItemRequestDTO> itens) {
}
