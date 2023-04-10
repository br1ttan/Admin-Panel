import { AppRouteEnum } from "@core";
import { SidebarMenuItemSrcPathEnum, SidebarMenuItemTitleEnum } from "../enums";

export interface SidebarMenuItemArrayInterface {
    title: SidebarMenuItemTitleEnum;
    srcPath: SidebarMenuItemSrcPathEnum;
    route: AppRouteEnum;
}
