"use client";

import { useState } from "react";
import Image from "next/image";

interface WorkItem {
  id: number;
  title: string;
  description: string[];
  icon: string;
  url?: string;
}

const worksData: WorkItem[] = [
  {
    id: 1,
    title: "vscode-alife",
    description: [
      "ボイドモデルのシミュレーションを",
      "VSCodeのサイドバーで実行できる拡張機能",
    ],
    icon: "/works/icons/vscode-alife.webp",
    url: "https://github.com/hirodesu85/vscode-alife",
  },
  {
    id: 2,
    title: "boid_survival",
    description: [
      "ボイドモデルのパラメータ調整を用いて",
      "より高いWaveを目指すゲーム",
    ],
    icon: "/works/icons/boid-survival.webp",
    url: "https://github.com/hirodesu85/boid_survival",
  },
  {
    id: 3,
    title: "美少女散歩",
    description: [
      "ハッカソン「GIFTech 2024 春」で制作",
      "ランダムな目的地提案を行うスマホアプリ",
    ],
    icon: "/works/icons/bisyojo.webp",
    url: "https://giftech.io/giftech2024spring/bishojosampo/",
  },
];

function WorkCard({ work }: { work: WorkItem }) {
  return (
    <div className="bg-[#374151] border-4 border-[#56FB72] rounded-lg p-8 flex flex-col items-center">
      {/* アイコン */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 flex items-center justify-center">
          <Image
            src={work.icon}
            alt={work.title}
            width={128}
            height={128}
            className="rounded-lg max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* タイトル */}
      <h3 className="font-kiwi font-medium text-2xl md:text-3xl mb-4 text-center text-white">
        {work.title}
      </h3>

      {/* 説明文 */}
      <div className="mb-6 space-y-2 flex-grow">
        {work.description.map((desc, index) => (
          <p key={index} className="font-kiwi text-lg leading-relaxed text-white text-center">
            {desc}
          </p>
        ))}
      </div>

      {/* リンクボタン */}
      <div className="flex justify-center">
        {work.url && (
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-kiwi bg-[#56FB72] hover:bg-[#4ae963] text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            参考
          </a>
        )}
      </div>
    </div>
  );
}

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 1;
  const maxIndex = Math.max(0, worksData.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 md:py-20 px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <h2 className="font-vt text-6xl md:text-7xl mb-12 text-center md:text-left">
          WORKS
        </h2>

        {/* モバイル表示: 縦並び */}
        <div className="flex flex-col gap-8 md:hidden">
          {worksData.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        {/* デスクトップ表示: カルーセル */}
        <div className="relative hidden md:block">
          {/* 左矢印ボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-24 h-24 flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
            aria-label="前の作品を表示"
          >
            <Image
              src="/works/arrow.svg"
              alt="前へ"
              width={48}
              height={48}
              className="transform scale-x-[-1]"
            />
          </button>

          {/* 右矢印ボタン */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-24 h-24 flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
            aria-label="次の作品を表示"
          >
            <Image src="/works/arrow.svg" alt="次へ" width={48} height={48} />
          </button>

          {/* カルーセル本体 */}
          <div className="mx-16 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {worksData.map((work) => (
                <div key={work.id} className="w-full flex-shrink-0 px-4">
                  {/* 作品カード */}
                  <div className="bg-[#374151] border-4 border-[#56FB72] rounded-lg p-8 h-full flex flex-col">
                    {/* アイコン */}
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <Image
                          src={work.icon}
                          alt={work.title}
                          width={128}
                          height={128}
                          className="rounded-lg max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* タイトル */}
                    <h3 className="font-kiwi font-medium text-2xl md:text-3xl mb-4 text-center text-white">
                      {work.title}
                    </h3>

                    {/* 説明文 */}
                    <div className="mb-6 space-y-2 flex-grow">
                      {work.description.map((desc, index) => (
                        <p
                          key={index}
                          className="font-kiwi text-lg leading-relaxed text-white text-center"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* リンクボタン */}
                    <div className="flex justify-center">
                      {work.url && (
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-kiwi bg-[#56FB72] hover:bg-[#4ae963] text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                          参考
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ドットインジケーター */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-[#56FB72]"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`スライド ${index + 1} に移動`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
