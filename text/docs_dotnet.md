# Extracción del callgraph de programas C#

## Instrucciones
Se requiere tener la herramienta de línea de comando (CLI) `dotnet` instalada. 

1. Clonar el repositorio que tiene el código de callcluster-dotnet: 
```bash
git clone https://github.com/callcluster/callcluster-dotnet

```
2. Invocar `dotnet run` en la carpeta donde se encuentra el extractor, pasando como argumento la ubicación del archivo `.sln` ó `.csproj` cuyo callgraph se desea extraer. Esto genera un archivo denominado `analysis.json` en la carpeta donde se ejecutó `dotnet run`.
```bash
cd callcluster-dotnet/callcluster-dotnet
dotnet run <ruta al archivo sln ó csproj>
head analysis.json
```

## Ejemplo (DNN.Platform)
```bash
git clone https://github.com/callcluster/callcluster-dotnet
wget https://github.com/dnnsoftware/Dnn.Platform/archive/master.zip
unzip master.zip
cd callcluster-dotnet/callcluster-dotnet
dotnet run ../../Dnn.Platform-master/DNN_Platform.sln
head analysis.json
```

## Ejemplo (bc-csharp)
```bash
git clone https://github.com/callcluster/callcluster-dotnet
wget https://github.com/bcgit/bc-csharp/archive/master.zip
unzip master.zip
cd callcluster-dotnet/callcluster-dotnet
dotnet run ../../bc-csharp-master/csharp.sln
head analysis.json
```
