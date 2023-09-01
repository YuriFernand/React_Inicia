

function Card () {
    return (
     <>
      <nav className="menu">
         <h1 className="titulo1">Site teste</h1>
          <div className="links">
             <a href="/Pagina2/pagins.jsx" title="Home">Home</a>
             <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" title="Home">Tipos</a>
             <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" title="Home">Carriinho</a>
             <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" title="Home">Perfil</a>
          </div>
          <input type="text"  className="input"/>
      </nav>
     </>
    );
}

export default Card;