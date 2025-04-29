package br.gatocena.LojaCatverse.dto.request;

import lombok.extern.java.Log;

public record PedidoItemRequestDTO(Long produtoId, int  quantidade) {
}
