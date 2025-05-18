module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Integração com Prettier para formatação automática
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Garante as regras dos hooks
    'react-hooks/exhaustive-deps': 'warn', // Garante dependências no useEffect
    'react/prop-types': 'off', // Desnecessário com TypeScript
    'react/react-in-jsx-scope': 'off', // Desde React 17 não é mais necessário
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Corrigido o typo
    '@typescript-eslint/no-explicit-any': 'warn', // Aviso para evitar uso excessivo de 'any'
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignora variáveis iniciadas com _
    'no-console': 'warn', // Aviso para não deixar console.logs
    'no-debugger': 'warn' // Aviso para não deixar debuggers no código
  },
  settings: {
    react: {
      version: 'detect' // Detecta a versão do React automaticamente
    }
  }
}
