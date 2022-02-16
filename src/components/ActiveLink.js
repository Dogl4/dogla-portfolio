import { useRouter } from 'next/router'

function ActiveLink({ children, href, mobile = false }) {
  const router = useRouter()
  const desktopCss = 'cursor-text hover:bg-sky-800 hover:text-sky-300 px-[17px] py-[10px] text-smb font-medium';
  const mobileCss = 'cursor-pointer flex h-max-[56px] hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium';
  const defaultClassName = ((!mobile) ? desktopCss : mobileCss);
  const hrefIs = router.asPath === href;
  const complement = {
    className: hrefIs ? 'cursor-help hover:bg-zinc-800 text-emerald-700' : 'text-sky-700',
    init: hrefIs ? '<' : '',
    out: hrefIs ? ' />' : '',
  };

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={`${defaultClassName} ${complement.className}`}>
      <span className=" text-stone-500">{complement.init}</span>
        {children}
      <span className=" text-stone-500">{complement.out}</span>
    </a>
  )
}

export default ActiveLink;