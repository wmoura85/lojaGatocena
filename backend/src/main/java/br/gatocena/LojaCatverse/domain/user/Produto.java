package br.gatocena.LojaCatverse.domain.user;

import br.gatocena.LojaCatverse.enums.TamanhoCamiseta;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Enumerated(EnumType.STRING)
    private TamanhoCamiseta tamanho = TamanhoCamiseta.P;

    @OneToMany(mappedBy = "produto")
    private List<PedidoItem> itens = new ArrayList<>();
}
