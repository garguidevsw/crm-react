export const obtenerClientes = async () => {
  const url = import.meta.env.VITE_API_URL;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
};

export const agregarCliente = async (datos) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCliente = async (id) => {
  const url = import.meta.env.VITE_API_URL;
  const respuesta = await fetch(`${url}/${id}`);
  const resultado = await respuesta.json();

  return resultado;
};

export const actualizarCliente = async (id, datos) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async (id) => {
    console.log(id);
  const url = import.meta.env.VITE_API_URL;

  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE"
    });

    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
};
