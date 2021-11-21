import { useEffect, useState } from 'react'
import css from './header.module.css'

export default function Header() {
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneSanitized, setPhoneSanitized] = useState('')

  useEffect(() => {
    setMail('matteoandreani2@gmail.com')
    setPhone('+49 (0) 179 816 28 50')
    setPhoneSanitized('+491798162850')
  }, [setMail, setPhone, setPhoneSanitized])
  return (
    <div className={css.root}>
      <div className={css.left}>
        <h1>Matteo Andreani</h1>
        <p>Photographer</p>
      </div>
      <div className={css.right}>
        {mail !== '' && <a href={`mailto:${mail}`}>{mail}</a>}
        {phone !== '' && phoneSanitized !== '' && (
          <a href={`tel:${phoneSanitized}`}>{phone}</a>
        )}
      </div>
    </div>
  )
}
