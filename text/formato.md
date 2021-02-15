# Especificación del formato de callgraphs para callcluster `analysis.json`
Este permite expresar 3 datos extraídos del análisis de un programa, a saber:
- callgraph (llamadas entre funciones)
- funciones: metadatos y métricas sobre las funciones que componen el programa
- estructura jerárquica del programa

Los campos marcados con `(*)` son opcionales: `callcluster-visu` los interpreta, pero no requiere su existencia.

## Archivo emitido por los extractores
El archivo permite agregar métricas arbitrarias a las funciones, como campos en los diccionarios contenidos en el array de funciones.
```json
{
    "calls":[
        {
            "from":<indice en el array 'functions' (entero)>,
            "to":<indice en el array 'functions' (entero)>,
        }
    ],
    "functions":[
        {
            "location":<Cadena de caracteres que permite vincular esta función con la ubicación donde se escribió la misma, formato libre>,
            "name":<Nombre de la función>,
            "written": < (*) valor booleano, indica si esta función fue escrita por el programador o no. Es opcional >,
            "<nombre de la métrica>":<(*) valor de la métrica>
        }
    ],
    "community":<un diccionario tal como definido en la sección 'diccionario Comunidad'>
}
```

## diccionario Comunidad
Representa una comunidad, y contiene instancias de sí mismo para representar niveles inferiores
```json
{
    "name":<nombre de la comunidad>,
    "functions":<Array índices del array 'functions'>,
    "communities":<Array de diccionarios Comunidad>,
    "type":<(*) nombre de este tipo de >
}
```
## Extensibilidad
Este formato está diseñado para aceptar la adición de cualquier cantidad de métricas arbitrarias. Si bien los nombres hacen referencia al caso concreto de análisis de callgraphs, podría usarse con otros fines; o para expresar otras dependencias.