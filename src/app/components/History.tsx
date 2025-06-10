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
  url?: string;
}

const internData: InternExperience[] = [
  {
    id: 1,
    company: "株式会社インフラトップ",
    type: "長期インターン",
    period: "2022/08〜2025/01",
    description: [
      "プログラミングスクールのメンター業務",
      "Web開発の技術を中心に教えていました",
    ],
    techStack: [
      { name: "HTML", logo: "/logos/html.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "Ruby", logo: "/logos/ruby.svg" },
      { name: "Ruby on Rails", logo: "/logos/rails.svg" },
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
    ],
  },
  {
    id: 2,
    company: "株式会社Techouse",
    type: "長期インターン",
    period: "2024/03〜2025/03",
    description: [
      "自社プロダクトのWeb開発業務",
      "バックエンド中心にフルスタック開発を担当",
    ],
    techStack: [
      { name: "Ruby", logo: "/logos/ruby.svg" },
      { name: "Ruby on Rails", logo: "/logos/rails.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "Vue", logo: "/logos/vue.svg" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
    ],
  },
  {
    id: 3,
    company: "LINEヤフー株式会社",
    type: "サマーインターン",
    period: "2024/08〜2024/09",
    description: [
      "ソフトウェアエンジニアコース",
      "APIの設計・実装やJSON差分表示ツールの開発",
    ],
    techStack: [
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Go", logo: "/logos/go.svg" },
    ],
    url: "https://www.lycorp.co.jp/ja/recruit/landingpage/SWE-02-14/",
  },
  {
    id: 4,
    company: "株式会社エス・エム・エス",
    type: "短期インターン",
    period: "2025/01〜2024/02",
    description: [
      "自社プロダクトのWeb開発業務",
      "既存機能のリファクタリングをバックエンド、フロントエンド両方で担当",
    ],
    techStack: [
      { name: "Kotlin", logo: "/logos/kotlin.svg" },
      { name: "Spring", logo: "/logos/spring.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "GraphQL", logo: "/logos/graphql.svg" },
    ],
  },
  {
    id: 5,
    company: "株式会社ディー・エヌ・エー",
    type: "短期インターン",
    period: "2024/03〜2024/04",
    description: [
      "社内で運用されているプロダクトの開発業務",
      "Clineの導入から、それを用いた既存プロダクトの改善業務を担当",
    ],
    techStack: [
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Go", logo: "/logos/go.svg" },
    ],
    url: "https://engineering.dena.com/blog/2025/05/intern_report_ogata/",
  },
];

export default function History() {
  return (
    <section className="py-16 md:py-20 px-8">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="font-vt text-6xl md:text-7xl mb-12 text-center">
          HISTORY
        </h2>

        <div className="relative">
          {internData.map((intern, index) => (
            <div key={intern.id} className="relative mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 左側: タイムライン */}
                <div className="hidden md:flex relative min-w-[250px] justify-center">
                  <Image
                    src="/timeline/treasure.webp"
                    alt="Timeline Icon"
                    width={250}
                    height={250}
                    className="flex-shrink-0"
                  />
                </div>

                {/* 右側: カード */}
                <div className="flex-1 border-4 border-[#E53C93] rounded-lg p-6 md:p-8 flex flex-col items-center text-center md:text-left md:items-start">
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
                        {index === 1 && intern.url && (
                          <>
                            {" "}
                            <span className="text-white">（</span>
                            <a
                              href={intern.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#00ffff] hover:underline"
                            >
                              参考
                            </a>
                            <span className="text-white">）</span>
                          </>
                        )}
                      </p>
                    ))}
                  </div>

                  {/* 技術スタック */}
                  <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
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

              {/* 矢印（最後のアイテム以外） */}
              {index < internData.length - 1 && (
                <div className="hidden md:block absolute left-[125px] bottom-[-90px] transform -translate-x-1/2 z-10">
                  <Image
                    src="/timeline/arrow.svg"
                    alt="Arrow"
                    width={120}
                    height={180}
                    className="flex-shrink-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
