package br.gatocena.LojaCatverse.repositories;

import br.gatocena.LojaCatverse.domain.user.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
