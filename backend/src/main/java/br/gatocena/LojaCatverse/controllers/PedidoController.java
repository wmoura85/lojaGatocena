package br.gatocena.LojaCatverse.controllers;

import br.gatocena.LojaCatverse.domain.user.Pedido;
import br.gatocena.LojaCatverse.domain.user.PedidoItem;
import br.gatocena.LojaCatverse.domain.user.Produto;
import br.gatocena.LojaCatverse.domain.user.Usuario;
import br.gatocena.LojaCatverse.dto.request.PedidoRequestDTO;
import br.gatocena.LojaCatverse.dto.response.PedidoItemResponseDTO;
import br.gatocena.LojaCatverse.dto.response.PedidoResponseDTO;
import br.gatocena.LojaCatverse.enums.StatusPedido;
import br.gatocena.LojaCatverse.repositories.PedidoItemRepository;
import br.gatocena.LojaCatverse.repositories.PedidoRepository;
import br.gatocena.LojaCatverse.repositories.ProdutoRepository;
import br.gatocena.LojaCatverse.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/pedidos")
@RequiredArgsConstructor
public class PedidoController {
    private final PedidoRepository pedidoRepository;
    private final PedidoItemRepository pedidoItemRepository;
    private final ProdutoRepository produtoRepository;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<PedidoResponseDTO> criar(@RequestBody PedidoRequestDTO dto,
                                                   @AuthenticationPrincipal UserDetails userDetails) {
        Usuario usuario = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();

        Pedido pedido = new Pedido();
        pedido.setUsuario(usuario);
        pedido.setDataPedido(LocalDateTime.now());
        pedido.setStatus(StatusPedido.AGUARDANDO_PAGAMENTO);

        Pedido pedidoSalvo = pedidoRepository.save(pedido);

        List<PedidoItem> itens = dto.itens().stream().map(itemDto -> {
            Produto produto = produtoRepository.findById(itemDto.produtoId()).orElseThrow();
            PedidoItem item = new PedidoItem();
            item.setPedido_id(pedido);
            item.setProduto(produto);
            item.setQtd(itemDto.quantidade());
            item.setPrecoUnit(produto.getPreco());
            return pedidoItemRepository.save(item);
        }).collect(Collectors.toList());

            pedido.setItens(itens);
            pedido.calcularValorTotal();
            pedidoRepository.save(pedidoSalvo);

            List<PedidoItemResponseDTO> itensDto = itens.stream().map(item -> new PedidoItemResponseDTO(
                    item.getProduto().getNome(),
                    item.getProduto().getTamanho(),
                    item.getQtd(),
                    item.getPrecoUnit(),
                    item.getSubtotal()
            )).collect(Collectors.toList());

            return ResponseEntity.ok(new PedidoResponseDTO(pedido.getId(), pedido.getDataPedido(), pedido.getStatus().name(), pedido.getValorTotal(), itensDto));

    }
}
