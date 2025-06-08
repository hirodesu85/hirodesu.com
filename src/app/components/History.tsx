import Image from "next/image";

interface InternExperience {
  id: number;
  company: string;
  type: string;
  period: string;
  description: string[];
  techStack: {
    name: string;
    logo: string;
  }[];
}

const internData: InternExperience[] = [
  {
    id: 1,
    company: "株式会社テックイノベーション",
    type: "長期インターン",
    period: "2023/04〜2023/12",
    description: [
      "Webアプリケーションのフロントエンド開発を担当",
      "ユーザーインターフェースの設計・実装およびパフォーマンス最適化",
    ],
    techStack: [
      { name: "React", logo: "/logos/html.svg" },
      { name: "TypeScript", logo: "/logos/html.svg" },
      { name: "Next.js", logo: "/logos/html.svg" },
      { name: "Tailwind CSS", logo: "/logos/html.svg" },
    ],
  },
  {
    id: 2,
    company: "株式会社データサイエンス",
    type: "短期インターン",
    period: "2023/01〜2023/03",
    description: [
      "機械学習モデルの開発およびデータ分析業務",
      "Pythonを用いた自動化ツールの作成とAPI開発",
    ],
    techStack: [
      { name: "Python", logo: "/logos/html.svg" },
      { name: "FastAPI", logo: "/logos/html.svg" },
      { name: "PostgreSQL", logo: "/logos/html.svg" },
      { name: "Docker", logo: "/logos/html.svg" },
    ],
  },
  {
    id: 3,
    company: "株式会社クラウドソリューションズ",
    type: "長期インターン",
    period: "2022/06〜2022/12",
    description: [
      "AWSを活用したインフラ構築とCI/CDパイプラインの整備",
      "マイクロサービスアーキテクチャの設計・実装支援",
    ],
    techStack: [
      { name: "AWS", logo: "/logos/html.svg" },
      { name: "Node.js", logo: "/logos/html.svg" },
      { name: "Express", logo: "/logos/html.svg" },
      { name: "MongoDB", logo: "/logos/html.svg" },
      { name: "GitHub Actions", logo: "/logos/html.svg" },
    ],
  },
];

export default function History() {
  return (
    <section className="py-16 md:py-20 px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="font-vt text-6xl md:text-7xl mb-12 text-center md:text-left">
          HISTORY
        </h2>

        <div className="space-y-12">
          {internData.map((intern) => (
            <div key={intern.id} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 左側: タイムラインアイコンのみ */}
                <div className="relative min-w-[250px] flex justify-center">
                  <Image
                    src="/timeline/treasure.webp"
                    alt="Timeline Icon"
                    width={250}
                    height={250}
                    className="flex-shrink-0"
                  />
                </div>

                {/* 右側: カード */}
                <div className="flex-1 border-4 border-[#E53C93] rounded-lg p-6 md:p-8">
                  {/* 会社名 */}
                  <h3 className="font-kiwi font-medium text-3xl md:text-4xl mb-3">
                    {intern.company}
                  </h3>

                  {/* インターン種類・期間 */}
                  <p className="font-kiwi text-xl md:text-2xl mb-4">
                    {intern.type}（{intern.period}）
                  </p>

                  {/* 業務内容 */}
                  <div className="mb-6 space-y-2">
                    {intern.description.map((desc, index) => (
                      <p
                        key={index}
                        className="font-kiwi text-lg md:text-xl leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>

                  {/* 技術スタック */}
                  <div className="flex flex-wrap gap-4 items-center">
                    {intern.techStack.map((tech, index) => (
                      <Image
                        key={index}
                        src={tech.logo}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
