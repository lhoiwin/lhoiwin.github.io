(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{321:function(n,s,a){n.exports=a.p+"assets/img/image-20200323002738070.a51fcfc7.png"},355:function(n,s,a){"use strict";a.r(s);var t=a(10),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"springboot2-webflux-响应式编"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot2-webflux-响应式编"}},[n._v("#")]),n._v(" SpringBoot2 - WebFlux 响应式编")]),n._v(" "),t("p",[t("img",{attrs:{src:a(321),alt:"image-20200323002738070"}})]),n._v(" "),t("p",[t("em",[n._v("关键技术点")])]),n._v(" "),t("ul",[t("li",[n._v("lambda实现原理")]),n._v(" "),t("li",[n._v("背压实现关键")]),n._v(" "),t("li",[n._v("SSE")]),n._v(" "),t("li",[n._v("惰性求值实现和原理")]),n._v(" "),t("li",[n._v("Stream运行机制")]),n._v(" "),t("li",[n._v("异步 Servlet")]),n._v(" "),t("li",[n._v("Spring bean 注册")])]),n._v(" "),t("h2",{attrs:{id:"函数式编程-lambda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程-lambda"}},[n._v("#")]),n._v(" 函数式编程 lambda")]),n._v(" "),t("p",[t("em",[n._v("show me the code")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('public class TestDemo {\n\n    public static void main(String[] args) {\n        // 命令式编程\n        int[] nums = {33, 55, 66, 77, 88, 11};\n        int min = Integer.MAX_VALUE;\n        for (int i : nums) {\n            if (i < min) min = i;\n        }\n        System.out.println("最小值: " + min);\n        // jdk8 函数式编程\n        //  int min2 = IntStream.of(nums).min().getAsInt();\n        // 多线程\n        int min2 = IntStream.of(nums).parallel().min().getAsInt();\n        System.out.println("最小值: " + min2);\n        \n        // 开启一个多线程 - 4行代码\n        new Thread(new Runnable(){\n            @Override\n            public void run() {\n                System.out.println("多线程");\n            }\n        }).start();\n        // jdk8 lambda\n        new Thread(() -> System.out.println("多线程"));\n    }\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br"),t("span",{staticClass:"line-number"},[n._v("24")]),t("br"),t("span",{staticClass:"line-number"},[n._v("25")]),t("br"),t("span",{staticClass:"line-number"},[n._v("26")]),t("br"),t("span",{staticClass:"line-number"},[n._v("27")]),t("br")])]),t("h3",{attrs:{id:"jdk8-新特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk8-新特性"}},[n._v("#")]),n._v(" jdk8 新特性")]),n._v(" "),t("p",[t("em",[n._v("接口默认方法")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("@FunctionalInterface\ninterface Interface1 {\n    int doubleNum(int i);\n\n    default int add(int a, int b) {\n        return a + b;\n    }\n}\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br")])]),t("p",[t("em",[n._v("Stream 流编程")])]),n._v(" "),t("h2",{attrs:{id:"spring-webflux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-webflux"}},[n._v("#")]),n._v(" Spring WebFlux")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/47a209a8799e417a022e8744a80b86eb/xmlnote/3637D874E91C4C11840AAC552B235501/8593",alt:"对比图"}})]),n._v(" "),t("p",[t("em",[n._v("特点")])]),n._v(" "),t("ul",[t("li",[n._v("非阻塞")]),n._v(" "),t("li",[n._v("以streams为主")]),n._v(" "),t("li",[n._v("数据库多使用非关系数据库")])]),n._v(" "),t("p",[t("em",[n._v("优势")])]),n._v(" "),t("ul",[t("li",[n._v("高并发量")])])])}),[],!1,null,null,null);s.default=e.exports}}]);