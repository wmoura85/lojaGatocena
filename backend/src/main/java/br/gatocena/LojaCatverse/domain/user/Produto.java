package br.gatocena.LojaCatverse.domain.user;

import br.gatocena.LojaCatverse.enums.TamanhoCamiseta;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "produtos")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private BigDecimal preco;

    @Enumerated(EnumType.STRING)
    private TamanhoCamiseta tamanho = TamanhoCamiseta.P;

    @OneToMany(mappedBy = "produto")
    private List<PedidoItem> itens = new ArrayList<>();
}
