package br.gatocena.LojaCatverse.repositories;

import br.gatocena.LojaCatverse.domain.user.Pedido;
import br.gatocena.LojaCatverse.enums.StatusPedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    // Buscar por determinado status
    List<Pedido> findByStatus(StatusPedido status);

    // Busca todos os pedidos de um usuario especifico
    List<Pedido> findByUsuarioId(Long usuarioId);
}
