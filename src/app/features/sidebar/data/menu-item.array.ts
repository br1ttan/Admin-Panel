import { SidebarMenuItemSrcPathEnum, SidebarMenuItemTitleEnum } from "../enums";
import { SidebarMenuItemArrayInterface } from "../interfaces";

export const SidebarMenuItemArray: SidebarMenuItemArrayInterface[] = [
    {
        title: SidebarMenuItemTitleEnum.Overview,
        srcPath: SidebarMenuItemSrcPathEnum.Overview,
    },
    {
        title: SidebarMenuItemTitleEnum.Transactions,
        srcPath: SidebarMenuItemSrcPathEnum.Transactions,
    },
    {
        title: SidebarMenuItemTitleEnum.Cards,
        srcPath: SidebarMenuItemSrcPathEnum.Cards,
    },
    {
        title: SidebarMenuItemTitleEnum.Invoices,
        srcPath: SidebarMenuItemSrcPathEnum.Invoices,
    },
    {
        title: SidebarMenuItemTitleEnum.Goals,
        srcPath: SidebarMenuItemSrcPathEnum.Goals,
    },
    {
        title: SidebarMenuItemTitleEnum.Settings,
        srcPath: SidebarMenuItemSrcPathEnum.Settings,
    },
];
