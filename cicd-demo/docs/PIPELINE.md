# Documentación del pipeline

Archivo: `.github/workflows/ci-cd.yml`

## Disparadores
- `push` y `pull_request` hacia `main`
- `workflow_dispatch` (ejecución manual)

## Etapas

| Job | Qué hace | Depende de |
|-----|----------|-----------|
| `test` | Instala dependencias (`npm ci`), ejecuta pruebas unitarias y de integración con cobertura en Node 18 y 20, y sube el reporte de cobertura | — |
| `build` | Ejecuta `npm run build` y empaqueta `dist/` como artefacto de Pages | `test` |
| `deploy` | Publica en GitHub Pages (solo en `push` a `main`) | `build` |

```
push/PR → test (Node 18 | 20) → build → deploy (solo main)
```

## Calidad
- Si una prueba falla o la cobertura baja del umbral, el pipeline se detiene y **no** se despliega.
- En Pull Requests solo corren `test` y `build`; el despliegue se omite.

## Acciones usadas
`actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-artifact@v4`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`.
