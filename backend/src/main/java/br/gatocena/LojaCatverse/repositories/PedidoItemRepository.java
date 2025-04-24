package br.gatocena.LojaCatverse.repositories;

import br.gatocena.LojaCatverse.domain.user.PedidoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoItemRepository extends JpaRepository<PedidoItem, Long> {
}
