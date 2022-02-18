import { useRouter } from 'next/router'

function ActiveLink({ children, href, mobile = false }) {
  const router = useRouter()
  const desktopCss = 'cursor-pointer cursor-text hover:bg-sky-800 hover:text-sky-300 px-[17px] py-[10px] text-smb font-medium';
  const mobileCss = 'cursor-pointer flex py-2 rounded-md text-smb font-medium';
  const defaultClassName = ((!mobile) ? desktopCss : mobileCss);
  const hrefIs = router.asPath === href;
  const complement = {
    className: hrefIs ? 'cursor-progress hover:bg-zinc-800 text-zinc-200' : 'text-sky-700',
    init: hrefIs && !mobile ? '<' : '',
    out: hrefIs && !mobile ? ' />' : '',
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${defaultClassName} ${complement.className}`}>
      <span className=" text-stone-600">{complement.init}</span>
        {children}
      <span className=" text-stone-600">{complement.out}</span>
    </a>
  )
}

export default ActiveLink;