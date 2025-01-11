import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Add TypeScript specific configurations
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Change no-explicit-any from error to warning
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Configure unused variables
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      
      // Other TypeScript rules
      "@typescript-eslint/no-unused-expressions": "warn",
      "no-unused-expressions": "off",
      
      // Optional: disable specific rules if needed
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      
    }
  },
  
  // General rules for all files
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "off" // Disable in favor of @typescript-eslint version
    }
  }
];

export default eslintConfig;