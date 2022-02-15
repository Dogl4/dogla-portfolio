import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const defaultClassName = 'cursor-pointer hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium';
  const className = router.asPath === href ? 'text-white bg-blue-600' : 'text-black';

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${defaultClassName} ${className}`}>
      {children}
    </a>
  )
}

export default ActiveLink;