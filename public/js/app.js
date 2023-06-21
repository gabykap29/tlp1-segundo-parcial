        // Se obtiene el formulario
        const formNuevaReserva = document.querySelector('#formNuevaReserva');

        // Se agrega un evento al formulario
        formNuevaReserva.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Se obtienen los valores de cada input
            const nombre = document.querySelector('#nombre').value;
            const apellido = document.querySelector('#apellido').value;
            const codigo = document.querySelector('#codigo').value;

            // Se crea un objeto con los valores de los inputs
            const nuevaReserva = {
                nombre,
                apellido,
                codigo
            }

            // Se envia la peticion POST
            try {
                const res = await fetch('http://localhost:3000/api/reservas/create', {
                    method: 'POST',
                    body: JSON.stringify(nuevaReserva)
                });

                const data = await res.json();
                console.log({ data });
                formNuevaReserva.reset();
                
                Swal.fire({
                    icon: 'success',
                    title: 'Reserva creada',
                    text: 'La Reserva se ha creado correctamente'
                })

              setTimeout(() => {
                window.location.href = '/api/reservas';
              }, 2000);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                })
            }
        })