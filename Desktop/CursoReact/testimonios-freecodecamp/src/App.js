import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Unirme a Amazon ha sido una de las mejores decisiones de mi carrera. La cultura de innovación y el apoyo constante de mis colegas me han permitido crecer profesionalmente de manera increíble. Cada día es un nuevo desafío y una oportunidad para aprender y mejorar.' 
          alt='Foto de Shawn' />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Trabajar en Spotify ha sido una experiencia increíble. La compañía no solo se preocupa por crear productos excelentes, sino que también valora profundamente el bienestar de sus empleados. Aquí, he encontrado un equilibrio perfecto entre la vida laboral y personal, lo cual me ha permitido alcanzar un alto rendimiento en mis proyectos.'
          alt='Foto de Emma' />
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='En ChatDesk, he tenido la oportunidad de trabajar en proyectos que realmente hacen una diferencia en la vida de las personas. La cultura de la empresa es inclusiva y colaborativa, lo que facilita el intercambio de ideas y el crecimiento profesional. Me siento valorada y apoyada en cada paso del camino.' 
          alt='Foto de Sarah'/>
      </div>
    </div>
  );
}

export default App;
