(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{322:function(e,r,_){e.exports=_.p+"assets/img/clipboard.7929f361.png"},323:function(e,r,_){e.exports=_.p+"assets/img/clipboard-1584894846378.992a1eb5.png"},324:function(e,r,_){e.exports=_.p+"assets/img/clipboard-1584894937858.2f445ae5.png"},325:function(e,r,_){e.exports=_.p+"assets/img/clipboard-1584895013372.56507f1a.png"},354:function(e,r,_){"use strict";_.r(r);var o=_(10),v=Object(o.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),o("p",[e._v("Docker是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，并发布和应用到任意平台中。比如，你在本地用Python开发网站后台，开发测试完成后，就可以将Python3及其依赖包、Flask及其各种插件、Mysql、Nginx等打包到一个容器中，然后部署到任意你想部署到的环境。")]),e._v(" "),o("p",[o("strong",[e._v("Docker 架构")])]),e._v(" "),o("p",[o("img",{attrs:{src:_(322),alt:"img"}})]),e._v(" "),o("p",[o("img",{attrs:{src:_(323),alt:"img"}})]),e._v(" "),o("p",[e._v("相关概念")]),e._v(" "),o("p",[e._v("Docker daemon : 运行在宿主机上, Docker守护进程.  用户通过Docker clinet(Docker命令)和Docker daemon 交互")]),e._v(" "),o("p",[e._v("Docker client : Docker 命令行工具 , Docker client 与 Docker daemon 通信 并将结果返回给用户, Docker Client 可以通过 socket 或者 RESTful api 远程访问 Docker daemon")]),e._v(" "),o("p",[e._v("Docker Image : 镜像是只读的, 包含了需要的运行的文件. 镜像用来创建 container (容器) , 一个镜像可以运行多个container")]),e._v(" "),o("p",[e._v("Docker container : 容器是Docker的运行组件 , 启动一个镜像就是一个容器. 容器是一个隔离的环境 , 镜像可以通过Dockerfile创建, 也可以从Docker hub/registry 下载")]),e._v(" "),o("p",[e._v("Docker hub/registry : 共享和管理Docker镜像")]),e._v(" "),o("h2",{attrs:{id:"安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),o("p",[e._v("docker依赖linux 内核 , 在linux下安装是最方便的")]),e._v(" "),o("p",[o("strong",[e._v("以非root用户管理Docker")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("创建 docker 组    sudo groupadd docker")])]),e._v(" "),o("li",[o("p",[e._v("向docker组添加用户  sudo usermod -aG docker $USER")])]),e._v(" "),o("li",[o("p",[e._v("注销登录")])])]),e._v(" "),o("p",[o("strong",[e._v("Hello World")])]),e._v(" "),o("p",[e._v("docker run hello-world")]),e._v(" "),o("p",[o("img",{attrs:{src:_(324),alt:"img"}})]),e._v(" "),o("h2",{attrs:{id:"常用命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("name")]),e._v(" "),o("th",[e._v("bash")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("查找Docker Hub上的nginx镜像")]),e._v(" "),o("td",[e._v("docker search nginx")])]),e._v(" "),o("tr",[o("td",[e._v("拉取docker镜像")]),e._v(" "),o("td",[e._v("docker pull image_name")])]),e._v(" "),o("tr",[o("td",[e._v("查看宿主机上的镜像，Docker镜像保存在/var/lib/docker目录下:")]),e._v(" "),o("td",[e._v("docker images")])]),e._v(" "),o("tr",[o("td",[e._v("查看当前有哪些容器正在运行")]),e._v(" "),o("td",[e._v("docker ps")])]),e._v(" "),o("tr",[o("td",[e._v("查看所有容器")]),e._v(" "),o("td",[e._v("docker ps -a")])]),e._v(" "),o("tr",[o("td",[e._v("删除镜像")]),e._v(" "),o("td",[e._v("docker rmi  docker.io/tomcat:7.0.77-jre7   或者  docker rmi b39c68b7af30")])]),e._v(" "),o("tr",[o("td",[e._v("启动、停止、重启容器命令：")]),e._v(" "),o("td",[e._v("docker start container_name/container_iddocker stop container_name/container_iddocker restart container_name/container_id")])]),e._v(" "),o("tr",[o("td",[e._v("后台启动一个容器后，如果想进入到这个容器，可以使用attach命令：")]),e._v(" "),o("td",[e._v("docker attach container_name/container_id")])]),e._v(" "),o("tr",[o("td",[e._v("删除容器的命令")]),e._v(" "),o("td",[e._v("docker rm container_name/container_id")])]),e._v(" "),o("tr",[o("td",[e._v("删除所有停止的容器")]),e._v(" "),o("td",[e._v("docker rm "),o("strong",[e._v("$("),o("strong",[e._v("docker ps -a -q")]),e._v(")")])])]),e._v(" "),o("tr",[o("td",[e._v("查看当前系统Docker信息")]),e._v(" "),o("td",[e._v("docker info")])])])]),e._v(" "),o("p",[o("strong",[e._v("Docker 部署 Mysql")])]),e._v(" "),o("p",[e._v("docker pull mysql")]),e._v(" "),o("p",[e._v("docker run --name mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7")]),e._v(" "),o("h2",{attrs:{id:"dockerfile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),o("p",[e._v("Dockerfile 定义镜像，依赖镜像来运行容器，因此 Dockerfile 是镜像和容器的关键")]),e._v(" "),o("p",[o("strong",[e._v("Dockerfile概念")])]),e._v(" "),o("p",[e._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),e._v(" "),o("p",[e._v("镜像的定制实际上就是定制每一层所添加的配置、文件。如果我们可以把每一层修改、安装、构建、操作的命令都写入一个脚本，用这个脚本来构建、定制镜像，那么之前提及的无法重复的问题、镜像构建透明性的问题、体积的问题就都会解决。这个脚本就是 Dockerfile。")]),e._v(" "),o("p",[e._v("Dockerfile 是一个文本文件，其内包含了一条条的指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。有了 Dockerfile，当我们需要定制自己额外的需求时，只需在 Dockerfile 上添加或者修改指令，重新生成 image 即可，省去了敲命令的麻烦。")]),e._v(" "),o("p",[o("strong",[e._v("Dockerfile 文件格式")])]),e._v(" "),o("p",[o("img",{attrs:{src:_(325),alt:"img"}})]),e._v(" "),o("p",[e._v("Dockerfile 分为四部分："),o("strong",[e._v("基础镜像信息")]),e._v("、"),o("strong",[e._v("维护者信息")]),e._v("、"),o("strong",[e._v("镜像操作指令")]),e._v("、"),o("strong",[e._v("容器启动执行指令")]),e._v("。一开始必须要指明所基于的镜像名称，接下来一般会说明维护者信息；后面则是镜像操作指令，例如 RUN 指令。每执行一条RUN 指令，镜像添加新的一层，并提交；最后是 CMD 指令，来指明运行容器时的操作命令。")]),e._v(" "),o("p",[o("strong",[e._v("构建镜像")])]),e._v(" "),o("p",[o("strong",[e._v("docker build")]),e._v("  命令会根据 Dockerfile 文件及上下文构建新 Docker 镜像。构建上下文是指 "),o("strong",[e._v("Dockerfile 所在的本地路径或一个URL（Git仓库地址）")]),e._v("。构建上下文环境会被递归处理，所以构建所指定的路径还包括了子目录，而URL还包括了其中指定的子模块。")]),e._v(" "),o("p",[e._v("将当前目录做为构建上下文时，可以像下面这样使用docker build命令构建镜像：")]),e._v(" "),o("p",[e._v("docker build . Sending build context to Docker daemon  6.51 MB ...")]),e._v(" "),o("p",[e._v("说明：构建会在 Docker 后台守护进程（"),o("strong",[e._v("daemon")]),e._v("）中执行，而不是"),o("strong",[e._v("CLI")]),e._v("中。构建前，构建进程会将全部内容（递归）发送到守护进程。大多情况下，应该将一个空目录作为构建上下文环境，并将 Dockerfile 文件放在该目录下。")]),e._v(" "),o("p",[e._v("在构建上下文中使用的 Dockerfile 文件，是一个构建指令文件。为了提高构建性能，可以通过.dockerignore文件排除上下文目录下不需要的文件和目录。")]),e._v(" "),o("p",[e._v("在 Docker 构建镜像的第一步，docker CLI 会先在上下文目录中寻找 "),o("strong",[e._v(".dockerignore")]),e._v("文件，根据.dockerignore 文件排除上下文目录中的部分文件和目录，然后把剩下的文件和目录传递给 Docker 服务。")]),e._v(" "),o("p",[e._v("Dockerfile 一般位于构建上下文的根目录下，也可以通过-f指定该文件的位置：")]),e._v(" "),o("p",[e._v("docker build -f /path/to/a/Dockerfile .")]),e._v(" "),o("p",[e._v("构建时，还可以通过 "),o("strong",[e._v("-t")]),e._v(" 参数指定构建成镜像的仓库、标签。")]),e._v(" "),o("p",[o("strong",[e._v("镜像标签")])]),e._v(" "),o("p",[o("strong",[e._v("docker build -t nginx/v3 .")]),e._v("          # 注意那个小数点")]),e._v(" "),o("p",[e._v("在 Docker 守护进程执行 Dockerfile 中的指令前，首先会对 Dockerfile 进行语法检查，有语法错误时会返回：")]),e._v(" "),o("p",[e._v("docker build -t nginx/v3 . Sending build context to Docker daemon 2.048 kB Error response from daemon: Unknown instruction: RUNCMD")]),e._v(" "),o("p",[o("strong",[e._v("缓存")])]),e._v(" "),o("p",[e._v("Docker 守护进程会一条一条的执行 Dockerfile 中的指令，而且会在每一步提交并生成一个新镜像，最后会输出最终镜像的ID。")]),e._v(" "),o("p",[e._v("生成完成后，Docker 守护进程会自动清理你发送的上下文。 Dockerfile文件中的每条指令会被独立执行，并会创建一个新镜像，RUN cd /tmp等命令不会对下条指令产生影响。 Docker 会重用已生成的中间镜像，以加速docker build的构建速度。")]),e._v(" "),o("p",[o("strong",[e._v("一个栗子")])]),e._v(" "),o("p",[e._v("创建一个空文件夹, 创建一个文本文件, 命名为 Dockerfile")]),e._v(" "),o("p",[e._v("mkdir mynginx")]),e._v(" "),o("p",[e._v("cd mynginx")]),e._v(" "),o("p",[e._v("vim Dockerfile")]),e._v(" "),o("p",[e._v("编写内容")]),e._v(" "),o("p",[e._v("FROM nginx RUN echo '")]),o("h1",[e._v("Hello, Docker!")]),e._v("' "),o("strong",[e._v(">")]),e._v(" /usr/share/nginx/html/index.html"),o("p"),e._v(" "),o("p",[e._v("构建镜像")]),e._v(" "),o("p",[e._v("docker build -t nginx:v1 .")]),e._v(" "),o("p",[o("strong",[e._v("修改容器内容")])]),e._v(" "),o("p",[e._v("容器启动后，需要对容器内的文件进行进一步的完善，")]),e._v(" "),o("p",[e._v("可以使用docker exec -it xx bash命令再次进行修改，")]),e._v(" "),o("p",[e._v("以上面的示例为基础，修改 nginx 启动页面内容：")]),e._v(" "),o("p",[e._v("docker exec -it docker_nginx_v1   bash root@3729b97e8226:/# echo '")]),o("h1",[e._v("Hello, Docker neo!")]),e._v("' "),o("strong",[e._v(">")]),e._v(" /usr/share/nginx/html/index.html root@3729b97e8226:/# exit exit"),o("p"),e._v(" "),o("p",[e._v("以交互式终端方式进入 docker_nginx_v1 容器，并执行了 bash 命令，也就是获得一个可操作的 Shell。然后，我们用")]),o("h1",[e._v("Hello, Docker neo!")]),e._v("覆盖了 /usr/share/nginx/html/index.html 的内容。"),o("p")])}),[],!1,null,null,null);r.default=v.exports}}]);