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

## 🔧 Comandos Úteis - Explicações Detalhadas

### 📊 Visualização e Status

#### `git status`
**O que faz:** Mostra o estado atual do repositório
**Quando usar:** Sempre antes de fazer operações importantes
```bash
git status
# Mostra:
# - Branches modificadas
# - Arquivos staged/unstaged
# - Arquivos não rastreados
# - Conflitos de merge
```

#### `git branch -a`
**O que faz:** Lista todas as branches (locais e remotas)
**Quando usar:** Para ver a estrutura completa do projeto
```bash
git branch -a
# Mostra todas as branches com * na atual
# -a = all (todas as branches)
# -r = apenas remotas
# -v = com último commit
```

#### `git log --oneline --graph --all`
**O que faz:** Mostra histórico visual de commits
**Quando usar:** Para entender o fluxo de desenvolvimento
```bash
git log --oneline --graph --all
# --oneline = uma linha por commit
# --graph = mostra ramificações visualmente
# --all = todas as branches
# --decorate = mostra nomes das branches
```

#### `git diff`
**O que faz:** Mostra diferenças entre versões
**Quando usar:** Para ver o que foi alterado
```bash
git diff                    # Diferenças no working directory
git diff --staged          # Diferenças staged para commit
git diff HEAD~1            # Diferenças com commit anterior
git diff branch1..branch2  # Diferenças entre branches
```

### 🚀 Navegação Entre Branches

#### `git checkout`
**O que faz:** Muda para uma branch existente
**Quando usar:** Para alternar entre branches
```bash
git checkout nome-da-branch
# Muda para a branch especificada
# Atualiza arquivos para o estado da branch
```

#### `git checkout -b`
**O que faz:** Cria e muda para uma nova branch
**Quando usar:** Para criar novas features/releases/hotfixes
```bash
git checkout -b feature/nova-funcionalidade
# Cria branch a partir da branch atual
# Equivale a: git branch + git checkout
```

#### `git checkout -`
**O que faz:** Volta para a branch anterior
**Quando usar:** Para alternar rapidamente entre duas branches
```bash
git checkout -
# Útil para ir e voltar entre branches
```

### 🔀 Merge e Conflitos

#### `git merge`
**O que faz:** Integra mudanças de uma branch em outra
**Quando usar:** Para incorporar features, releases, hotfixes
```bash
git merge feature/nova-funcionalidade
# Integra mudanças da feature na branch atual
# Pode gerar conflitos que precisam ser resolvidos
```

#### `git merge --abort`
**O que faz:** Cancela um merge em andamento
**Quando usar:** Quando merge dá errado e você quer voltar ao estado anterior
```bash
git merge --abort
# Volta ao estado antes do merge
# Útil quando há muitos conflitos
```

#### `git merge --no-ff`
**O que faz:** Força criação de commit de merge
**Quando usar:** Para manter histórico claro de merges
```bash
git merge --no-ff feature/nova-funcionalidade
# Cria commit de merge mesmo quando fast-forward é possível
# Mantém histórico mais claro
```

### 🏷️ Tags e Versões

#### `git tag`
**O que faz:** Cria marcação para versões específicas
**Quando usar:** Para marcar releases importantes
```bash
git tag -a v1.0.0 -m "Release v1.0.0"
# -a = tag anotada (com mensagem)
# -m = mensagem da tag
# v1.0.0 = nome da versão
```

#### `git tag -l`
**O que faz:** Lista todas as tags
**Quando usar:** Para ver versões disponíveis
```bash
git tag -l
git tag -l "v1.*"  # Filtra tags que começam com v1.
```

#### `git push --tags`
**O que faz:** Envia tags para o repositório remoto
**Quando usar:** Após criar tags localmente
```bash
git push --tags
# Envia todas as tags para o remoto
```

### 🧹 Limpeza e Organização

#### `git branch -d`
**O que faz:** Deleta branch local (se já foi mergeada)
**Quando usar:** Para limpar branches antigas
```bash
git branch -d feature/antiga
# -d = delete (só deleta se foi mergeada)
# -D = force delete (deleta mesmo sem merge)
```

#### `git clean`
**O que faz:** Remove arquivos não rastreados
**Quando usar:** Para limpar arquivos temporários
```bash
git clean -fd
# -f = force (confirma remoção)
# -d = directories (remove diretórios também)
# -n = dry run (mostra o que seria removido)
```

