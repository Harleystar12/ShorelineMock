async function loadPartial(id, path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
    }

    document.getElementById(id).innerHTML =
        await response.text();
}

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadPartial('header', '/partials/header.html'),
        loadPartial('footer', '/partials/footer.html')
    ]);

    document.dispatchEvent(
        new Event('partialsLoaded')
    );
});