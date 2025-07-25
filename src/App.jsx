import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <ProjectCard
        title="BLOG"
        description="Aplicación full-stack que permite gestionar un blog mediante un panel de administración. Cuenta con una API RESTful construida con Express que permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre las publicaciones y manejar la autenticación de usuarios guardados en una base de datos relacional PostgreSQL. El frontend, desarrollado con React, consume la API para mostrar el contenido de forma eficiente y adaptarse a todas las pantallas."
        tech={["React", "Node.js", "Express", "PostgreSQL", "Passport"]}
        repoLink="https://github.com/ameliaHub/blog-api-demo"
        demoLink="https://blog-api-demo-lac.vercel.app/"
        gradient="linear-gradient(135deg, #16173fff, #3b82f6)"
        image="/images/blog_showcase.png"
      />
      <ProjectCard
        title="CV Builder"
        description="Constructor de CVs que permite crear y descargar currículum vitaes en formato PDF. Utiliza React para la interfaz de usuario y HTML2PDF para la generación del archivo."
        tech={["React", "HTML2PDF", "CSS"]}
        repoLink="https://github.com/ameliaHub/cv-builder"
        demoLink="https://cv-builder-iota.vercel.app/"
        gradient="linear-gradient(135deg, #18554eff, #2dd4bf)"
        image="/images/cv_mockF.png"
      />
      <ProjectCard
        title="Homemade Drive"
        description="App para subir y gestionar archivos en la nube."
        tech={["React", "Node.js", "Express", "Cloudinary"]}
        repoLink="https://github.com/tu-usuario/drive-clone"
        demoLink="https://drive-demo.vercel.app"
        gradient="linear-gradient(135deg, #1b0c06ff, #b56f4d)"
      />

      <Contact></Contact>
    </>
  );
}

export default App;
