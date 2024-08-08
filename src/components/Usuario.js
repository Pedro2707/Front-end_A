import React, {useContext} from 'react';
import { signin } from '../api/user';
import { AuthContext } from '../context/authContext';
const Usuario = () => {
  const { token, login, logout } = useContext(AuthContext);
  const submit = async (event) =>{
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    console.log("🚀 ~ submit ~ usuario:", usuario)
    const password = document.getElementById('password').value;
    if (!usuario || !password) {
      return;
    }
  
    const {accessToken} = await signin(usuario, password);
    login(accessToken);
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-300">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Accede a tu cuenta para continuar
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <div  className="space-y-6">
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-300 text-center">
              Usuario
            </label>
            <div className="mt-2">
              <input
                id="usuario"
                name="usuario"
                type="text"
                required
                autoComplete="username"
                className="block w-full rounded-md border-0 py-2 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu usuario"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300 text-center">
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-2 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={submit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 transition duration-200 ease-in-out"
            >
              Iniciar sesión
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No eres miembro?{' '}
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}

export default Usuario;

