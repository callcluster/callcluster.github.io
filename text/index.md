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
