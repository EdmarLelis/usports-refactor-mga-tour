# 🏆 USports — Refatoração do Site MGA Tour

Aplicação web desenvolvida como parte da **refatoração de um site em desenvolvimento pela empresa MGA Tour**, com foco em **qualidade de código, organização, escalabilidade e boas práticas de mercado**.  
O projeto é estruturado em **frontend (React + TypeScript)** e **backend (Node.js + Express)**, incluindo um **sistema de envio de e-mails via formulário de contato**.

---

## 🚀 Tecnologias

O projeto foi construído utilizando padrões modernos do ecossistema web:

### Frontend
* **Framework:** React
* **Bundler:** Vite
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS
* **UI/UX:** Componentização e layout responsivo

### Backend
* **Runtime:** Node.js (v18+)
* **Framework:** Express
* **Linguagem:** TypeScript
* **Validação:** Zod
* **Envio de E-mails:** Nodemailer (SMTP)
* **Segurança:** Helmet, CORS, Rate Limit
* **Arquitetura:** Clean Architecture (UseCases, Controllers, Providers)

---

## ⚙️ Funcionalidades

### Frontend
* Refatoração de páginas e componentes existentes
* Formulário de contato integrado ao backend
* Validação básica de campos
* Feedback visual de envio (loading)

### Backend
* Endpoint de saúde (`/health`)
* Endpoint público para envio de e-mails
* Validação de dados com Zod
* Proteção contra spam via Rate Limit
* Separação clara entre regras de negócio e infraestrutura
* Configuração segura via variáveis de ambiente

---

## 🛣️ Principais Endpoints (Backend)

| Método | Endpoint | Descrição | Autenticação |
|------|--------|----------|--------------|
| `GET` | `/health` | Verifica se a API está online | Não |
| `POST` | `/api/send-email` | Envia mensagem do formulário de contato | Não |

---

## 🔐 Configuração do Ambiente

### Backend (`backend/.env`)

Crie um arquivo `.env` seguindo o modelo abaixo:

```env
# App
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# SMTP / Email
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=seuemail@gmail.com
MAIL_PASS=sua_senha_de_app

MAIL_FROM_NAME=USports
MAIL_FROM_EMAIL=seuemail@gmail.com
MAIL_TO=seuemail@gmail.com
````

> ⚠️ **Importante:**
>
> * Utilize **Senha de App** do Gmail (ou SMTP corporativo).
> * O arquivo `.env` **não deve ser versionado**.

Crie também o arquivo `.env.example` (versionado):

```env
PORT=
NODE_ENV=
CORS_ORIGIN=

MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

MAIL_FROM_NAME=
MAIL_FROM_EMAIL=
MAIL_TO=
```

---

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

## 🧪 Como rodar localmente

### Pré-requisitos

* **Node.js** v18 ou superior
* Gerenciador de pacotes **npm**
* Conta de e-mail com acesso SMTP

---

### 1️⃣ Clonar o repositório

```bash
git clone git@github.com:EdmarLelis/usports.git
cd usports
```

---

### 2️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

> Backend disponível em:
> `http://localhost:5000`

---

### 3️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

> Frontend disponível em:
> `http://localhost:5173`

---

### 4️⃣ Teste do envio de e-mail

```http
POST http://localhost:5000/api/send-email
Content-Type: application/json
```

```json
{
  "name": "Edmar",
  "email": "edmar@email.com",
  "phone": "11999999999",
  "message": "Olá! Teste do formulário."
}
```

---

## 🧠 Arquitetura do Backend (Resumo)

O backend segue princípios de **Clean Architecture**:

```
modules/
 └── contact/
     ├── controllers/
     ├── usecases/
     ├── validators/
     └── dtos/

infra/
 └── mail/
main/
 ├── routes/
 ├── middlewares/
 └── config/
```

### Benefícios:

* Baixo acoplamento
* Alta testabilidade
* Fácil manutenção
* Escalável para novas features

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento**
Projeto focado em refatoração, organização e modernização do código existente da MGA Tour.

---

## 👨‍💻 Autor

**Edmar Lelis**
Desenvolvedor Full Stack
GitHub: [@EdmarLelis](https://github.com/EdmarLelis)