### 🔍 Busca e Histórico

#### `git log --grep`
**O que faz:** Busca commits por mensagem
**Quando usar:** Para encontrar commits específicos
```bash
git log --grep "feat:"
# Busca commits com "feat:" na mensagem
```

#### `git log --author`
**O que faz:** Busca commits por autor
**Quando usar:** Para ver contribuições de alguém
```bash
git log --author="nome"
# Busca commits de um autor específico
```

#### `git show`
**O que faz:** Mostra detalhes de um commit específico
**Quando usar:** Para ver o que um commit fez
```bash
git show HEAD
git show abc1234
# Mostra commit + diff das mudanças
```

### 🚨 Comandos de Emergência

#### `git reset`
**O que faz:** Volta para um estado anterior
**Quando usar:** Para desfazer commits
```bash
git reset --soft HEAD~1   # Desfaz commit, mantém mudanças staged
git reset --mixed HEAD~1  # Desfaz commit, mantém mudanças no working dir
git reset --hard HEAD~1   # Desfaz commit, PERDE todas as mudanças
```

#### `git revert`
**O que faz:** Cria novo commit que desfaz mudanças
**Quando usar:** Para desfazer commits já publicados
```bash
git revert HEAD
git revert abc1234
# Cria commit que desfaz as mudanças
# Mais seguro que reset para commits públicos
```

#### `git stash`
**O que faz:** Salva mudanças temporariamente
**Quando usar:** Para trocar de branch com mudanças não commitadas
```bash
git stash              # Salva mudanças
git stash pop          # Restaura última stash
git stash list         # Lista stashes
git stash apply        # Aplica stash sem removê-la
```

## 🎯 Comandos Mais Úteis para GitFlow

### 📈 Visualizar Estrutura do GitFlow
```bash
# Comando mais importante: ver o outline completo do GitFlow
git log --oneline --graph --all --decorate

# Versão mais detalhada
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all

# Ver apenas as branches principais
git log --oneline --graph main development

# Ver histórico de uma branch específica
git log --oneline --graph feature/nome-da-branch
```

### 🔄 Fluxo Completo de Feature
```bash
# 1. Criar feature a partir da development
git checkout development
git pull origin development
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver e commitar
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 3. Fazer merge na development
git checkout development
git merge feature/nova-funcionalidade

# 4. Deletar branch da feature
git branch -d feature/nova-funcionalidade
```

### 🏷️ Fluxo Completo de Release
```bash
# 1. Criar release a partir da development
git checkout development
git checkout -b release/v1.0.0

# 2. Fazer ajustes finais
git add .
git commit -m "chore: prepara release v1.0.0"

# 3. Merge para main
git checkout main
git merge release/v1.0.0

# 4. Criar tag
git tag -a v1.0.0 -m "Release v1.0.0"

# 5. Merge para development
git checkout development
git merge release/v1.0.0

# 6. Deletar branch de release
git branch -d release/v1.0.0
```

### 🔥 Fluxo Completo de Hotfix
```bash
# 1. Criar hotfix a partir da main
git checkout main
git checkout -b hotfix/correcao-urgente

# 2. Fazer correção
git add .
git commit -m "hotfix: corrige problema urgente"

# 3. Merge para main
git checkout main
git merge hotfix/correcao-urgente

# 4. Criar tag
git tag -a v1.0.1 -m "Hotfix v1.0.1"

# 5. Merge para development
git checkout development
git merge hotfix/correcao-urgente

# 6. Deletar branch de hotfix
git branch -d hotfix/correcao-urgente
```

## 🎨 Comandos para Visualização Avançada

### 📊 Ver Estrutura Completa do Projeto
```bash
# Comando mais útil para entender o GitFlow
git log --oneline --graph --all --decorate --color=always | head -20

# Ver branches e seus últimos commits
git for-each-ref --format='%(refname:short) %(objectname:short) %(contents:subject)' refs/heads/

# Ver diferenças entre branches
git log --oneline --graph main..development
git log --oneline --graph development..feature/nova-funcionalidade
```

