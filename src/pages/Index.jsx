import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../api/clientes";
import Cliente from "../components/Cliente";

export async function loader() {
  const clientes = obtenerClientes()

  return clientes
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-700">Clientes</h1>
      <p className="mt-3 text-gray-700">Administra tus clientes</p>

      { clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { clientes.map( cliente => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aún</p>
      )}
    </>
  );
};

export default Index;
