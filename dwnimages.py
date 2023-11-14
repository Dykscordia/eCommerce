import os
import requests

def get_unsplash_images(query, api_key, count=11):
    url = f'https://api.unsplash.com/photos/random/?query={query}&count={count}&client_id={api_key}'
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        image_urls = [photo['urls']['regular'] for photo in data]
        return image_urls
    else:
        print(f"Error: {response.status_code}")
        return []

def download_images():
    # Lista de URLs de imágenes desde Unsplash
    unsplash_api_key = 'xnvchI_swWb5AJOkNuaObxe8E6k_sVKJXGj3v3XKlTM'
    image_urls = get_unsplash_images(query='textures', api_key=unsplash_api_key)

    # Carpeta de destino para las imágenes
    output_folder = 'img'

    # Asegurarse de que la carpeta de salida exista
    os.makedirs(output_folder, exist_ok=True)

    # Descargar e guardar cada imagen
    for i, url in enumerate(image_urls, start=4):
        response = requests.get(url)
        if response.status_code == 200:
            # Extraer el nombre del archivo de la URL y guardar en la carpeta de salida
            image_name = f'imagen-producto-{i}.jpg'
            image_path = os.path.join(output_folder, image_name)

            with open(image_path, 'wb') as f:
                f.write(response.content)
            print(f'Imagen {i} descargada y guardada como {image_name}')
        else:
            print(f'Error al descargar la imagen {i}')

if __name__ == "__main__":
    download_images()
