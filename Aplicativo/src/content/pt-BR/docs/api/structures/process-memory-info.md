# Objeto ProcessMemoryInfo

* `residentSet` Integer *Linux* *Windows* - The amount of memory currently pinned to actual physical RAM in Kilobytes.
* `private` Integer - The amount of memory not shared by other processes, such as JS heap or HTML content in Kilobytes.
* `shared` Integer - A quantidade de memória compartilhada entre processos, normalmente memória consumida pelo próprio código Electron em Kilobytes.