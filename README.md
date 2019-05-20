# UPlanning
Proyecto para Unach parte móvil.
# Instalación de NtiveScript
### 1.- Instalar Chocolatey
Abrir CMD como administrador y ejecutar el siguiente código:
```
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

### 2.- Instalar Google Chrome
En CMD ejecutar el siguiente código:
```
choco install googlechrome -y
```

### 3.- Instalar Node.js
Descargar el archivo de instalación en el siguiente link e instalar.
https://nodejs.org/download/release/latest-v11.x/node-v11.15.0-x64.msi

### 4.- Instalar el JDK 8
En CMD ejecutar el siguiente código:
```
choco install adoptopenjdk --version 8.192
```

### 5.- Instalar SDK
Ejecutar el siguiente código:
```
choco install android-sdk -y
```
#### Reiniciar el CMD
### 6.- Instalar paquetes como el Android SDK Platform 28, Android SDK Build-Tools 28.0.3 o anteriores, Android Support Repository, Google Repository y cualquier otra SDKs que se pueda necesitar.
```
"%ANDROID_HOME%\tools\bin\sdkmanager" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"
```

### 7.- Seguir este paso no se que dice y no lo hice, no se si sea importante o necesario alv :v
https://docs.nativescript.org/angular/tooling/android-virtual-devices

### 8.- Instalar NativeScript CLI.
Ingresar en Visual y ejecutar el siguiente comando
```
npm i -g nativescript
```

### 9.- Verificar las instalaciones
Ejecutar el siguiente código para ver si está instalado:
```
npm --version
```
,y luego este código:
```
tns --version
```

### 10.- Verificación Final.
Ejecutar el siguiente código:
```
tns doctor
```
si sale que no se han detectado problemas, está bien instalado.

Fuente:
https://docs.nativescript.org/angular/start/ns-setup-win
