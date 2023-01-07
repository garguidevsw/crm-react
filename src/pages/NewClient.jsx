import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { agregarCliente } from "../api/clientes";
import Error from "../components/Error";
import Formulario from "../components/Formulario";

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const email = formData.get('email')

  // Validación 
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  // Validando emain con RegExp
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('El email no es válido')
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos)

  return redirect('/')
}

const NewClient = () => {
  const navigate = useNavigate();

  const errores = useActionData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-700">Nuevo Cliente</h1>
      <p className="mt-3 text-gray-700">Agrega un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-700 text-white px-3 py-1 font-bold uppercase"
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-14">
        { errores?.length && errores.map( (error, i) => (
          <Error key={i}>{error}</Error>
        ))}
        <Form method="post" noValidate >
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-700 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
