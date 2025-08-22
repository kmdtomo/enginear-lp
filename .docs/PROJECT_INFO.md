# Enginear LP プロジェクト情報

## プロジェクト概要
- **プロジェクト名**: enginear-lp
- **目的**: デザインの凝ったランディングページ（LP）の作成
- **デプロイ先**: X-Server（静的ファイルホスティング）
- **ビルドツール**: Vite
- **フレームワーク**: React + TypeScript

## 技術スタック
- **React**: 19.1.1
- **TypeScript**: 5.8.3
- **Vite**: 7.1.2
- **ビルドコマンド**: `npm run build`
- **開発サーバー**: `npm run dev`

## ディレクトリ構成

```
src/
  components/     # 共通UI部品
    Button.tsx    # ボタンコンポーネント
    Card.tsx      # カードコンポーネント
    Modal.tsx     # モーダルコンポーネント
    
  sections/       # LPの各セクション（レスポンシブ対応）
    Hero.tsx      # ヒーローセクション
    About.tsx     # Aboutセクション
    Services.tsx  # サービスセクション
    Contact.tsx   # お問い合わせセクション
      
  layouts/        # レイアウト制御
    Layout.tsx    # 共通レイアウト
    
  pages/          # ページコンポーネント
    index.tsx     # メインページ
    
  hooks/          # カスタムフック
    useMediaQuery.tsx  # レスポンシブ判定（オプション）
    
  styles/         # スタイル関連
    globals.css   # グローバルスタイル
    variables.css # CSS変数定義
    breakpoints.ts # ブレークポイント定義
```

## 開発方針

### PC/SP対応戦略
1. **統一コンポーネント**: 1つのコンポーネントでレスポンシブ対応
2. **メディアクエリ**: CSSでPC/SP表示を切り替え
3. **ブレークポイント**: 
   - SP: ~768px
   - タブレット: 769px~1024px
   - PC: 1025px~

### AI開発フロー
1. コンポーネント作成時にレスポンシブを考慮
2. モバイルファーストでスタイルを記述
3. ブレークポイントごとに調整を追加

### スタイリング方針
- CSS Modules を使用（Viteとの相性が良い）
- メディアクエリはコンポーネント内で定義
- 共通のブレークポイントは`styles/breakpoints.ts`で管理

例：
```css
/* Hero.module.css */
.hero {
  padding: 20px;
}

@media (min-width: 768px) {
  .hero {
    padding: 40px;
  }
}
```

## ビルド・デプロイ

### ビルドプロセス
```bash
# 開発環境
npm run dev

# 本番ビルド
npm run build

# ビルド結果確認
npm run preview
```

### デプロイ準備
1. `npm run build`で`dist/`ディレクトリに静的ファイル生成
2. `dist/`内のファイルをX-Serverにアップロード
3. 必要に応じて`.htaccess`を設定

## 注意事項
- 静的ファイルのみでの運用を前提
- APIやサーバーサイド処理は含まない
- 画像最適化、パフォーマンス最適化を考慮

## デザイントークン（Tailwind v4）

### 定義場所
- `src/index.css` の `@theme` に、フォント・カラー・グラデーション・ブレークポイントを定義
  - フォント: `--font-sans`, `--font-display`
  - カラー: `--color-brand`, `--color-brand-sub`, `--color-yellow`, `--color-button`
  - グラデーション: `--gradient-main`, `--gradient-sub`, `--gradient-tertiary`
  - ブレークポイント: `tailwind.config.js` の `screens` で `sp/tab/pc`

### 使用方法（クイック）
- **フォント**
  - 本文: `font-sans`
  - 見出し: `font-[--font-display]`
- **カラー**
  - メイン: `text-[--color-brand]` / `bg-[--color-brand]`
  - サブ: `text-[--color-brand-sub]` / `bg-[--color-brand-sub]`
  - 黄色: `text-[--color-yellow]`
  - ボタン: `bg-[--color-button]`
- **グラデーション**
  - 背景: `bg-[--gradient-main]`（他: `--gradient-sub`, `--gradient-tertiary`）
  - 文字（グラデーションテキスト）: `bg-[--gradient-main] bg-clip-text text-transparent`
- **ブレークポイント**（`tailwind.config.js`）
  - SP: `sp:`、タブレット: `tab:`、PC: `pc:`（例: `sp:text-sm pc:text-lg`）

### コード例
```tsx
// 見出しをグラデーション文字に、本文はメインカラー
export const Sample = () => (
  <section className="font-sans text-[--color-brand] p-6">
    <h1 className="font-[--font-display] text-4xl bg-[--gradient-main] bg-clip-text text-transparent">
      タイトル
    </h1>
    <p className="mt-2 text-[--color-brand-sub]">サブテキスト</p>
    <button className="mt-6 bg-[--color-button] text-white px-4 py-2 rounded">送信</button>

    <div className="mt-6 h-32 rounded-lg bg-[--gradient-sub]" />
  </section>
)
```

### トークン仕様
- **メインフォント**: Noto Sans JP（`font-sans`）
- **サブフォント**: Inter（`font-[--font-display]`）
- **メインカラー**: `#2911E2`
- **サブカラー**: `#F28130`
- **黄色**: `#F5E537`
- **ボタンカラー**: `#00C300`
- **メイングラデーション**: `#0575E6 → #021B79`
- **サブグラデーション**: `#FC4A1A → #FFAC00`
- **サードグラデーション**: `#5433FF → #0575E6`

### 注意
- Tailwind v4では、カラー名を`theme.extend.colors`に追加する代わりに、`@theme`のCSSカスタムプロパティ（`--color-*`）を使い、クラス側で任意値シンタックス（`text-[--color-xxx]`）として参照するのがシンプルで確実です。