# Usar una imagen base de Node.js
FROM node:18

# Crear y usar el directorio de la app
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
