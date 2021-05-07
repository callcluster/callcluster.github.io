# Qué es (tl;dr)

- Extractores para C y para C#. Extraen el callgraph y algunas métricas.
- Ambos extractores tienen el mismo formato de salida. Ese formato se puede cargar en el visualizador.
- El visualizador permite correr un algoritmo de clustering sobre el grafo producido. (Leiden, 2019)
- Los clusters que construye Leiden pueden inspirar un refactor
- La visualización muestra la arquitectura del sistema sin que haga falta documentarla.

# Por qué
- Extensible. Es fácil escribir tus propios extractores. Es fácil modificar el algoritmo de clustering o cambiarlo por otro.
- Es sencillo instalarlo y probarlo.
- No hay nada igual que sea opensource. No hay nada igual que sea tan fácil de usar.

# Demo (3 minutos)

<iframe width="560" height="315" src="https://www.youtube.com/embed/N4CciKXP3C0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Objetivo
Diseñar e implementar un conjunto de herramientas de extracción, visualización y análisis de callgraphs para facilitar la evaluación y mejora de la arquitectura de una aplicación programada en C o C#.

# Manuales de usuario
Callcluster está compuesto de 3 programas independientes:
- [Extractor Roslyn](./dotnet): extrae callgraph y estructura de un programa C#
- [Extractor clang](./clang): extrae callgraph y estructura de un programa C
- [Visualizador](./visu): Permite visualizar los datos extraídos

# Documentación técnica
- [descripción del formato de `analysis.json`](./formato). Podés usarlo para crear tus propios extractores para cualquier lenguaje de programación junto con `callcluster-visu`.

# Código

- [Extractor Roslyn (callcluster-dotnet)](https://github.com/callcluster/callcluster-dotnet)
- [Extractor clang (callcluster-clang)](https://github.com/callcluster/callcluster-clang)
- [Visualizador (callcluster-visu)](https://github.com/callcluster/callcluster-visu)
- [Documentación (esta página)](https://github.com/callcluster/callcluster.github.io)
