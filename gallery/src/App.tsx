// import { async } from '@firebase/util';
import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getPhotos();    
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    let photos = await Photos.getAll();
    setPhotos(photos);
    setLoading(false);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se tem arquivo selecionado
    const formData = new FormData(e.currentTarget); // Pega o formulário.
    const file = formData.get('image') as File; // Pega a imagem. Nome do input.

    if(file && file.size > 0) {
      setUploading(true);
      // Faz o envio do arquivo
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteClick = async (name: string) => {
    await Photos.deletePhoto(name);
    getPhotos();
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {/* Área de upload */}
      
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>

        {/* Lista de fotos */}

        {loading && 
          <C.ScreenWarning>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 && 
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDeleteClick}/>
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😿</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  )
}

export default App;
