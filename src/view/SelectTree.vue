<template>
    <div class="maxiaoqu-selecttree">
        <!--基础用法-->
        <mxqTreerows title="1、基础用法" message="基础的树形结构展示">
            <div slot="tree">
                <vue-selecttree
                        :data="data1"
                        :props="defaultProps1"
                        @node-click="handleNodeClick1">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--基础用法-->
        <mxqTreerows title="2、在点击节点的时候展开或者收缩节点" message="点击节点展开、收缩">
            <div slot="tree">
                <vue-selecttree
                        :data="data1"
                        :props="defaultProps1"
                        @node-click="handleNodeClick1"
                        :expand-on-click-node="false">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--可选择-->
        <mxqTreerows title="3、可选择" message="适用于需要选择层级时使用">
            <div slot="tree">
                <vue-selecttree
                        :props="props2"
                        :load="loadNode2"
                        lazy
                        show-checkbox
                        @node-click="handleNodeClick2"
                        @check-change="handleCheckChange2">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--懒加载自定义叶子节点-->
        <mxqTreerows title="4、懒加载自定义叶子节点" message="懒加载自定义叶子节点">
            <div slot="tree">
                <vue-selecttree
                        :props="props3"
                        :load="loadNode3"
                        lazy
                        show-checkbox>
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--默认展开和默认选中-->
        <mxqTreerows title="5、默认展开和默认选中" message="可将 Tree 的某些节点设置为默认展开或默认选中。">
            <div slot="tree">
                <vue-selecttree
                        :data="data4"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        :props="defaultProps4">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--禁用状态-->
        <mxqTreerows title="6、禁用状态" message="可将 Tree 的某些节点设置为禁用状态。">
            <div slot="tree">
                <vue-selecttree
                        :data="data5"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--树节点的选择-->
        <mxqTreerows title="7、树节点的选择" message="树节点的选择。">
            <div slot="tree">
                <vue-selecttree
                        :data="data6"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree6"
                        highlight-current
                        :props="defaultProps6">
                </vue-selecttree>

                <div class="buttons">
                    <button @click="getCheckedNodes6">通过 node 获取</button>
                    <button @click="getCheckedKeys6">通过 key 获取</button>
                    <button @click="setCheckedNodes6">通过 node 设置</button>
                    <button @click="setCheckedKeys6">通过 key 设置</button>
                    <button @click="resetChecked6">清空</button>
                </div>
            </div>
        </mxqTreerows>
        <!--自定义节点内容-->
        <mxqTreerows title="8.1、自定义节点内容(使用 render-content)" message="节点的内容支持自定义，可以在节点区添加按钮或图标等内容。【使用时参考2中的：点击节点展开、收缩，否则会有点击事件冲突】">
            <div slot="tree">
                <vue-selecttree
                        :data="data71"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :expand-on-click-node="false"
                        :render-content="renderContent71">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <mxqTreerows title="9.2、自定义节点内容(使用 scoped slot)" message="节点的内容支持自定义，可以在节点区添加按钮或图标等内容。【使用时参考2中的：点击节点展开、收缩，否则会有点击事件冲突】">
            <div slot="tree">
                <vue-selecttree
                        :data="data72"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :expand-on-click-node="false">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                          <button @click="() => append7(data)"> 增加 </button>
                          <button @click="() => remove7(node, data)"> 删除 </button>
                        </span>
                    </span>
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--节点过滤-->
        <mxqTreerows title="10、节点过滤" message="通过关键字过滤树节点。">
            <div slot="tree">
                <input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText8"/>
                <vue-selecttree
                        class="filter-tree"
                        :data="data8"
                        :props="defaultProps8"
                        default-expand-all
                        :filter-node-method="filterNode8"
                        ref="tree8">
                </vue-selecttree>

            </div>
        </mxqTreerows>
        <!--手风琴模式-->
        <mxqTreerows title="11、手风琴模式" message="对于同一级的节点，每次只能展开一个。">
            <div slot="tree">
                <vue-selecttree
                        :data="data9"
                        :props="defaultProps9"
                        accordion
                        @node-click="handleNodeClick9">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--可拖拽节点-->
        <mxqTreerows title="12、可拖拽节点" message="通过 draggable 属性可让节点变为可拖拽。">
            <div slot="tree">
                <vue-selecttree
                        :data="data10"
                        node-key="id"
                        default-expand-all
                        @node-drag-start="handleDragStart10"
                        @node-drag-enter="handleDragEnter10"
                        @node-drag-leave="handleDragLeave10"
                        @node-drag-over="handleDragOver10"
                        @node-drag-end="handleDragEnd10"
                        @node-drop="handleDrop10"
                        draggable
                        :allow-drop="allowDrop10"
                        :allow-drag="allowDrag10">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--icon图标-->
        <mxqTreerows title="13、icon图标" message="icon图标">
            <div slot="tree">
                <vue-selecttree
                        :data="data11"
                        :props="defaultProps11"
                        default-expand-all
                        @node-click="handleNodeClick11">
                </vue-selecttree>
            </div>
        </mxqTreerows>
        <!--icon图标-->
        <mxqTreerows title="14、icon图标,点击节点放在后侧" message="设置expand-show-right为true即可">
            <div slot="tree">
                <vue-selecttree
                        :data="data11"
                        :props="defaultProps11"
                        default-expand-all
                        :expand-show-right="true"
                        @node-click="handleNodeClick11">
                </vue-selecttree>
            </div>
        </mxqTreerows>
    </div>
