package br.gatocena.LojaCatverse.repositories;

import br.gatocena.LojaCatverse.domain.user.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

}
