# Node.js Cloud Native API

API REST de gerenciamento de tarefas com Node.js 22, TypeScript, Express e PostgreSQL. O repositório demonstra organização de API, validação, persistência SQL, containerização e primeiros recursos cloud-native.

## Recursos
- CRUD de tarefas com validação Zod e consultas parametrizadas
- PostgreSQL e migration SQL inicial
- Health e readiness endpoints
- Logs HTTP estruturados com Pino
- Docker multi-stage e Docker Compose
- Manifestos Kubernetes e pipeline GitHub Actions

## Executar
Requer Docker e Docker Compose:
```bash
docker compose up --build
```
API: http://localhost:3000

Para execução local: copie `.env.example` para `.env`, instale dependências com `npm install`, crie o banco PostgreSQL e aplique `migrations/001_init.sql`; depois execute `npm run dev`.

## Endpoints
| Verbo | Caminho | Ação |
|---|---|---|
| GET | /health | Liveness |
| GET | /health/ready | Banco disponível |
| GET | /api/v1/tasks | Listar |
| POST | /api/v1/tasks | Criar |
| GET | /api/v1/tasks/:id | Consultar |
| PATCH | /api/v1/tasks/:id | Atualizar |
| DELETE | /api/v1/tasks/:id | Excluir |

Exemplo:
```bash
curl -X POST http://localhost:3000/api/v1/tasks -H 'Content-Type: application/json' -d '{"title":"Estudar TypeScript"}'
```

## Verificações
`npm run build`, `npm test`. O pipeline executa build e testes em push e pull request.

## Kubernetes
Edite a imagem em `k8s/deployment.yaml`. Crie o Secret `node-api` com DATABASE_URL no cluster (não versionar credenciais) e aplique ConfigMap, Deployment e Service.

## Próximos passos para produção
Autenticação/autorização, rate limiting, política CORS restrita, migrações com ferramenta dedicada, métricas/alertas, backup e gestão externa de segredos. Esta é uma base demonstrativa, não uma implantação pronta para produção.
