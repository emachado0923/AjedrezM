## Clase: TouchBarButton

> Crea un botón en la barra táctil para aplicaciones macOS nativas

Proceso: [Main](../tutorial/application-architecture.md#main-and-renderer-processes)

### `nuevo botón en la barra tactil(opciones)` *Experimental*

* `opciones` Object 
  * `Etiqueta` cadena (opcional) - Texto del fondo.
  * `Color del fondo` Cadena (opcional) - Color del fondo en formato hex, ejemplo: `#ABCDEF`.
  * `icon` [NativeImage](native-image.md) | String (optional) - Button icon.
  * `posición del ícono` Cadena (opcional) - Puede ser `izquierda`, `derecha` o `superpuesto`.
  * `click` Función (opcional) - Función a llamar cuando se hace click en el fondo.

### Propiedades de Instancia

Las siguientes propiedades están disponibles en las instancias de `TouchBarButton`:

#### `touchBarButton.label`

Una `String` que representa el texto actual del botón. Cambiar este valor actualiza el botón en la barra táctil.

#### `touchBarButton.backgroundColor`

Un código hex `String` que representa el color de fondo actual del botón. Cambiar este valor actualiza inmediatamente el botón en la barra táctil.

#### `touchBarButton.icon`

Un `NativeImage` que representa el icono actual del botón. Cambiar este valor actualiza inmediatamente el botón en la barra táctil.