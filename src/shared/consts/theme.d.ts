import { Theme } from "shared/config/theme/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
