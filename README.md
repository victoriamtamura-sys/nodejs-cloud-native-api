Este repositório contém uma API RESTful em Node.js (TypeScript) com conteinerização, manifestos de orquestração para Kubernetes e pipeline automatizado de CI/CD.

PT: Esta aplicação API RESTful foi construída para demonstrar arquitetura Cloud-Native, conteinerização com Docker (Multi-stage build), orquestração via Kubernetes (K8s) e automação de testes/deploy via GitHub Actions.

Como Funciona | How It Works
PT:

Ambiente Local (Docker Compose): O desenvolvedor executa o ambiente local com a API e o banco de dados PostgreSQL isolados em contêineres através de um único comando.

Construção da Imagem (Multi-stage Build): O Dockerfile realiza o build da aplicação separando o estágio de compilação do TypeScript do ambiente de execução, gerando uma imagem final leve e rodando com usuário sem privilégios de root.

Esteira de CI/CD (GitHub Actions): A cada Push ou Pull Request na branch main, a esteira automatizada executa verificação de código (lint), compilação do projeto e testes.

Orquestração no Kubernetes (K8s):

ConfigMaps e Secrets: Injetam variáveis de ambiente e credenciais do banco de dados nos pods de forma desvinculada do código.

Deployments: Gerenciam réplicas da API garantindo atualizações sem pausa no serviço (Rolling Updates).

Services: Expõem os pods internamente através de abstração de rede (ClusterIP).

Probes (Health Checks): O Kubernetes monitora o endpoint /health para restart automático em caso de travamentos (LivenessProbe) e liberação do tráfego apenas quando a API e o banco estiverem prontos (ReadinessProbe).

Observabilidade e Logs: A API emite logs em formato JSON estruturado (via Pino.js) prontos para integração com ferramentas de monitoramento.
