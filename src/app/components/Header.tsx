import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center py-16 md:py-20 px-8 gap-12 md:gap-24 min-h-screen md:min-h-0">
      {/* 左側: プロフィール画像 */}
      <div className="flex-shrink-0">
        <Image
          src="/icon.webp"
          alt="Hiromu Ogata Profile"
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>

      {/* 右側: 情報エリア */}
      <div className="flex flex-col text-center md:text-left max-w-2xl">
        <h1 className="font-vt text-6xl md:text-7xl mb-8">HIROMU OGATA</h1>

        {/* 自己紹介文 */}
        <div className="font-vt text-2xl md:text-3xl mb-10 leading-relaxed">
          <p className="mb-4">
            B4 in Information Science, University of Tsukuba
          </p>
          <p className="hidden md:block">
            Web development / App development / Software engineering
          </p>
          <p className="hidden md:block">
            Boid model / Artificial Life / Evolutionary computation
          </p>
        </div>

        {/* SNSリンク */}
        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://github.com/hirodesu85"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://x.com/hirodesu47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="X (Twitter)"
          >
            <Image src="/icons/x.svg" alt="X" width={48} height={48} />
          </a>
          <a
            href="https://zenn.dev/hirodesu85"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Zenn"
          >
            <Image src="/icons/zenn.svg" alt="Zenn" width={48} height={48} />
          </a>
        </div>
      </div>
    </header>
  );
}
