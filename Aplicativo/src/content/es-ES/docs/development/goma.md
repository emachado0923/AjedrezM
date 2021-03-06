# Goma

> Goma es un servicio de compilador distribuido para proyectos open-source tales como Chromium and Android.

Electron tiene un despliegue de un Goma Backend personalizado que hacemos disponible para todos los Maintainers de Electron.  Ve la sección de [Acceso](#access) abajo para los detalles de autenticación.

## Enabling Goma

Actualmente Electron Goma soporta Windows, Linux y macOS.  Si estás en una plataforma soportada puedes habilitar goma importando archivo de configuración `goma.gn` luego usas `gn`.

```bash
gn gen out/Testing --args="import(\"//electron/build/args/testing.gn\") import(\"//electron/build/args/goma.gn\")"
```

Deberías asegurarte que no tengas configurado `cc_wrapper`, esto significa que no puedes usar `sccache` o alguna tecnología similar.

Antes que puedas usar goma para construir en Electron, necesitas autenticarte en el servicio de Goma.  Solamente necesitas hacer esto una vez por máquina.

```bash
cd electron/external_binaries/goma
./goma_auth.py login
```

Una vez autenticado, necesitas asegurar que el daemon goma esté corriendo en tu máquina.

```bash
cd electron/external_binaries/goma
./goma_ctl.py ensure_start
```

## Construyendo con Goma

Cuando estás usando Goma, puedes correr `ninja` con un valor sustancialmente alto de `j` que normalmente sería soportado por tu máquina.

Por favor, no configures un valor mayor que **300** en Windows o Linux y **80** en macOs, monitoreamos el sistema goma y los usuarios se encuentren abusando con una concurrencia irrazonable serán desactivados.

```bash
ninja -C out/Testing electron -j 200
```

## Monitoreando Goma

Si accedes a [http://localhost:8088](http://localhost:8088) en tu máquina local, puedes monitorear los trabajos de compilación como ellos fluyen a través del sistema de Goma.

## Acceso

Por seguridad y razones de costo, el acceso a Electron Goma está actualmente restringido para los mantenedores de Electron.  Si quieres acceder, por favor dirigase a `#access-requests` en Slack y pregunte a `@goma-squad` por el acceso.  Por favor ten en cuenta que siendo un mantenedor no se concede *automáticamente* el acceso, y éste es determinado en caso por caso.
