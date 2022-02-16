import { useRouter } from 'next/router'

function ActiveLink({ children, href, mobile = false }) {
  const router = useRouter()
  const desktopCss = 'cursor-pointer hover:text-white hover:bg-black px-[17px] py-[17px] rounded-md text-smb font-medium';
  const mobileCss = 'cursor-pointer flex h-max-[56px] hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium';
  const defaultClassName = ((!mobile) ? desktopCss : mobileCss);
  const className = router.asPath === href ? 'text-white bg-black' : 'text-black';

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