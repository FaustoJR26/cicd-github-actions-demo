# Instrucciones de despliegue

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Haz `git push` a `main`: el pipeline correrá solo.
4. Al terminar el job `deploy`, la URL aparece en el resumen del workflow y en **Settings → Pages**.
5. Si falla por permisos: **Settings → Actions → General → Workflow permissions** y verifica que Actions esté habilitado.