### 🔍 Comandos de Debugging
```bash
# Ver o que mudou em cada commit
git log --stat

# Ver arquivos modificados em cada branch
git diff --name-only main development

# Ver quem modificou cada linha
git blame arquivo.txt

# Ver histórico de um arquivo específico
git log --follow -- arquivo.txt
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

## 📋 Referência Rápida - Comandos Essenciais

### 🎯 **Comando Mais Importante para GitFlow**
```bash
# Ver outline completo do GitFlow
git log --oneline --graph --all --decorate
```

### 🔥 **Top 10 Comandos Mais Usados**

| Comando | O que faz | Quando usar |
|---------|-----------|-------------|
| `git status` | Mostra estado atual | Sempre antes de operações |
| `git checkout -b feature/nome` | Cria nova branch | Início de nova feature |
| `git add .` | Adiciona mudanças | Antes de commit |
| `git commit -m "mensagem"` | Salva mudanças | Após fazer alterações |
| `git merge branch-name` | Integra branches | Após desenvolver feature |
| `git log --oneline --graph --all` | Ver histórico visual | Para entender estrutura |
| `git branch -a` | Lista todas branches | Para ver estrutura |
| `git checkout branch-name` | Muda de branch | Para alternar entre branches |
| `git tag -a v1.0.0 -m "Release"` | Cria tag de versão | Após release |
| `git branch -d branch-name` | Deleta branch | Após merge |

### 🚨 **Comandos de Emergência**
```bash
git reset --hard HEAD~1    # Desfaz último commit (CUIDADO!)
git merge --abort          # Cancela merge em andamento
git checkout -             # Volta para branch anterior
git stash                  # Salva mudanças temporariamente
```

### 📊 **Comandos de Visualização**
```bash
# Ver estrutura completa
git log --oneline --graph --all --decorate

# Ver diferenças entre branches
git diff main..development

# Ver histórico de um arquivo
git log --follow -- arquivo.txt

# Ver quem modificou cada linha
git blame arquivo.txt
```

### 🔄 **Fluxos Completos**

#### **Nova Feature:**
```bash
git checkout development
git checkout -b feature/nova-funcionalidade
# ... desenvolver ...
git add . && git commit -m "feat: nova funcionalidade"
git checkout development
git merge feature/nova-funcionalidade
git branch -d feature/nova-funcionalidade
```

#### **Nova Release:**
```bash
git checkout development
git checkout -b release/v1.0.0
# ... ajustes finais ...
git add . && git commit -m "chore: prepara release v1.0.0"
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0"
git checkout development
git merge release/v1.0.0
git branch -d release/v1.0.0
```

#### **Hotfix Urgente:**
```bash
git checkout main
git checkout -b hotfix/correcao-urgente
# ... corrigir ...
git add . && git commit -m "hotfix: correção urgente"
git checkout main
git merge hotfix/correcao-urgente
git tag -a v1.0.1 -m "Hotfix v1.0.1"
git checkout development
git merge hotfix/correcao-urgente
git branch -d hotfix/correcao-urgente
```

### 🎨 **Comandos Avançados para Visualização**
```bash
# Histórico colorido e detalhado
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all

# Ver branches e últimos commits
git for-each-ref --format='%(refname:short) %(objectname:short) %(contents:subject)' refs/heads/

# Ver arquivos modificados por branch
git diff --name-only main development
```

### 💡 **Dicas Importantes**

1. **Sempre use `git status`** antes de operações importantes
2. **Resolva conflitos com cuidado** - mantenha ambas as funcionalidades
3. **Use mensagens de commit descritivas** (feat:, fix:, chore:, etc.)
4. **Mantenha a main sempre estável** - só merge releases e hotfixes
5. **Delete branches após merge** para manter organização
6. **Use tags para marcar versões** importantes
7. **Teste o projeto** após cada merge importante

### 🆘 **Se Algo Der Errado**
```bash
# Cancelar merge
git merge --abort

# Voltar para commit anterior
git reset --hard HEAD~1

# Ver o que mudou
git diff HEAD~1

# Salvar mudanças temporariamente
git stash

# Ver histórico para entender o que aconteceu
git log --oneline --graph --all
```

---

**Boa aula! 🎓** 

Lembre-se: GitFlow é sobre **organização** e **controle de versões**. Pratique bastante e não tenha medo de experimentar! Use sempre o comando `git log --oneline --graph --all --decorate` para visualizar a estrutura do seu GitFlow.