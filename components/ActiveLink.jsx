import PropTypes from 'prop-types'

import Link from "next/link"
import { useRouter } from 'next/router'

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

const ActiveLink = ({ text, href }) => {

  const { asPath } = useRouter()

  return (
    <Link href={ href }>
      <a style={ asPath === href ? style : null } >{ text }</a>
    </Link>
  )
}

ActiveLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default ActiveLink