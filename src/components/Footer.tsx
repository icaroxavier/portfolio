import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
    const { t } = useTranslation('home')

    return (
      <footer className="
        w-full h-16 pt-1 bg-transparent flex flex-col items-center justify-between"

      >
        <div className="flex gap-3">
          <Link href='https://www.linkedin.com/in/icaroxavier/' target="_blank">
            <LinkedinLogo size={40} className="cursor-pointer hover:scale-110 transition-all text-zinc-70"/>
          </Link>
          <Link href='https://www.github.com/icaroxavier' target="_blank">
            <GithubLogo size={40} className="cursor-pointer hover:scale-110 transition-all text-zinc-70"/>
          </Link>
          <Link href='https://wa.me/5585998164001?text=Oi,%20tudo%20bem?' target="_blank">
            <WhatsappLogo size={40} className="cursor-pointer hover:scale-110 transition-all text-zinc-70"/>
          </Link>
        </div>
        <div className="text-zinc-500 text-sm">© {new Date().getFullYear()} {t('footer.copyright')}</div>
      </footer>
    );
}
