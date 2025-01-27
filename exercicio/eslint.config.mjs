import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';  // Importando o parser diretamente

export default [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'], // Arquivos que devem ser analisados
    languageOptions: {
      ecmaVersion: 'latest',  // Usar a versão mais recente do ECMAScript
      sourceType: 'module',   // Definir como módulo ES6
      parser: parser,         // Usar o parser do TypeScript para todos os arquivos
      parserOptions: {
        ecmaFeatures: {
          jsx: true,  // Habilitar o suporte a JSX para arquivos .jsx e .tsx
        },
      },
      globals: {
        browser: true,  // Ambiente do navegador
        node: true,     // Ambiente Node.js
      },
    },
    plugins: {
      react: eslintPluginReact,  // Plugin React
      'react-hooks': eslintPluginReactHooks,  // Regras para hooks do React
      prettier: eslintPluginPrettier,  // Integração com Prettier
      '@typescript-eslint': typescriptEslintPlugin,  // Plugin do TypeScript
      import: eslintPluginImport,  // Plugin para boas práticas de importação
    },
    rules: {
      'react/react-in-jsx-scope': 'off',  // Não é necessário importar o React no JSX com a nova transformação
      'react/prop-types': 'off',  // Desativar validação de prop-types se estiver usando TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',  // Desativar a exigência de tipos explícitos
      '@typescript-eslint/no-explicit-any': 'warn',  // Avisar quando 'any' for usado
      '@typescript-eslint/no-non-null-assertion': 'warn',  // Avisar sobre o uso de '! (assertion)'
      '@typescript-eslint/consistent-type-assertions': 'warn',  // Garantir consistência nas assertivas de tipo
      'prettier/prettier': 'error',  // Integrar com Prettier para formatação
      'no-console': 'warn',  // Avisar sobre o uso de console.log
      'no-debugger': 'warn',  // Avisar sobre o uso de debugger
      eqeqeq: 'warn',  // Reforçar o uso de === em vez de ==
      curly: 'warn',  // Exigir chaves nas estruturas de controle
      'prefer-const': 'warn',  // Preferir const sobre let quando não houver reatribuição
      'no-implicit-coercion': 'warn',  // Evitar coerções implícitas
    },
  },
  // Configuração para arquivos TypeScript
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      // Defina regras específicas para TypeScript aqui, se necessário
    },
  },
];
