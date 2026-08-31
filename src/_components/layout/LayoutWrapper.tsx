import BodyStyleProvider from "@/_context/BodyStyleProvider";
import { theme } from "@/_mui/theme";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import BodyStyleManager from "./BodyStyleManager";

export default async function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BodyStyleProvider>
            <BodyStyleManager />
            {children}
          </BodyStyleProvider>
        </CssBaseline>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
