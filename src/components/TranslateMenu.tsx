import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import { Translate } from "phosphor-react";
import { useEffect, useState } from "react";

export function TranslateMenu() {
  const { lang } = useTranslation('home')
  const [isTranslateMenuOpen, setIsTranslateMenuOpen] = useState<boolean>(false)

  const handleCloseTranslateMenu = () => setIsTranslateMenuOpen(false)
  const toggleTranslateMenu = () => setIsTranslateMenuOpen(state => !state)

  const handleChangeLanguage = (langParam: string) => {
    setLanguage(langParam)
    localStorage.setItem('@icaroxavier/portfolio:lang', langParam)
    handleCloseTranslateMenu()
  }

  useEffect(() => {
    const localStorageLang = localStorage.getItem('@icaroxavier/portfolio:lang')
    if (localStorageLang === 'en') {
      setLanguage('en')
    }
    if (localStorageLang === 'pt') {
      setLanguage('pt')
    }
  }, [])

  return (
    <>
      <Translate
          size={42}
          onClick={toggleTranslateMenu}
          className="fixed z-30 right-4 md:right-8 top-2 md:top-4 bg-blue-700 p-2 rounded-full cursor-pointer hover:scale-110 transition-all"
        />
        <div
          className={`fixed z-30 right-4 md:right-8 top-16 md:top-20 bg-zinc-800 ${isTranslateMenuOpen ? 'scale-100' : 'scale-0'} transition-all p-2 rounded-md flex flex-col gap-2`}
        >
          <button
            onClick={() => lang !== 'en' && handleChangeLanguage('en')}
            className={`${lang === 'en' ? 'bg-blue-700' : 'bg-zinc-900'} rounded-md p-2 hover:scale-105 hover:bg-blue-900 transition-all`}
          >
            English
          </button>
          <button
            onClick={() => lang !== 'pt' && handleChangeLanguage('pt')}
            className={`${lang === 'pt' ? 'bg-blue-700' : 'bg-zinc-900'} rounded-md p-2 hover:scale-105 hover:bg-blue-900 transition-all`}
          >
            Português
          </button>
        </div>
        {isTranslateMenuOpen && (
          <div className="fixed z-20 h-screen w-screen" onClick={handleCloseTranslateMenu}/>
        )}
    </>
  )
}
