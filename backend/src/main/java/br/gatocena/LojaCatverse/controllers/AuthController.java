package br.gatocena.LojaCatverse.controllers;

import br.gatocena.LojaCatverse.domain.user.Usuario;
import br.gatocena.LojaCatverse.dto.request.LoginRequestDTO;
import br.gatocena.LojaCatverse.dto.request.RegisterRequestDTO;
import br.gatocena.LojaCatverse.dto.response.ResponseDTO;
import br.gatocena.LojaCatverse.enums.TipoUsuario;
import br.gatocena.LojaCatverse.infra.security.TokenService;
import br.gatocena.LojaCatverse.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body) {
        Usuario usuario = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("Usuario não encontrado!"));
        if (passwordEncoder.matches(body.password(), usuario.getPassword())) {
            String token = this.tokenService.generateToken(usuario);
            return  ResponseEntity.ok(new ResponseDTO(usuario.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO body) {
        Optional<Usuario> usuario = this.repository.findByEmail(body.email());


        if (usuario.isEmpty()) {
            Usuario novoUsuario = new Usuario();
            novoUsuario.setPassword(passwordEncoder.encode(body.password()));
            novoUsuario.setEmail(body.email());
            novoUsuario.setNome(body.nome());
            TipoUsuario tipo = body.tipoUsuario() != null
                    ? TipoUsuario.valueOf(body.tipoUsuario().toUpperCase(Locale.ROOT))
                    : TipoUsuario.CLIENTE;

            novoUsuario.setTipoUsuario(tipo);

            this.repository.save(novoUsuario);

            String token = this.tokenService.generateToken(novoUsuario);
            return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
