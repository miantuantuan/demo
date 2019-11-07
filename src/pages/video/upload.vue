<template>
  <div>
    <div class="container" style="padding: 10px;">
      <div class="form-box">
        <form action=""></form>
        <span style="margin:10px;font-weight: bolder;">数据导入</span>
        <el-upload
          ref="date"
          class="date-uploader"
          action="/bigdata-web/rocket/upload/"
          :show-file-list="false"
          :headers="header"
          :on-change='onFileChange'
          :auto-upload="false"
          :on-exceed="ExceedWarning"
          multiple
          :limit=10
        >
          <el-button slot="trigger" size="small" type="primary" style="border:0px;width:100px;" icon="el-icon-folder-opened">选取文件</el-button>
          <el-button slot size="small" v-if="lFileList.length === 0" type="primary" disabled style="border:0px;width:100px;">请选择文件</el-button>
          <el-button slot size="small" v-else type="primary"  style="border:0px;width:100px;" icon="el-icon-upload" @click="uploadFile">确认上传</el-button>
          <el-button slot size="small" type="danger" style="border:0px;width:100px;" @click="clearAllFiles">全部清空</el-button>
          <em class="warning-tips">*仅支持zip格式</em>
        </el-upload>
        {{ lFileList }}
        <!-- <el-upload
           ref="date"
           class="date-uploader"
           action="/bigdata-web/rocket/upload/"
           :show-file-list="false"
           :headers="header"
           :on-success="checkFileWithResponse"
           :before-upload="dateBefore"
           :on-progress='dateBefore'
           :auto-upload="true"
           :limit=10
           >
           <el-button slot="trigger" size="small" type="primary" style="border:0px;width:300px;">上传</el-button>
                      </el-upload> -->

        <div class="load-list-wrap">
          <div class="upload-file-list"  v-for="(fileName, index) in this.lFileList" >
            <div class="upload-file-item back-icon">
              <i class="el-icon-document"></i>
            </div>
            <div class="upload-file-item upload-steps">
              <el-steps :space="200" :active="fileName.stepNum" finish-status="success" :process-status="fileName.stepStatus" direction="vertical">
                <template slot>
                  <div class="upload-progreebar" :style="{ top:progressTop + 'px' }">
                    <el-progress v-if="fileBarPercent >0 && fileBarPercent<110" :percentage="fileBarPercent" color="#67C23A"></el-progress>
                  </div>
                </template>
                <el-step v-for="(item, index) in upMsg" :title="item.title" :description="item.description"></el-step>
              </el-steps>
            </div>
            <div class="upload-file-item upload-infos">
              <div class="file-name-list">
                {{ fileName.name }}
                      </div>
              <!-- <i class="el-icon-success " v-if="uploadStatus == 2" style="color: #0bbd87"></i> -->
              <p class="error-msg" v-if="uploadStatus == 1">(校验失败：{{ checkInfoforError }})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="dataScreen" style="margin-top:20px;padding: 10px;">
      <span style="margin:10px;font-weight: bolder;">数据浏览</span>
      <el-table
        :data="datas"
        style="width: 100%;margin-bottom: 20px;margin:10px;"
        row-key=fId
            stripe>
        <el-table-column type="expand" fixed>
          <template slot-scope="props">
            <el-table :data="props.row.project == null ? returnProject(props.row) : props.row.project">
              <el-table-column label="序号" type="index"></el-table-column>
              <el-table-column label="型号" prop="tdmodelfcode"></el-table-column>
              <el-table-column label="发次" prop="tdLaunchFcode"></el-table-column>
              <el-table-column label="上传时间" prop="fDate"></el-table-column>
              <el-table-column label="测试地点" prop="tdLocationFname"></el-table-column>
              <el-table-column label="测试阶段" prop="tdStageFname"></el-table-column>
              <el-table-column label="测试状态" prop="tdStatusFname"></el-table-column>
              <el-table-column prop="fProgressMessage" show-overflow-tooltip label="项目状态" align="center">
                <template slot-scope="scope">
                  <el-tooltip class="item" effect="dark" :content="scope.row.fProgressMessage" placement="top-start" :disabled="scope.row.showMessage" :open-delay="500">
                    <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.fProgressStatus" :status="scope.row.color"></el-progress>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="数据包" prop="fFileName"></el-table-column>
        <el-table-column label="上传者" prop="fCreateAccount"></el-table-column>
        <el-table-column label="上传时间" prop="fCreateTime"></el-table-column>
        <el-table-column prop="fProgressMessage" label="文件处理进度" align="center">
          <template slot-scope="scope">
            <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.fProgressStatus" :status="scope.row.color"></el-progress>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :page-size="this.pageCount" :total="this.rowCount"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import SparkMD5 from 'spark-md5';
  import pako from 'pako'
  import api from '@/api'
  export default {
    name: 'actionsky',
    data: function(){
      return {
        datas:[
          {
            fId: 1,
            fFileName: 'a',
            fCreateAccount: 'admin',
            fCreateTime: '2019-05-21',
            fProgressStatus: 50,
            color: 'exception',
          },
          {
            fId: 2,
            fFileName: 'b',
            fCreateAccount: 'admin',
            fCreateTime: '2019-05-21',
            fProgressStatus: 70,
          },
          {
            fId: 3,
            fFileName: 'c',
            fCreateAccount: 'admin',
            fCreateTime: '2019-05-21',
            fProgressStatus: 95,
          },
          {
            fId: 4,
            fFileName: 'd',
            fCreateAccount: 'admin',
            fCreateTime: '2019-05-21',
            fProgressStatus: 100,
            color: 'success'
          }

        ],
        header: {
          md5:''
        },
        upMsg:[
          {
            title: '上传',
            color:'0bbd87',
          },
          {
            title: '校验',
            color:'0bbd87'
          },
          {
            title: '入库',
          }
        ],
        progressTop:24,
        fileBarPercent:0,
        checkInfoforError:'',
        uploadStatus: 0, // 表示文件校验的情况，1为失败，2为成功。当失败时展示失败原因
        lFileList:[],
        pageCount:10,
        rowCount:100,
        cur_page:1,
        ts1:0,
        ts2:0,
        stepNumList:[],
        rowData:[],
        stepStatus: 'wait',
        steps:[{
          title:'上传',
          type: 'primary',
          color:'#0bbd87',
          icon: 'el-icon-success',
          timestamp: '2018-04-03 20:46',
          type:'success'
        },
          {
            title:'校验',
            type: 'primary',
            color:'#0bbd87',
            timestamp: '2018-04-03 20:46',
            type:'success'
          },
          {
            title:'上传成功',
            type: 'primary',
            color:'#0bbd87',
            timestamp: '2018-04-03 20:46',
          }
        ]
      }
    },
    created(){
      this.init();
    },
    watch:{
      // fileNameList:function(newList,oldList){
      //   if( this.fileNameList.length > 1 ){
      //     console.log(newList,oldList)
      //     this.uploadStatus = 0
      //     this.stepNum = 0
      //   }
      // }
    },
    mounted(){

//      this.getTestData()
      console.log({window})
      this.$nextTick(() => {
        window.onbeforeunload = function(e){
          var e = window.event||e;
          e.returnValue=("确定离开当前页面吗？");
        }
      })

    },
    destroyed () {

    },
    beforeRouteUpdate (to, from, next) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    },
    beforeRouteLeave (to, from , next) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    },
    methods: {
      init(){
        this.url = "/bigdata-web/rocket/data/getList";
        var params = new URLSearchParams();
        params.append('start',this.cur_page);
        params.append('rows',this.pageCount);
        this.$axios.post(this.url,params).then(res => {
          this.datas = res.data.list;
          this.rowCount = res.data.total
        })
      },
      uploadFile() {
        let vm = this
        this.lFileList.forEach(file => {
          let param = new FormData()
          param.append('file',file)
          api.demo.fileUpload(file).then(res => {
            console.log({res})
          })
        })

      },
      async dateBefore(beforeFile){
        console.log({beforeFile})
        this.header.md5 = await this.computeMD5(file);
      },
      async onFileChange(file) {
        console.log('预览被调用',file)
        this.handleLocalUpLoadOver(file)
        this.header.md5file = await this.computeMD5(file.raw);
        console.log(this.header.md5file)
        this.lFileList.forEach(fileOld => {
          console.log({fileOld})
          if (fileOld.lid === file.uid){
            fileOld.stepStatus = 'success'
          }
        })
        return false;
      },
      dataOn(event,file,fileList){
        console.log(this.header.md5)
      },
      handleCurrentChange(val) {
        this.cur_page = val;

        this.init()
      },
      returnProject(row){
        this.searchProject(row).then((data)=>{
          console.log('data1', data)
          this.rowData = data
        })
        var finalData  = this.rowData
        return finalData
      },
      searchProject(row){
        return new Promise((resolve, reject) => {
          this.url = "/bigdata-web/rocket/project/getProjectDataByLoadDataFid";
          var params = new URLSearchParams();
          params.append('LoadDataFid',row.fId);
          this.$axios.post(this.url,params).then(res => {
            row.project = res.data;
            this.projectStatus(row.project);
            resolve(row.project);
          })
        })
      },
      projectStatus(projects){
        projects.forEach(project => {
          project.fProgressStatus = parseInt(project.fProgressStatus);
          if(project.fStatus == "2"){
            project.color = 'success'
          }
          if(project.fStatus == "3"){
            project.color = 'exception'
          }else{
            project.showMessage = true;
          }
        });
      },
      async computeMD5(file) {
        return new Promise((resolve, reject) => {
          var fileReader = new FileReader();
          var spark = new SparkMD5.ArrayBuffer(); //创建md5对象（基于SparkMD5）
          fileReader.readAsArrayBuffer(file);
          console.log({file})
          var md5
          fileReader.onload = function (e) {
            spark.append(e.target.result);
            console.log({spark})
            md5 = spark.end()
            console.log({md5})
            resolve(md5)
          };
        })
      },
      start(){
        this.$refs.date.submit()
      },
      getTestData(){
        var url = "/bigdata-web/rocket/search?fProjectId=238&paramId=445"
        this.$axios.get(url,{
          responseType: 'arraybuffer'
        }).then(res => {
          console.log('testRes',res)
          this.punzipMsgSTR(res.data)
          this.ts2 = Date.now();
          console.log('解压后',this.ts2)
          console.log((this.ts2 - this.ts1)+'毫秒')
        })
      },
      punzipMsgSTR(str) {
        try {
          this.ts1 = Date.now();
          console.log('解压前时间',this.ts1)
          var restored = pako.inflate(str);
          // console.log('res',restored)
        } catch (err) {
          console.log(err);
        }
        return restored;
      },
      // strToJson(str) {
      //   var json=eval("("+str+")");
      //   return json;
      // }
      //   punzipMsgSTR(data) {
      //     // var key = atob(data.data)
      //     var key = data
      //     // 将二进制字符串转换为字符数组
      //     var charData = key.split('').map(function (x) { return x.charCodeAt(0); });
      //
      //     // 将数字数组转换成字节数组
      //     var binData = new Uint8Array(charData);
      //
      //     // 解压
      //     var data = pako.inflate(key);
      //
      //     // 将GunZip ByTAREAR转换回ASCII字符串
      //     key = String.fromCharCode.apply(null, new Uint16Array(data));
      //
      //     //unescape(str)  --->解压后解码，防止中午乱码
      //     console.log('back',unescape(key))
      //     return unescape(key);
      // }
      handleLocalUpLoadOver(file){
        // 本地上传成功
        console.log('before得到的文件',file)
        var fileItem = {lid:file.uid, name:file.name, stepNum:1, stepStatus:'wait'}
        this.lFileList.push(fileItem)
        console.log('push后的本地文件列表',this.lFileList)
        console.log('当前文件属性',fileItem)
      },
      async Progressing(status) {
        let that = this
        console.log('当前顺序',status,that.progressTop)
        // if(status === 'up'){
        //   that.progressTop = 24
        // } else if(status === 'check'){
        //   that.progressTop = 75
        // }
        var waiting = setInterval(function() {
          if(that.fileBarPercent >100){
            that.fileBarPercent = 0
            clearInterval(waiting)
          }else {
            that.fileBarPercent += 10
          }
        },100)
      },
      ExceedWarning(files, fileList){
        alert("添加失败：单次最多上传10个文件")
      },
      clearAllFiles(){
        this.$refs.date.clearFiles();
        this.lFileList = []
      },
      async checkFileWithResponse(response, file, fileList){
        console.log('校验方法被调用',response,this.lFileList,file)
        let that = this
        // await this.Progressing('up')
        for(var i in that.lFileList){
          if(that.lFileList[i].lid == file.uid){
            if(response.success == false){
              that.lFileList[i].stepStatus = 'error'
              that.uploadStatus = 1
              that.checkInfoforError = response.message
              return false
            } else {
              // await this.Progressing('check')
              that.lFileList[i].stepNum = 2
              that.lFileList[i].stepStatus = 'finish'
              that.uploadStatus = 2
              that.init()
            }
          }
        }
        console.log('延迟执行',that.lFileList)
      }
    }
  }
