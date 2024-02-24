
const t = document.querySelector("#sidebar-toggle");
t.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const c = document.documentElement.getAttribute('data-bs-theme');
    const i = c == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', i);
}

function toggleLocalStorage() {
    isLight() ? localStorage.removeItem("light") : localStorage.setItem("light", "set");
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) toggleRootClass();

