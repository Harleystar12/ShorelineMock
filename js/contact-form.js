document.addEventListener('partialsLoaded', () => {

    const form = document.querySelector('#contact-form');

    if (!form) return;

    form.addEventListener('submit', async (event) => {

        event.preventDefault();

        const formNote =
            document.querySelector('#form-note');

        try {

            const response = await fetch(
                'https://formspree.io/f/mppqkrkk',
                {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );

            if (response.ok) {

                formNote.textContent =
                    'Thank you for your message. We will get back to you shortly.';

                form.reset();

            } else {

                formNote.textContent =
                    'There was a problem sending your message.';

            }

        } catch {

            formNote.textContent =
                'There was a problem sending your message.';

        }

    });

});