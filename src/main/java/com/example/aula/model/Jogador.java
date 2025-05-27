package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "tab_jogador")
public class Jogador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotNull(message = "Informação obrigatória")
    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @NotNull(message = "Idade é obrigatória")
    private int idade;

    @NotNull(message = "Altura é obrigatória")
    private double altura;

    @NotNull(message = "Peso é obrigatório")
    private double peso;

    @NotBlank(message = "Posição é obrigatório")
    private String posicao;

    @NotNull(message = "Número da camisa é obrigatório")
    private int numeroCamisa;

    public Jogador() {
    }

    public Jogador(Long id, String nome, Sexo sexo, int idade, float altura, double peso, String posicao, int numeroCamisa) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.posicao = posicao;
        this.numeroCamisa = numeroCamisa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório.") String nome) {
        this.nome = nome;
    }

    public @NotNull(message = "Informação obrigatória") Sexo getSexo() {
        return sexo;
    }

    public void setSexo(@NotNull(message = "Informação obrigatória") Sexo sexo) {
        this.sexo = sexo;
    }

    @NotNull(message = "Idade é obrigatória")
    public int getIdade() {
        return idade;
    }

    public void setIdade(@NotNull(message = "Idade é obrigatória") int idade) {
        this.idade = idade;
    }

    @NotNull(message = "Altura é obrigatória")
    public double getAltura() {
        return altura;
    }

    public void setAltura(@NotNull(message = "Altura é obrigatória") double altura) {
        this.altura = altura;
    }

    @NotNull(message = "Peso é obrigatório")
    public double getPeso() {
        return peso;
    }

    public void setPeso(@NotNull(message = "Peso é obrigatório") double peso) {
        this.peso = peso;
    }

    public @NotBlank(message = "Posição é obrigatório") String getPosicao() {
        return posicao;
    }

    public void setPosicao(@NotBlank(message = "Posição é obrigatório") String posicao) {
        this.posicao = posicao;
    }

    @NotNull(message = "Número da camisa é obrigatório")
    public int getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(@NotNull(message = "Número da camisa é obrigatório") int numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }
}
