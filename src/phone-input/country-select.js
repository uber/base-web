/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StyledRoot, StyledFlag, StyledDialCode} from './styled-components.js';
import {COUNTRIES} from './constants.js';
import CountrySelectDropdown from './country-select-dropdown.js';
import {default as FilterInput} from './filter-input.js';
import {Block} from '../block/index.js';
import {
  Select as DefaultSelect,
  filterOptions,
  StyledControlContainer,
} from '../select/index.js';
import {PLACEMENT} from '../popover/index.js';
import {getOverrides, mergeOverrides} from '../helpers/overrides.js';
import defaultProps from './default-props.js';

import type {CountryT, CountrySelectPropsT} from './types.js';

CountrySelect.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {current: null},
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
};

function ControlContainer(props) {
  const {$isOpen, onKeyDown, ...rest} = props;
  //prevent handling keydown event, when Dropdown are open
  //so dropdown will handle keydown event by yourself.
  const handleKeyDown = event => {
    if (!$isOpen) {
      onKeyDown(event);
    }
  };
  return (
    <StyledControlContainer
      onKeyDown={handleKeyDown}
      $isOpen={$isOpen}
      {...rest}
    />
  );
}

export default function CountrySelect(props: CountrySelectPropsT) {
  const {
    country,
    disabled,
    inputRef,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    onCountryChange,
    overrides,
    size,
    searchable,
  } = props;
  const [filterMask, setFilterMask] = React.useState('');
  const onFilter = event => setFilterMask(event.currentTarget.value);
  //overrides
  const baseOverrides = {
    Root: {
      component: StyledRoot,
      props: {$size: size},
    },
    ControlContainer: {
      component: ControlContainer,
      style: props => {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          };
        }
      },
    },
    IconsContainer: {
      style: {
        paddingRight: '0',
      },
    },
    SingleValue: {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    SelectDropdown: {
      component: CountrySelectDropdown,
      props: {
        country: country,
        maxDropdownHeight: maxDropdownHeight,
        mapIsoToLabel: mapIsoToLabel,
        onFilter: onFilter,
        searchable: searchable,
        maxDropdownWidth: maxDropdownWidth,
        overrides: {
          PopoverContentContainer: overrides.PopoverContentContainer,
          CountrySelectDropdown: overrides.CountrySelectDropdown,
          CountrySelectDropdownListItem:
            overrides.CountrySelectDropdownListItem,
          CountrySelectDropdownFlagColumn:
            overrides.CountrySelectDropdownFlagColumn,
          CountrySelectDropdownNameColumn:
            overrides.CountrySelectDropdownNameColumn,
          CountrySelectDropdownDialcodeColumn:
            overrides.CountrySelectDropdownDialcodeColumn,
          EmptyState: overrides.EmptyState,
          FilterInput: {
            component: FilterInput,
            props: {
              overrides: {
                FilterInput: overrides.FilterInput,
              },
            },
          },
        },
      },
    },
    Popover: {
      props: {
        placement: PLACEMENT.bottomLeft,
      },
    },
  };
  const [Select, selectProps] = getOverrides(
    overrides.CountrySelect,
    DefaultSelect,
  );
  // $FlowFixMe
  selectProps.overrides = mergeOverrides(baseOverrides, selectProps.overrides);
  const [DialCode, dialCodeProps] = getOverrides(
    overrides.DialCode,
    StyledDialCode,
  );

  return (
    <Block display="flex" alignItems="center">
      <Select
        size={size}
        value={[country]}
        disabled={disabled}
        onChange={event => {
          onCountryChange(event);
          // After choosing a country, shift focus to the text input
          if (inputRef && inputRef.current) {
            inputRef.current.focus();
          }
        }}
        onClose={event => {
          setFilterMask('');
        }}
        options={Object.values(COUNTRIES)}
        clearable={false}
        //set to false because our `searchable` property is not the select property `searchable`
        searchable={false}
        filterOptions={(options, filterValue, excludeOptions, newProps) =>
          filterOptions(options, filterMask, excludeOptions, newProps)
        }
        getValueLabel={(value: {option: CountryT}) => {
          return <StyledFlag iso={value.option.id} $size={size} />;
        }}
        {...selectProps}
      />
      <DialCode {...dialCodeProps}>{country.dialCode}</DialCode>
    </Block>
  );
}
