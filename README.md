# vite-typescript-react

[vite:公式:Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)、[vite:公式:Community Templates](https://vitejs.dev/guide/#community-templates)での TypeScript + React の作成例

## SetUp

```
npm install
```

## Run

```
npm run dev
```

## Testing

```
npm run test
```

## Create Memo

[vite:公式:Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)以降から実行

### Testing

vitest + @testing-library/react + happy-dom

```
npm install --save-dev vitest
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event
npm install --save-dev vite-tsconfig-paths @vitejs/plugin-react happy-dom jsdom
npm install --save-dev @happy-dom/jest-environment
```

### Tailwind

[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

## Memo

パッケージ全体のバージョンを上げた際のオペレーション

```
npx -p npm-check-updates -c "ncu"
npx npm-check-updates -u
npm install
```
