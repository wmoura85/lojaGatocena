package br.gatocena.LojaCatverse.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record PedidoResponseDTO(Long id, LocalDateTime dataPedido, String status, BigDecimal valorTotal, List<PedidoItemResponseDTO> itens) {
}
