/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import TreeNode from './tree-node.js';
import {StyledTreeItemList} from './styled-components.js';
import {
  getPrevId,
  getNextId,
  getParentId,
  getFirstChildId,
  getEndId,
  getExpandableSiblings,
  defaultGetId,
} from './utils.js';
import type {TreeViewPropsT, TreeNodeT, TreeNodeIdT} from './types.js';
import {isFocusVisible} from '../utils/focusVisible.js';

import {getOverride, getOverrideProps} from '../helpers/overrides.js';

export default function TreeView(props: TreeViewPropsT) {
  const {
    data,
    onToggle,
    overrides = {},
    renderAll,
    getId = defaultGetId,
  } = props;
  const {Root: RootOverride} = overrides;

  const Root = getOverride(RootOverride) || StyledTreeItemList;
  const firstId = data.length && getId(data[0]);
  const [selectedNodeId, setSelectedNodeId] = React.useState(firstId);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const treeItemRefs: {
    // eslint-disable-next-line flowtype/no-weak-types
    current: {[key: TreeNodeIdT]: React.ElementRef<any>},
  } = React.useRef({});

  const focusTreeItem = (id: TreeNodeIdT | null) => {
    if (!id) return;
    setSelectedNodeId(id);
    treeItemRefs.current[id].current.focus();
  };

  const onKeyDown = (e: KeyboardEvent, node: TreeNodeT) => {
    // eslint-disable-next-line flowtype/no-weak-types
    const elementId = ((e.target: any): HTMLLIElement).getAttribute(
      'data-nodeid',
    );
    // this check prevents bubbling
    if (elementId !== getId(node) && parseInt(elementId) !== getId(node)) {
      return;
    }
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (typeof node.isExpanded === 'boolean' && !node.isExpanded) {
          onToggle && onToggle(node);
        } else {
          focusTreeItem(getFirstChildId(data, selectedNodeId, getId));
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (typeof node.isExpanded === 'boolean' && node.isExpanded) {
          onToggle && onToggle(node);
        } else {
          focusTreeItem(getParentId(data, selectedNodeId, null, getId));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusTreeItem(getPrevId(data, selectedNodeId, null, getId));
        break;
      case 'ArrowDown':
        e.preventDefault();
        focusTreeItem(getNextId(data, selectedNodeId, null, getId));
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        onToggle && onToggle(node);
        break;
      case 'Home':
        e.preventDefault();
        if (data.length) {
          focusTreeItem(getId(data[0]));
        }
        break;
      case 'End':
        e.preventDefault();
        focusTreeItem(getEndId(data, getId));
        break;
      case '*':
        e.preventDefault();
        getExpandableSiblings(data, selectedNodeId, getId).forEach(
          node => onToggle && onToggle(node),
        );
        break;
    }
  };

  const onFocus = (event: SyntheticEvent<>) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
    if (selectedNodeId === null && data.length) {
      setSelectedNodeId(getId(data[0]));
    }
  };

  const onBlur = (event: SyntheticEvent<>) => {
    if (focusVisible) {
      setFocusVisible(false);
    }
  };

  return (
    <Root role="tree" {...getOverrideProps(RootOverride)}>
      {data.length &&
        data.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            getId={getId}
            onToggle={node => {
              onToggle && onToggle(node);
              focusTreeItem(getId(node));
            }}
            overrides={overrides}
            renderAll={renderAll}
            selectedNodeId={selectedNodeId}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            addRef={(id: TreeNodeIdT, ref: React.ElementRef<HTMLLIElement>) => {
              treeItemRefs.current[id] = ref;
            }}
            isFocusVisible={focusVisible}
          />
        ))}
    </Root>
  );
}
