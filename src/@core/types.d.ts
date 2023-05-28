import type { UserConfig as UserLayoutConfig } from '@layouts/types'
import type { Ref } from 'vue'
import { RouteTransitions, Skins } from './enums'

export interface UserThemeConfig {
  app: {
    title: UserLayoutConfig['app']['title']
    logo: UserLayoutConfig['app']['logo']
    contentWidth: UserLayoutConfig['app']['contentWidth']
    contentLayoutNav: UserLayoutConfig['app']['contentLayoutNav']
    overlayNavFromBreakpoint: UserLayoutConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserLayoutConfig['app']['enableI18n']
    theme: string
    isRtl: UserLayoutConfig['app']['isRtl']
    skin: typeof Skins[keyof typeof Skins]
    routeTransition:typeof RouteTransitions[keyof typeof RouteTransitions]
    iconRenderer: UserLayoutConfig['app']['iconRenderer']
  }
  navbar: {
    type: UserLayoutConfig['navbar']['type']
    navbarBlur: UserLayoutConfig['navbar']['navbarBlur']
  }
  footer: {
    type: UserLayoutConfig['footer']['type']
  }
  verticalNav: {
    isVerticalNavCollapsed: UserLayoutConfig['verticalNav']['isVerticalNavCollapsed']
    defaultNavItemIconProps: UserLayoutConfig['verticalNav']['defaultNavItemIconProps']
    isVerticalNavSemiDark: boolean
  }
  horizontalNav: {
    type: UserLayoutConfig['horizontalNav']['type']
    transition?: UserLayoutConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserLayoutConfig['icons']['chevronDown']
    chevronRight: UserLayoutConfig['icons']['chevronRight']
    close: UserLayoutConfig['icons']['close']
    verticalNavPinned: UserLayoutConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserLayoutConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserLayoutConfig['icons']['sectionTitlePlaceholder']
  }
}

/*
  TODO: use MergeDeep for DRY
   Waiting for https://github.com/sindresorhus/type-fest/issues/150
*/
export interface ThemeConfig {
  app: {
    title: UserThemeConfig['app']['title']
    logo: UserThemeConfig['app']['logo']
    contentWidth: Ref<UserThemeConfig['app']['contentWidth']>
    contentLayoutNav: Ref<UserThemeConfig['app']['contentLayoutNav']>
    overlayNavFromBreakpoint: UserThemeConfig['app']['overlayNavFromBreakpoint']
    enableI18n: UserThemeConfig['app']['enableI18n']
    theme: Ref<UserThemeConfig['app']['theme']>
    isRtl: Ref<UserThemeConfig['app']['isRtl']>
    skin: Ref<UserThemeConfig['app']['skin']>
    routeTransition: Ref<UserThemeConfig['app']['routeTransition']>
    iconRenderer?: UserThemeConfig['app']['iconRenderer']
  }
  navbar: {
    type: Ref<UserThemeConfig['navbar']['type']>
    navbarBlur: Ref<UserThemeConfig['navbar']['navbarBlur']>
  }
  footer: {
    type: Ref<UserThemeConfig['footer']['type']>
  }
  verticalNav: {
    isVerticalNavCollapsed: Ref<UserThemeConfig['verticalNav']['isVerticalNavCollapsed']>
    defaultNavItemIconProps: UserThemeConfig['verticalNav']['defaultNavItemIconProps']
    isVerticalNavSemiDark: Ref<UserThemeConfig['verticalNav']['isVerticalNavSemiDark']>
  }
  horizontalNav: {
    type: Ref<UserThemeConfig['horizontalNav']['type']>
    transition?: UserThemeConfig['horizontalNav']['transition']
  }
  icons: {
    chevronDown: UserThemeConfig['icons']['chevronDown']
    chevronRight: UserThemeConfig['icons']['chevronRight']
    close: UserThemeConfig['icons']['close']
    verticalNavPinned: UserThemeConfig['icons']['verticalNavPinned']
    verticalNavUnPinned: UserThemeConfig['icons']['verticalNavUnPinned']
    sectionTitlePlaceholder: UserThemeConfig['icons']['sectionTitlePlaceholder']
  }
}

export interface LoginResponse {
  id: internal
  username: string
  email: string
  roles: string[]
  nbbl_amount: float
  balance_amount: float
}

export interface APIResponse {
  message: string
  success: bool
}

export interface TransferResponse {
  fromAmount: float
  toAmount: float
  message: string
  success: bool
}

export interface Product {
  name: string
  price: float
  productOwner: string
  description: string
  quantity: number
}
