import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="font-semibold text-3xl mb-4 text-center">
        <Link href="/">Otto</Link>
      </div>
      <div className="text-center text-neutral-500 max-w-lg mx-auto">
        A project by{" "}
        <Link
          href="https://www.abhin.dev/"
          className="underline"
          target="_blank"
        >
          Abhin Rustagi
        </Link>
        . Otto helps schedule my social media posts, and display them all in one
        place. Read here about{" "}
        <Link
          className="underline"
          href="https://www.github.com/AbhinRustagi/otto/"
        >
          how it works
        </Link>
        .
      </div>
    </header>
  );
}
