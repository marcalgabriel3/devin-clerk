import Link from "next/link";
import { appConfig } from "@/app.config";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span aria-hidden>{appConfig.emoji}</span>
          {appConfig.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="hover:text-accent">
            Painel
          </Link>
          <Show when="signed-out">
            <SignInButton>
              <button className="hover:text-accent">Entrar</button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded-full bg-accent px-4 py-1.5 font-medium text-white hover:opacity-90">
                Cadastrar-se
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton
              appearance={{ variables: { colorPrimary: appConfig.accent } }}
            />
          </Show>
        </nav>
      </div>
    </header>
  );
}
