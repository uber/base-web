/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// @ts-ignore
import extend from 'just-extend';

import type { Locale } from './types';
import en_US from './en_US';

import type { AccordionLocale as AccordionLocaleAlias } from '../accordion';
import type { BreadcrumbLocale as BreadcrumbLocaleAlias } from '../breadcrumbs';
import type { DatepickerLocale as DatepickerLocaleAlias } from '../datepicker';
import type { DataTableLocale as DataTableLocaleAlias } from '../data-table';
import type { ButtonGroupLocale as ButtonGroupLocaleAlias } from '../button-group';
import type { FileUploaderLocale as FileUploaderLocaleAlias } from '../file-uploader';
import type { FileUploaderBetaLocale as FileUploaderBetaLocaleAlias } from '../file-uploader-beta';
import type { MenuLocale as MenuLocaleAlias } from '../menu';
import type { ModalLocale as ModalLocaleAlias } from '../modal';
import type { DrawerLocale as DrawerLocaleAlias } from '../drawer';
import type { PaginationLocale as PaginationLocaleAlias } from '../pagination';
import type { SelectLocale as SelectLocaleAlias } from '../select';
import type { ToastLocale as ToastLocaleAlias } from '../toast';

export const LocaleContext: React.Context<Locale> = React.createContext(en_US);

type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };
export type LocaleProviderProps = {
  locale: DeepPartial<Locale>;
  children: React.ReactNode | undefined | null;
};

const LocaleProvider: React.FC<LocaleProviderProps> = (props) => {
  const { locale, children } = props;
  const parentLocale = React.useContext(LocaleContext) ?? {};

  return (
    // this is poorly documented but specifying true enforces that the object is deeply extended
    // https://www.npmjs.com/package/just-extend
    // @ts-expect-error todo(ts-migration) TS2740 Type '{}' is missing the following properties from type 'Locale': accordion, breadcrumbs, datepicker, datatable, and 8 more.
    <LocaleContext.Provider value={extend(true, {}, en_US, parentLocale, locale)}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;

export type { Locale };

/** @deprecated inded use type exported from the component itself */
export type AccordionLocale = AccordionLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type BreadcrumbLocale = BreadcrumbLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type DatepickerLocale = DatepickerLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type DataTableLocale = DataTableLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type ButtonGroupLocale = ButtonGroupLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type FileUploaderLocale = FileUploaderLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type FileUploaderBetaLocale = FileUploaderBetaLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type MenuLocale = MenuLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type ModalLocale = ModalLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type DrawerLocale = DrawerLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type PaginationLocale = PaginationLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type SelectLocale = SelectLocaleAlias;
/** @deprecated inded use type exported from the component itself */
export type ToastLocale = ToastLocaleAlias;
