// jsdoc-types.js

/**
 * @typedef {import('vue').VNode} VNode
 */

/**
 * @typedef {object} PanelData
 * @property {string} id - 面板的唯一标识
 * @property {string} title - 显示在选项卡上的标题
 * @property {VNode} content - 面板中要渲染的内容，可以是 VNode 或组件
 */

/**
 * @typedef {PanelData} TabData
 */

/**
 * 包含一组选项卡（面板）的容器
 * @typedef {object} PanelGroup
 * @property {string} id
 * @property {'panel'} type
 * @property {TabData[]} tabs
 * @property {string} activeTabId
 */

/**
 * 用于水平或垂直分割的容器
 * @typedef {object} SplitterLayout
 * @property {string} id
 * @property {'horizontal' | 'vertical'} type - 分割方向
 * @property {LayoutNode[]} children - 子节点数组
 * @property {number[]} sizes - 子节点占据的尺寸比例数组
 */

/**
 * 描述整个布局的节点，可以是面板组或分割器
 * @typedef {PanelGroup | SplitterLayout} LayoutNode
 */
