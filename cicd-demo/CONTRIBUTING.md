# Guía de contribución

1. Haz un fork o crea una rama desde `main`: `git checkout -b feature/mi-cambio`
2. Escribe código **y pruebas** para tu cambio.
3. Verifica localmente: `npm test` (la cobertura mínima es 80% en líneas y 70% en ramas).
4. Usa commits claros, por ejemplo: `feat: agrega filtro de tareas`, `fix: corrige conteo`, `docs: actualiza README`.
5. Abre un Pull Request hacia `main`. El pipeline debe quedar en verde antes de fusionar.
6. Actualiza la documentación si tu cambio afecta el uso o el pipeline.
