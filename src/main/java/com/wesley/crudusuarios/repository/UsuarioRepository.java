package com.wesley.crudusuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wesley.crudusuarios.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
