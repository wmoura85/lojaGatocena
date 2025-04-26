package br.gatocena.LojaCatverse.controllers;

import br.gatocena.LojaCatverse.domain.user.Usuario;
import br.gatocena.LojaCatverse.dto.UsuarioRequestDTO;
import br.gatocena.LojaCatverse.dto.UsuarioResponseDTO;
import br.gatocena.LojaCatverse.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public UsuarioResponseDTO criar(@RequestBody UsuarioRequestDTO dto) {
        Usuario usuario = new Usuario();
        usuario.setNome(dto.nome());
        usuario.setEmail(dto.email());
        usuario.setPassword(dto.password());

        return new UsuarioResponseDTO(usuario.getId(), usuario.getNome(), usuario.getEmail());
    }

    @GetMapping
    public List<UsuarioResponseDTO> listar() {
        return userRepository.findAll().stream()
                .map(u -> new UsuarioResponseDTO(u.getId(), u.getNome(), u.getEmail()))
                .collect(Collectors.toList());
    }
}
