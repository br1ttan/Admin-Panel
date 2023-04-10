import { AppRouteEnum } from "@core";
import { SidebarMenuItemSrcPathEnum, SidebarMenuItemTitleEnum } from "../enums";
import { SidebarMenuItemArrayInterface } from "../interfaces";

export const SidebarMenuItemArray: SidebarMenuItemArrayInterface[] = [
    {
        title: SidebarMenuItemTitleEnum.Overview,
        srcPath: SidebarMenuItemSrcPathEnum.Overview,
        route: AppRouteEnum.Overview
    },
    {
        title: SidebarMenuItemTitleEnum.Transactions,
        srcPath: SidebarMenuItemSrcPathEnum.Transactions,
        route: AppRouteEnum.Transactions
    },
    {
        title: SidebarMenuItemTitleEnum.Cards,
        srcPath: SidebarMenuItemSrcPathEnum.Cards,
        route: AppRouteEnum.Cards
    },
    {
        title: SidebarMenuItemTitleEnum.Invoices,
        srcPath: SidebarMenuItemSrcPathEnum.Invoices,
        route: AppRouteEnum.Invoices
    },
    {
        title: SidebarMenuItemTitleEnum.Goals,
        srcPath: SidebarMenuItemSrcPathEnum.Goals,
        route: AppRouteEnum.Goals
    },
    {
        title: SidebarMenuItemTitleEnum.Settings,
        srcPath: SidebarMenuItemSrcPathEnum.Settings,
        route: AppRouteEnum.Settings
    },
    {
        title: SidebarMenuItemTitleEnum.Terminal,
        srcPath: SidebarMenuItemSrcPathEnum.Terminal,
        route: AppRouteEnum.Terminal
    },
];
