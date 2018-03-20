/**
 * Created by 邢增智 on 2018/3/19.
 *
 * @description 将后台传来的数据进行格式化
 *
 * @param sNumber 表格序号
 * @param pageSize 每页显示行数
 * @param pageNumber 页数
 */
;(function (global) {
    /**
     * 开启严格模式，规范代码，提高浏览器运行效率
     */
    "use strict";

    var TDFormat = function (configs) {

    }

    TDFormat.prototype = {
        pageSize:10,
        pageNumber:1,
        /**
         * 设置当前的页码
         * @param pageNumber
         */
        setPageNumber:function(pageNumber){
            this.pageNumber = pageNumber;
        },
        /**
         * 获取当前的页码
         * @returns {number}
         */
        getPageNumber:function(){
            return this.pageNumber;
        },
        /**
         * 设置每页显示的行数
         * @param pageSize
         */
        setPageSize:function(pageSize){
            this.pageSize = pageSize;
        },
        /**
         * 获取每页显示的行数
         * @returns {number}
         */
        getPageSize:function(){
            return this.pageSize;
        },
        /**
         * 返回地址
         * @param p 省
         * @param c 市
         * @param a 县
         * @returns {string}
         */
        getAddress:function (p, c, a, d) {
            return p + "," + c + "," + a + "," + d;
        },
        /**
         * 获取状态信息
         * @param status 状态码
         * @returns {*}
         */
        getStatus:function (status){
            switch(status){
                case 100:
                    return "未完善信息";
                case 101:
                    return "等待审核";
                case 102:
                    return "审核未通过";
                case 103:
                    return "审核成功";
                case 104:
                    return "审核成功";
                case 1:
                    return "审核中";
                case 2:
                    return "已上线";
                default:
                    return "已关闭";
            }
        },
        /**
         * 判断值不为空或未定义的情况
         * @param emptyType
         * @returns {*}
         */
        isNoEmpty:function (emptyType){
            if(typeof emptyType == "undefined" || emptyType == ""){
                return "无";
            }else{
                return emptyType;
            }
        },
        /**
         * 返回新序号
         * @returns {number}
         */
        getSerialNumber:function (){
            return (this.getPageNumber() - 1) * this.getPageSize() + 1;
        }

    };

    //兼容CommonJs规范
    if (typeof module !== 'undefined' && module.exports) module.exports = MyPlugin;
    //兼容AMD/CMD规范
    if (typeof define === 'function') define(function() { return MyPlugin; });

    global.TDFormat = TDFormat;

})(this);