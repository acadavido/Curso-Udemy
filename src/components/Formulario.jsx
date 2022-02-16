import { useState, useEfect } from "react"
import Error from "./Error"




const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre]=useState('')
  const [propietario, setPropietario]=useState('')
  const [email, setEmail]=useState('')
  const [fecha, setFecha]=useState('')
  const [sintomas, setSintomas]=useState('')

  const [error, setError]=useState(false)

  const handleSubmit = (e)=> {
    e.preventDefault();
    if ([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;
    }

    setError(false)

    // Objeto de Paciente 
    const objetoPaciente ={
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }
    // console.log(objetoPaciente)

    setPacientes([...pacientes, objetoPaciente])

    // Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mt-2">
      <h2 className="font-black text-3xl">Seguimiento Pacientes</h2>
      <p className=" mt-5 mb-10 text-center text-xl">
        Añade Pacientes y {""}
        <span className="text-indigo-600 mb-10">
          Administralos
        </span>
      </p>
      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mt-5">
          <label htmlFor="mascota" className="text-gray-700 block font-bold uppercase">Nombre Mascota</label>
          <input
           id="mascota"
           type="text"
           placeholder="Nombre Mascota"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={nombre}
           onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="propietario" className="text-gray-700 block font-bold uppercase">Nombre del Propietario</label>
          <input
            id="propietario"
           type="text"
           placeholder="Nombre del Propietario"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={propietario}
           onChange={(e)=>setPropietario(e.target.value)}        
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="text-gray-700 block font-bold uppercase">Email</label>
          <input
            id="email"
           type="email"
           placeholder="Email contacto Propietario"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        
        
        <div className="mt-5">
          <label htmlFor="alta" className="text-gray-700 block font-bold uppercase">Alta</label>
          <input
            id="alta"
           type="date"
           className="border-2 w-full p-2 mt-2 rounded-md"
           value={fecha}
           onChange={(e)=>setFecha(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="text-gray-700 block font-bold uppercase">Sintomas</label>
          <textarea
             id="sintomas"
             placeholder="Describe los sintomas"
             className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
             value={sintomas}
             onChange={(e)=>setSintomas(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <input
            type="submit"
           className="bg-indigo-700 w-full p-3 text-white font-bold uppercase 
           hover:bg-indigo-800"
           value="Agregar paciente"
           
          />
        </div>

      </form>
    </div>
  )
}

export default Formulario
