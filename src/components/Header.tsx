import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="font-semibold text-3xl mb-4">
        <Link href="/">Otto</Link>
      </div>
      <div>
        A project by{" "}
        <Link
          href="https://www.abhin.dev/"
          className="underline"
          target="_blank"
        >
          Abhin Rustagi
        </Link>
        . Otto helps schedule my social media posts, and display them all in one
        place.
      </div>
    </header>
  );
}
