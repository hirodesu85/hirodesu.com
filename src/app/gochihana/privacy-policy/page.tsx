import type { Metadata } from "next";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "ゴチ花 プライバシーポリシー",
  description: "アプリケーション「ゴチ花」のプライバシーポリシーです。",
  alternates: {
    canonical: "/gochihana/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.document}>
        <header className={styles.header}>
          <p className={styles.appName}>GOCHIHANA</p>
          <h1>ゴチ花 プライバシーポリシー</h1>
          <dl className={styles.details}>
            <div>
              <dt>制定日:</dt>
              <dd>2026年10月3日</dd>
            </div>
            <div>
              <dt>運営者:</dt>
              <dd>Hiromu Ogata</dd>
            </div>
          </dl>
        </header>

        <div className={styles.content}>
          <p>
            Hiromu Ogata（以下「運営者」といいます。）は、日本国内向けに提供するアプリケーション「ゴチ花」（以下「本アプリ」といいます。）における利用者情報を、以下のとおり取り扱います。
          </p>
          <p>
            本アプリに登録した情報は、原則として利用者の端末内に保存されます。iCloudを利用している場合は、利用者のApple IDに紐づく専用領域へ同期されます。本アプリは広告配信や利用者の追跡を行いません。
          </p>

          <section>
            <h2>1. 取り扱う情報と利用目的</h2>
            <div className={styles.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>情報</th>
                    <th>利用目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>プロフィール名・プロフィール画像</td>
                    <td>アプリ内のプロフィール表示</td>
                  </tr>
                  <tr>
                    <td>飲食店の名前・住所・位置・店舗識別情報など</td>
                    <td>店舗の登録、地図表示、重複防止、カテゴリ判定</td>
                  </tr>
                  <tr>
                    <td>来店日・評価・料理名・メモ・写真</td>
                    <td>来店記録の作成と表示、花の成長・コレクション機能</td>
                  </tr>
                  <tr>
                    <td>端末の現在地</td>
                    <td>マップ上への現在地表示</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>写真は、利用者が写真ライブラリから選択したものだけを読み込みます。</p>
            <p>
              現在地は、利用者が許可した場合にマップ上へ表示するためだけに使用し、来店記録やプロフィールには保存しません。
            </p>
          </section>

          <section>
            <h2>2. 保存とiCloud同期</h2>
            <p>
              プロフィール、飲食店、来店記録および写真は、利用者の端末内に保存されます。
            </p>
            <p>
              利用者がiCloudを利用できる状態にある場合、これらの情報はAppleのiCloudを通じて、利用者のApple IDに紐づく専用領域へ同期されます。iCloudにサインインしていない場合は、端末内だけに保存されます。
            </p>
          </section>

          <section>
            <h2>3. 端末外への送信</h2>
            <p>
              iCloud同期にはAppleのサービスを利用します。また、地図・現在地の表示と店舗検索にもAppleのサービスを利用します。
            </p>
            <p>
              店舗を登録する際は、店舗カテゴリを判定するため、店舗の識別情報を運営者のサーバーへ送信します。判定結果は同じ店舗で再利用するために保存しますが、特定の利用者とは紐づけません。プロフィール、来店記録、写真および端末の現在地を、店舗カテゴリ判定のために送信することはありません。
            </p>
            <p>
              運営者は、外部サービスの利用にあたり、目的の達成に必要な範囲に限って情報を送信し、本ポリシーと同等の保護が確保されるよう適切に取り扱います。
            </p>
            <p>
              運営者は、利用者の情報を広告目的で第三者へ販売せず、他社のアプリやWebサイトを横断した追跡にも利用しません。
            </p>
          </section>

          <section>
            <h2>4. 利用者による管理と削除</h2>
            <ul>
              <li>飲食店は、本アプリ内で確認または削除できます。</li>
              <li>来店記録は、本アプリ内で確認、編集または削除できます。</li>
              <li>プロフィールは、本アプリ内で確認または編集できます。</li>
              <li>位置情報へのアクセスは、端末の設定から変更できます。</li>
              <li>iCloud同期は、端末のiCloud設定から変更できます。</li>
            </ul>
            <p>
              アプリを端末から削除すると端末内のデータは削除されますが、iCloudに同期されたデータは直ちに削除されない場合があります。iCloud上のデータは、Appleが提供する設定から確認・削除してください。
            </p>
          </section>

          <section>
            <h2>5. 安全管理</h2>
            <p>
              運営者は、取り扱う情報への不正アクセス、漏えい、紛失または破損を防ぐため、合理的な安全管理措置を講じます。ただし、インターネット通信や電子的な保存について、完全な安全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2>6. 未成年者の利用</h2>
            <p>
              未成年者は、必要に応じて親権者その他の法定代理人の同意を得たうえで本アプリを利用してください。
            </p>
          </section>

          <section>
            <h2>7. 本ポリシーの変更</h2>
            <p>
              運営者は、法令や本アプリの機能、情報の取扱方法の変更などに応じて、本ポリシーを変更することがあります。重要な変更を行う場合は、変更内容と効力発生日を、本アプリ内または運営者が適切と判断する方法で事前にお知らせします。
            </p>
          </section>

          <section>
            <h2>8. お問い合わせ</h2>
            <p>
              本ポリシー、利用者情報の取扱いまたは削除方法に関するお問い合わせは、以下へご連絡ください。
            </p>
            <ul>
              <li>運営者: Hiromu Ogata</li>
              <li>
                お問い合わせ先:{" "}
                <a href="mailto:hirodesu85.dev@gmail.com">
                  hirodesu85.dev@gmail.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
