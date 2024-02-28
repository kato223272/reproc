import ListAlbums from "../components/ListAlbums";
import { useEffect, useState } from 'react';
export default function Home() {
  const [spotifyData, setSpotifyData] = useState(null);
  const [badData, setEnjambre] = useState(null);
  const [KeniaOsData, setAventure] = useState(null);
  const [TinoData, setAngeles] = useState(null);

  useEffect(() => {
    fetch('/api/conexion') 
      .then((response) => response.json())
      .then((data) => {
       
        setSpotifyData(data); 
       
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/BadBunny') 
      .then((response) => response.json())
      .then((data) => {
       
        setEnjambre(data); 
        
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/KeniaOs') 
      .then((response) => response.json())
      .then((data) => {
       
        setAventure(data); 
        
        
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  useEffect(() => {
    fetch('/api/TinoElPinguino') 
      .then((response) => response.json())
      .then((data) => {
       
        setAngeles(data); 
        

      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);
  const playlists = spotifyData;
  const rola1 = KeniaOsData;
  const rola2 = TinoData ;
  const rola3 = badData;

  return (
    <div className="pt-28 md:pl-72 p-8">
      <ListAlbums title="Spotify Playlists" data={spotifyData} />
      <ListAlbums title="rola1" data={KeniaOsData}/>
      <ListAlbums title="rola2" data={TinoData}/>
      <ListAlbums title="rola3"data={badData} />
    </div>
  );
}
