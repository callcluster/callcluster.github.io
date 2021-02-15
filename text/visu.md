# Uso del visualizador callcluster-visu

## Requisitos
El usuario debe tener instalados en su sistema:

1. nodejs
2. yarn
3. python 3
4. pip

## Instalación y ejecución
1. Clonar el repositorio
```bash
git clone https://github.com/callcluster/callcluster-visu
cd callcluster-visu
```
2. Instalar dependencias de javascript (yarn)
```bash
yarn install
```
3. Instalar dependencias de python (se recomienda usar un ambiente virtual)
```bash
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```
4. Iniciar el visualizador. Si las dependencias python se instalaron en un ambiente virtual, entonces debe activarse el mismo antes de correr el comando a continuación.
```bash
yarn run quasar dev -m electron
```

## Conceptos básicos (modelo mental)
### Comunidad
El esquema muestra cómo la jerarquía de un programa C# se traduce al modelo de callcluster. De forma análoga, para un programa C, las carpetas y archivos pasan a denominarse comunidades. Las comunidades describen la estructura jerárquica de un programa. Estas estructuras existen en todos los lenguajes de programación, aunque siempre tienen nombres distintos.
![comunidad y función](/modelo_dotnet.png)

### Función y callgraph
El concepto de _función_ se encuentra en todos los lenguajes de programación con distintos nombres. Las funciones se vinculan entre sí formando un gafo. En callcluster este grafo se denomina _callgraph_.

![callgraph](/callgraph.png)

### Clustering
Un _clustering_ es un agrupamiento automático de funciones, que se calcula a partir del _callgraph_ y detecta grupos de funciones más relacionadas entre sí.

![callgraph clusterizado](/callgraph_clustering.png)

Un clustering es también una comunidad, ya que es una agrupación disjunta de funciones. _Callcluster_ actualmente no extrae clustering jerárquicos, con lo cual la ejecución del algoritmo de tiene como resultado una jerarquía de un solo nivel.

![Comunidad generada](/jerarquia_cluster.png)

### Visualización
Callcluster permite crear 6 tipos de visualizaciones, que se encuentran explicadas en la interfaz, junto con los parámetros que reciben.

## Descripción general de la interfaz
![Referencias interfaz](/referencias_interfaz.png)
1. **Pestaña "Communities":** muestra una lista de comunidades que incluye la importada, las extraídas y los clusterings.
2. **Pestaña "Visualizations":** muestra un listado de las visualizaciones creadas, permitiendo editarlas y eliminarlas.
3. **Ventana "Inspection":** muestra toda la información disponible sobre la comunidad seleccionada en la visualización (6)
4. **Título del gráfico:** Es un título generado automáticamente que describe el contenido del gráfico
5. **Menú general:** Permite acceder a las siguientes opciones:
  - Importar archivo analysis.json (_File_ -> _Import analysis.json_)
  - Crear visualización (_Create_ -> _Visualization_)
  - Crear clustering (_Create_ -> _Clustering_)
6. **Barra de navegación:** Muestra en qué lugar de la jerarquía de comunidades se ubica la visualización actual. Al hacer click en una comunidad previa se puede navegar a la misma.
7. **Visualización:** En este sector se muestra la visualización.

## Uso del visualizador

### Agregar una comunidad
Existen 3 formas de agregar comunidades:
- Importar un archivo analysis.json (requisito para todo lo demás)
- Extraer una sub-comunidad
- Crear un clustering

### Importar analysis.json
1. Hacer click en File -> Import analysis.json (en el menú superior izquierdo), o presionar Ctrl+I
2. Elegir el archivo `analysis.json` generado a partir de `callcluster-dotnet` ó `callcluster-clang`
3. En la barra lateral se verá la primera comunidad: `Mined community`. Esta comunidad contiene todas las comunidades descriptas en `analysis.json`.

### Crear una visualización
Antes de crear una visualización, debe importarse `analysis.json`. Según la visualización que será creada, puede ser recomendable crear un _clustering_ previamente.

#### Pasos a seguir
1. Hacer click en Create -> Visualization (en el menú superior izquierdo), o presionar Ctrl+D
2. Seguir paso a paso el asistente
3. En la barra lateral, pestaña _Visualizations_ se listan las visualizaciones creadas y se permite editarlas o eliminarlas.

### Extraer una sub-comunidad
Las visualizaciones _Hierarchical Graph_, _Hierarchical Colored Graph_ y _Diff Graph_ permiten hacer click derecho sobre una comunidad para extraerla a la barra lateral. También se puede hacer click derecho sobre el espacio blanco en un gráfico para extraer la comunidad que se está viendo actualmente. Por ejemplo, en la captura de pantalla a continuación, hacer click derecho sobre la parte blanca extrae la comunidad "Program", que es la última listada en la barra superior.

![screenshot visu](/screenshot_visu.png)

### Crear un clustering
1. Hacer click en Create -> Clustering (en el menú superior izquierdo), o presionar Ctrl+Q
2. Completar el formulario.
3. El clustring se lista en la barra lateral, junto con todas las comunidades.

Nótese que es posible crear un clustering a partir de una sub-comunidad de la comunidad minada extraída de `analysis.json`. Esto permite restringir el análisis a una parte del código fuente (por ejemplo, una clase; o un namespace).

### Interactuar con las visualizaciones
