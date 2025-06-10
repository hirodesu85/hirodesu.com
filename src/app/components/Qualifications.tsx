import Image from "next/image";

interface Qualification {
  id: number;
  name: string;
  date: string;
}

const qualificationsData: Qualification[] = [
  {
    id: 1,
    name: "基本情報技術者試験",
    date: "2023/11",
  },
  {
    id: 2,
    name: "CGエンジニア検定 エキスパート",
    date: "2023/12",
  },
  {
    id: 3,
    name: "応用情報技術者試験",
    date: "2024/04",
  },
];

export default function Qualifications() {
  return (
    <section className="py-16 md:py-20 px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <h2 className="font-vt text-6xl md:text-7xl mb-12 text-center md:text-left">
          QUALIFICATIONS
        </h2>

        {/* 資格リスト */}
        <div className="space-y-6">
          {qualificationsData.map((qualification) => (
            <div key={qualification.id} className="flex items-center gap-4">
              {/* カスタムマーカー */}
              <div className="flex-shrink-0">
                <Image
                  src="/qualifications/marker.webp"
                  alt=""
                  width={100}
                  height={150}
                  className="object-contain w-10 h-10 md:w-[100px] md:h-[150px]"
                />
              </div>

              {/* 資格情報 */}
              <div className="flex-1">
                <p className="font-kiwi text-xl md:text-4xl leading-relaxed whitespace-nowrap">
                  {qualification.name} ({qualification.date})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
