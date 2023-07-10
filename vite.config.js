import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/',
// })

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: "/",
    define: {
      "process.env.APP_NAME": JSON.stringify(env.VITE_APP_DESCRIPTION),
      "process.env.PUBLIC_KEY": JSON.stringify(env.VITE_PUBLIC_KEY),
      "process.env.SERVICE_ID": JSON.stringify(env.VITE_SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.VITE_TEMPLATE_ID),
    },
  };
});
