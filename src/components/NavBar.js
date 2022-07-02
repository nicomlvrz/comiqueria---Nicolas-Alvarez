import CartWidget from "./CartWidget";
const NavBar = () => {
    return <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="pages/bio.html">DC Comics</a>
        <a class="navbar-brand" href="pages/discografia.html">Marvel</a>
        <a class="navbar-brand" href="pages/live.html">Mangas</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-dark bg-black">
        </ul>
        <CartWidget />
      </div>
    </div>
  </nav>
}

export default NavBar;