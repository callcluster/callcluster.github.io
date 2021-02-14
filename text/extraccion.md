# Manual de uso del conjunto de herramientas callcluster

## Extracción del callgraph de programas C#

### Instrucciones
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

### Ejemplo (DNN.Platform)
```bash
git clone https://github.com/callcluster/callcluster-dotnet
wget https://github.com/dnnsoftware/Dnn.Platform/archive/master.zip
unzip master.zip
cd callcluster-dotnet/callcluster-dotnet
dotnet run ../../Dnn.Platform-master/DNN_Platform.sln
head analysis.json
```

### Ejemplo (bc-csharp)
```bash
git clone https://github.com/callcluster/callcluster-dotnet
wget https://github.com/bcgit/bc-csharp/archive/master.zip
unzip master.zip
cd callcluster-dotnet/callcluster-dotnet
dotnet run ../../bc-csharp-master/csharp.sln
head analysis.json
```

## Extracción del callgraph de programas C

### Requisitos
callcluster-clang requiere tener instalado el paquete `libclang-10-dev` para poder ejecutarse, busca la librería en `/usr/lib/llvm-10/lib/libclang-10.so` tal como detallado en el archivo `CMakeLists.txt`. Para obtener esta librería debe instalarse clang 10 como descripto en https://apt.llvm.org/.

### Compilación
1. Clonar el repositorio de código fuente de callcluster-clang
```bash
git clone https://github.com/callcluster/callcluster-clang
```
2. Compilar callcluster-clang
```bash
cd callcluster-clang
mkdir build
cd build
cmake ..
cmake --build .
chmod a+x callclusterClang
```
### Extracción del callgraph
`callclusterClang` necesita, además de acceso al código fuente, una _compilation database_, que es una enumeración de las invocaciones al compilador de C y al linker. La _compilation databse_, por convención es un archivo denominado `compile_commands.json`. Existe un parámetro de línea de comando de `cmake` que permite generar `compile_commands.json` al compilar el proyecto cuyo callgraph se desea extraer. Si el proyecto analizado no utiliza cmake, puede usarse [Bear](https://github.com/rizsotto/Bear), que funciona con cualquier _toolchain_. El archivo `compile_commands.json` utiliza rutas relativas para identificar los archivos de código fuente, con lo cual no se debe cambiar su ubicación.

En el caso de utilizar bear, debe tenerse en cuenta que Bear tiene que capturar todas las invocaciones al compilador, con lo cual suele ser necesario ejecutar `make clean` antes de ejecutar `bear make`.

Una vez obtenido `compile_commands.json`, puede ejecutarse el binario `callclusterClang` de la siguiente manera: 
```bash
./callclusterClang <directorio donde se encuentra compile_commands.json> --progress
```
Una vez que se termina de ejecutar `callclusterClang`, se escribe un archivo denominado `analysis.json` en la carpeta donde se ejecutó el comando (es decir, en el _current working directory_, **no** en el directorio de `compile_commands.json`).

### Opciones recibidas por callclusterClang
```bash
./callclusterClang [CARPETA] [--progress]
```
- La `CARPETA` es obligatoria, y debe tener un archivo llamado `compile_commands.json`
- La opción `--progress` es opcional, e indica si se desea que el programa escriba a la consola información sobre el avance. Esta opción es importante para proyectos con muchos archivos de código fuente.

### Ejemplo (php)
Asumiendo ubuntu, según `README.md`:
```bash
git clone https://github.com/php/php-src
cd php-src
sudo apt install -y pkg-config build-essential autoconf bison re2c libxml2-dev libsqlite3-dev
./buildconf
./configure
bear make
```
En el directorio donde se encuentra `callclusterClang`:
```bash
./callclusterClang <ubicación de la carpeta php-src> --progress
```

### Ejemplo (redis)
```bash
git clone https://github.com/redis/redis
cd redis
bear make
```
En el directorio donde se encuentra `callclusterClang`:
```bash
./callclusterClang <ubicación de la carpeta redis> --progress
```