</script>

<style lang="scss">
  /* 上传文件列表中的样式 */
  .upload-file-list{
    display: inline-block;
    margin-left: 20px;
    vertical-align: top;
    width: calc(50% - 26px);
    min-width: 460px;
    padding: 16px 16px 0 16px;
    box-sizing: border-box;
    border: 1px dashed rgba(0,0,0,0.2);
    border-radius: 3px;
    margin-top:16px;
    position: relative;
    .upload-steps{
      width: 100px;
    }
    .upload-file-item{
      display: inline-block;
      vertical-align:top;
      &.upload-infos{
        width: calc(100% - 120px);
        word-break:break-all;
      }
      &.back-icon{
        width: 80px;
        height: 80px;
        position: absolute;
        color: rgba(0,0,0,1);
        bottom: 40px;
        right: 40px;
        .el-icon-document{
          font-size: 108px;
          color: rgba(0,0,0,0.1);
        }
      }
    }
    .el-steps{
      width: 300px;
      height: 16px;
      &.el-steps--vertical{
        height: 150px;
      }
      .el-step__icon{
        width: 20px;
        height: 20px;
        margin-left:4px;
      }
      .el-step__icon-inner{
        font-size:12px;
      }
      .el-step__title{
        line-height: 28px;
        margin-left: 8px;
      }
      .el-step__title{
        font-size: 14px;
      }
      .el-step__head{
        width: 14px;
      }
      .is-vertical .el-step__line{
        top: 24px;
      }
    }
  }
  .container{
    .load-list-wrap .el-steps{
      position: relative;
      .upload-progreebar{
        position: absolute;
        width: 150px;
        left: 30px;
        top: 24px;
      }
    }
  }

</style>
<style>
  .el-upload {
    width: 0%;
  }
  /*    .date-uploader{
      height: 30px;
      width: 300px;
      margin: 0px;
  } */
  .step-progress{
    width: 200px;
  }
  .date-uploader .el-upload {
    border: 0px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 30px;
    min-width: 120px;
    border-color: #409EFF;
    display: inline-block;
    vertical-align: top;
  }
  .el-upload-dragger{
    height: 30px;
    width: 300px;
    border: 0px;
  }
  .error-msg{
    font-size: 12px;
    color: #e20000;
  }
</style>
