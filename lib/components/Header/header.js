import css from './header.module.css'

export default function Header() {
  return (
    <div className={css.root}>
      <div className="left">
        <h1>Matteo Andreani</h1>
        <p>Photographer</p>
      </div>
      <div className="right" id="contacts"></div>
    </div>
  )
}
