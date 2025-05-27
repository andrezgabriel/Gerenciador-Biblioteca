class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  exibirInformacoes() {
    return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`;
  }
}

const biblioteca = [];

function adicionarLivro() {
  const titulo = prompt("Digite o título do livro:");
  if (!titulo) {
    alert("Título inválido.");
    return;
  }
  const autor = prompt("Digite o autor do livro:");
  if (!autor) {
    alert("Autor inválido.");
    return;
  }
  const anoStr = prompt("Digite o ano de publicação do livro:");
  const ano = parseInt(anoStr);
  if (isNaN(ano) || ano < 0) {
    alert("Ano inválido.");
    return;
  }

  const novoLivro = new Livro(titulo, autor, ano);
  biblioteca.push(novoLivro);
  alert("Livro adicionado com sucesso!");
}

function buscarLivro() {
  const tituloBusca = prompt("Digite o título do livro para buscar:");
  if (!tituloBusca) {
    alert("Título inválido.");
    return;
  }

  const livroEncontrado = biblioteca.find(
    livro => livro.titulo.toLowerCase() === tituloBusca.toLowerCase()
  );

  if (livroEncontrado) {
    alert("Livro encontrado:\n\n" + livroEncontrado.exibirInformacoes());
  } else {
    alert("Livro não encontrado.");
  }
}

function listarLivros() {
  if (biblioteca.length === 0) {
    alert("A biblioteca está vazia.");
    return;
  }
  
  let lista = "Livros na biblioteca:\n\n";
  for (const livro of biblioteca) {
    lista += livro.exibirInformacoes() + "\n\n";
  }
  alert(lista);
}

function calcularMediaIdadeLivros() {
  if (biblioteca.length === 0) {
    alert("Não há livros para calcular estatísticas.");
    return;
  }

  const anoAtual = new Date().getFullYear();
  const somaIdades = biblioteca.reduce((total, livro) => {
    return total + (anoAtual - livro.ano);
  }, 0);

  const media = somaIdades / biblioteca.length;
  alert(`Média de idade dos livros: ${media.toFixed(2)} anos`);
}

function menu() {
  let opcao;
  do {
    opcao = prompt(
      "Gerenciador de Biblioteca\n\n" +
      "1 - Adicionar livro\n" +
      "2 - Buscar livro\n" +
      "3 - Listar livros\n" +
      "4 - Estatísticas (média de idade)\n" +
      "5 - Sair\n\n" +
      "Digite o número da opção desejada:"
    );

    switch (opcao) {
      case "1":
        adicionarLivro();
        break;
      case "2":
        buscarLivro();
        break;
      case "3":
        listarLivros();
        break;
      case "4":
        calcularMediaIdadeLivros();
        break;
      case "5":
        alert("Saindo do gerenciador. Até mais!");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "5");
}

// Iniciar o programa
menu();