</template>

<script>
    import jsonData from '../assets/treeData.json'
    import mxqTreerows from '../components/treerows';
    import vueSelecttree from 'vue-selecttree';
    // import vueSelecttree from '../selecttree/tree';
    // 自定义节点内容
    let id = 1000;
    export default {
        name: 'SelectTree',
        components: {
            mxqTreerows,
            vueSelecttree
        },
        data() {
            return {
                // 基础用法
                data1: jsonData.data1,
                defaultProps1: {
                    children: 'children',
                    label: 'label'
                },
                // 可选择
                props2: {
                    label: 'name',
                    children: 'zones'
                },
                count2: 1,
                // 懒加载自定义叶子节点
                props3: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                // 默认展开和默认选中
                data4: jsonData.data4,
                defaultProps4: {
                    children: 'children',
                    label: 'label'
                },
                // 禁用状态
                data5: jsonData.data5,
                // 树节点的选择
                data6: jsonData.data6,
                defaultProps6: {
                    children: 'children',
                    label: 'label'
                },
                // 自定义节点内容
                data71: JSON.parse(JSON.stringify(jsonData.data7)),
                data72: JSON.parse(JSON.stringify(jsonData.data7)),
                // 节点过滤
                filterText8: '',
                data8: jsonData.data8,
                defaultProps8: {
                    children: 'children',
                    label: 'label'
                },
                // 手风琴模式
                data9: jsonData.data9,
                defaultProps9: {
                    children: 'children',
                    label: 'label'
                },
                // 可拖拽节点
                data10: jsonData.data10,
                defaultProps10: {
                    children: 'children',
                    label: 'label'
                },
                // icon图标
                data11: jsonData.data11,
                defaultProps11: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            // 基础用法
            handleNodeClick1(data) {
                console.log(data);
            },
            // 可选择
            handleCheckChange2(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick2(data) {
                console.log(data);
            },
            loadNode2(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: 'region1'}, {name: 'region2'}]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            },
            // 懒加载自定义叶子节点
            loadNode3(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: 'region'}]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                    const data = [{
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }];

                    resolve(data);
                }, 500);
            },
            // 默认展开和默认选中

            // 禁用状态

            // 树节点的选择
            getCheckedNodes6() {
                console.log(this.$refs.tree6.getCheckedNodes());
            },
            getCheckedKeys6() {
                console.log(this.$refs.tree6.getCheckedKeys());
            },
            setCheckedNodes6() {
                this.$refs6.tree.setCheckedNodes([{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 9,
                    label: '三级 1-1-1'
                }]);
            },
            setCheckedKeys6() {
                this.$refs.tree6.setCheckedKeys([3]);
            },
            resetChecked6() {
                this.$refs.tree6.setCheckedKeys([]);
            },
            // 自定义节点内容
            append7(data) {
                const newChild = {id: id++, label: 'testtest', children: []};
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            remove7(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
            renderContent71(h, {node, data, store}) {
                return (
                    <span class="custom-tree-node">
                        <span>{node.label}</span>
                        <span>
                            <button on-click={()=> this.append7(data)}>增加</button>
                            <button on-click={()=> this.remove7(node, data)}>删除</button>
                        </span>
                    </span>
                );
            },
            // 节点过滤
            filterNode8(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 手风琴模式
            handleNodeClick9(data) {
                console.log(data);
            },
            // 可拖拽节点
            handleDragStart10(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter10(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave10(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver10(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd10(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop10(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop10(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            allowDrag10(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            },
            // icon图标
            handleNodeClick11(data) {
                console.log(data);
            },
        },
        watch: {
            // 节点过滤
            filterText8(val) {
                this.$refs.tree8.filter(val);
            }
        },
    }
</script>

<style lang="less">
    .maxiaoqu-selecttree {
        width: 100%;
        height: 100%;
        display: block;
    }
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>
