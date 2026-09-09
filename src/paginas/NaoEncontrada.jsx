import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <section className="pagina pagina-404">
      <h1>404 &mdash; Página não encontrada</h1>
      <p>O endereço que você tentou acessar não existe neste site.</p>
      <Link to="/" className="link-voltar">
        Voltar para o Início
      </Link>
    </section>
  )
}

export default NaoEncontrada
