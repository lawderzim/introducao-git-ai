# introducao-git-ai

Projeto estático em HTML/CSS/JS para praticar Git e Gitflow. Basta abrir o `index.html` no navegador, sem dependências.

## Como rodar (HTML)
Opção 1: abrir direto no navegador
```bash
open index.html
```

Opção 2 (opcional): servir localmente
```bash
# Python
python -m http.server 8080
# depois acesse: http://localhost:8080
```

## Estrutura (HTML)
```
index.html
styles.css
script.js
```

## Exercícios sugeridos (Git/Gitflow) — HTML
1. Crie uma branch de feature a partir da `main`:
   - `git checkout -b feature/melhora-titulo`
2. Edite o título em `index.html` ou o estilo em `styles.css` (por exemplo, mude a cor, fonte, ou o texto do `<h1>`). Faça commit:
   - `git add . && git commit -m "feat(ui): ajusta título e cores"`
3. Adicione um novo comportamento simples em `script.js` (por exemplo, um novo botão que altera o texto) e faça commit.
4. Abra um Pull Request e faça o merge de `feature/melhora-titulo` em `main`.
5. Crie uma branch de hotfix:
   - `git checkout -b hotfix/corrige-contraste`
   - Corrija um detalhe visual (ex.: contraste ou espaçamento) e commite.
6. Crie uma tag de versão após o merge:
   - `git tag -a v0.1.0 -m "Primeira versão HTML"`
   - `git push --tags`

Ideias extras:
- Adicionar um novo botão e estilo dedicado.
- Criar uma seção de changelog no `index.html`.
- Criar uma página `sobre.html` e linkar no menu.


