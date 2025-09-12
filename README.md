# 🚀 Aula Prática de GitFlow

Projeto estático em HTML/CSS/JS para praticar Git e GitFlow. Este repositório foi preparado com uma estrutura completa do GitFlow para simular um ambiente real de desenvolvimento.

## 📋 Estrutura do Repositório

### Branches Disponíveis:
- **`main`** - Branch principal de produção
- **`development`** - Branch de desenvolvimento (com conflitos!)
- **`feature/*`** - Branches de funcionalidades
- **`release/*`** - Branches de release
- **`hotfix/*`** - Branches de correções urgentes

### Funcionalidades Implementadas:
- ✅ Botão para mudar cor do título
- ✅ Modal interativo
- ✅ Contador de cliques
- ✅ Validação de entrada
- ✅ Estilos melhorados com transições

## 🎯 Objetivos da Aula

1. **Resolver conflitos de merge**
2. **Fazer merge de features**
3. **Criar e gerenciar releases**
4. **Aplicar hotfixes**
5. **Criar tags de versão**

## 📚 Passo a Passo da Aula

### 1. 🔍 Explorar a Estrutura Atual

```bash
# Ver todas as branches
git branch -a

# Ver histórico de commits
git log --oneline --graph --all

# Ver status atual
git status
```

### 2. 🚨 Resolver Conflitos de Merge

**Situação:** A branch `development` tem conflitos de merge que precisam ser resolvidos.

```bash
# Ir para a branch development
git checkout development

# Ver o conflito no arquivo styles.css
git status

# Abrir o arquivo e resolver o conflito manualmente
# Procurar por: <<<<<<< HEAD, =======, >>>>>>> feature/adicionar-modal
```

**Como resolver:**
1. Abra o arquivo `styles.css`
2. Encontre os marcadores de conflito:
   ```
   <<<<<<< HEAD
   .tips { ... }
   =======
   /* Modal Styles */
   .modal { ... }
   >>>>>>> feature/adicionar-modal
   ```
3. Mantenha ambas as seções (`.tips` e `.modal`)
4. Remova os marcadores de conflito
5. Salve o arquivo

```bash
# Após resolver o conflito
git add styles.css
git commit -m "resolve: conflito de merge em styles.css"
```

### 3. 🔄 Fazer Merge de Features

```bash
# Merge da feature contador
git merge feature/adicionar-contador

# Merge da feature validação
git merge feature/adicionar-validacao
```

### 4. 🏷️ Criar Release

```bash
# Criar branch de release a partir da development
git checkout -b release/v1.2.0

# Fazer ajustes finais (opcional)
# Exemplo: atualizar versão no título
git add .
git commit -m "chore: prepara release v1.2.0"

# Merge da release para main
git checkout main
git merge release/v1.2.0

# Criar tag de versão
git tag -a v1.2.0 -m "Release v1.2.0 - Novas funcionalidades"
```

### 5. 🔥 Aplicar Hotfix

```bash
# Aplicar hotfix existente
git checkout main
git merge hotfix/corrigir-titulo

# Criar nova tag
git tag -a v1.2.1 -m "Hotfix v1.2.1 - Correção no título"

# Merge do hotfix para development
git checkout development
git merge hotfix/corrigir-titulo
```

### 6. 🧹 Limpeza das Branches

```bash
# Deletar branches locais já mergeadas
git branch -d feature/adicionar-contador
git branch -d feature/adicionar-modal
git branch -d feature/melhorar-estilos
git branch -d feature/adicionar-validacao
git branch -d hotfix/corrigir-titulo
git branch -d release/v1.0.0
git branch -d release/v1.1.0
git branch -d release/v1.2.0
```

## 🎮 Exercícios Práticos

### Exercício 1: Nova Feature
```bash
# Criar nova feature
git checkout development
git checkout -b feature/nova-funcionalidade

# Fazer alterações (ex: adicionar novo botão)
# Fazer commit
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Merge para development
git checkout development
git merge feature/nova-funcionalidade
```

### Exercício 2: Hotfix Urgente
```bash
# Criar hotfix a partir da main
git checkout main
git checkout -b hotfix/correcao-urgente

# Fazer correção
# Fazer commit
git add .
git commit -m "hotfix: corrige problema urgente"

# Merge para main e development
git checkout main
git merge hotfix/correcao-urgente

git checkout development
git merge hotfix/correcao-urgente
```

### Exercício 3: Release Completa
```bash
# Criar release
git checkout development
git checkout -b release/v2.0.0

# Fazer ajustes finais
git add .
git commit -m "chore: prepara release v2.0.0"

# Merge para main
git checkout main
git merge release/v2.0.0

# Criar tag
git tag -a v2.0.0 -m "Release v2.0.0 - Versão principal"

# Merge para development
git checkout development
git merge release/v2.0.0
```

## 🔧 Comandos Úteis

### Visualização
```bash
# Ver branches
git branch -a

# Ver histórico
git log --oneline --graph --all

# Ver diferenças
git diff

# Ver status
git status
```

### Navegação
```bash
# Mudar de branch
git checkout nome-da-branch

# Criar e mudar para nova branch
git checkout -b nova-branch

# Voltar para branch anterior
git checkout -
```

### Merge e Conflitos
```bash
# Fazer merge
git merge nome-da-branch

# Abortar merge em caso de conflito
git merge --abort

# Ver arquivos em conflito
git status
```

### Tags
```bash
# Criar tag
git tag -a v1.0.0 -m "Mensagem da tag"

# Ver tags
git tag

# Push das tags
git push --tags
```

## 🚀 Como Rodar o Projeto

### Opção 1: Abrir direto no navegador
```bash
open index.html
```

### Opção 2: Servir localmente
```bash
# Python
python -m http.server 8080
# Acesse: http://localhost:8080

# Node.js (se tiver instalado)
npx serve .
```

## 📁 Estrutura de Arquivos
```
├── index.html          # Página principal
├── styles.css          # Estilos (com conflitos!)
├── script.js           # JavaScript
└── README.md           # Este arquivo
```

## 🎯 Dicas para a Aula

1. **Sempre verifique o status** antes de fazer operações
2. **Resolva conflitos com cuidado** - mantenha ambas as funcionalidades
3. **Use mensagens de commit descritivas**
4. **Teste o projeto** após cada merge
5. **Mantenha a main sempre estável**

## 🆘 Comandos de Emergência

```bash
# Desfazer último commit (mantendo alterações)
git reset --soft HEAD~1

# Desfazer último commit (perdendo alterações)
git reset --hard HEAD~1

# Voltar para commit específico
git reset --hard <hash-do-commit>

# Forçar push (cuidado!)
git push --force-with-lease
```

---

**Boa aula! 🎓** Lembre-se: GitFlow é sobre organização e controle de versões. Pratique bastante e não tenha medo de experimentar!