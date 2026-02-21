const loadComponents = async (url, boxId) => {
    const response = await fetch(url);
    const data = await response.text();

    document.getElementById(boxId).innerHTML = data;
};

loadComponents("components/login.html", "login-box");
loadComponents("components/navbar.html", "navbar");