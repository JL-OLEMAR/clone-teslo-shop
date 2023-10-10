# Next.js Clone Teslo Shop

To run locally, you need the database; the -d, means **detached**.

```bash
docker-compose up -d
```

- MongoDB Local URL ⚓: `mongodb://localhost:27017/teslodb`

## Setting environment variables

Rename file **.env.example** to **.env.local**

## Add products as a seed only in dev environment

Temporary endpoint: `http://localhost:3000/api/seed`
