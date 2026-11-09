# Gestor de Tareas — Pipeline CI/CD con GitHub Actions

![CI/CD](https://github.com/FaustoJR26/cicd-github-actions-demo/actions/workflows/ci-cd.yml/badge.svg)

Aplicación web simple (lista de tareas) usada para demostrar un pipeline CI/CD completo:
pruebas unitarias, pruebas de integración, cobertura de código, build y despliegue automático a GitHub Pages.

**Demo en vivo:** https://faustojr26.github.io/cicd-github-actions-demo/

## Estructura

```
├── .github/workflows/ci-cd.yml   # Pipeline
├── src/                          # Lógica (tasks.js) e interfaz (main.js)
├── tests/                        # Pruebas unitarias e integración (Jest)
├── scripts/build.js              # Genera dist/
├── docs/                         # Pipeline, despliegue e informe
├── index.html
└── package.json
```

## Requisitos
- Node.js 18+ y Git

## Uso local
```bash
npm ci          # instalar dependencias
npm test        # pruebas + cobertura (umbral 80% líneas, 70% ramas)
npm run build   # genera dist/
npx serve dist  # opcional: probar el build
```

## Documentación
- [Pipeline](docs/PIPELINE.md)
- [Despliegue](docs/DEPLOYMENT.md)
- [Guía de contribución](CONTRIBUTING.md)
- [Informe de implementación](docs/INFORME.md)

## Autor
Nombre(s) del estudiante(s) — ITLA
