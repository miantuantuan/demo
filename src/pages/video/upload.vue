<template>
  <div>
    <div class="container" style="padding: 10px;">
      <div class="form-box">
        <span style="margin:10px;font-weight: bolder;">数据导入</span>
        <el-upload
          ref="date"
          class="date-uploader"
          action="/bigdata-web/rocket/upload/"
          :show-file-list="true"
          :headers="header"
          :before-upload="dateBefore"
          :auto-upload="true"
          style="margin:10px;">
          <el-button slot="trigger" size="small" type="primary" style="border:0px;width:300px;">上传</el-button>
        </el-upload>
        <!-- <el-button slot="trigger" size="small" type="primary" style="border:0px;width:300px;" @click="start()">确定</el-button> -->
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
            <el-table :data=searchProject(props.row)>
              <el-table-column label="序号" type="index"></el-table-column>
              <el-table-column label="型号" prop="fModel"></el-table-column>
              <el-table-column label="发次" prop="fLaunch"></el-table-column>
              <!-- <el-table-column label="上传时间" prop="fDate"></el-table-column> -->
              <el-table-column label="测试地点" prop="flocation"></el-table-column>
              <el-table-column label="测试阶段" prop="fStage"></el-table-column>
              <el-table-column label="测试状态" prop="fStatusName"></el-table-column>
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
        pageCount:10,
        rowCount:0,
        cur_page:1
      }
    },
    created(){
      this.init();
    },
    computed: {
    },
    methods: {
      init(){
        this.url = "/bigdata-web/rocket/data/getList";
        var params = new URLSearchParams();
        params.append('start',this.cur_page);
        params.append('rows',this.pageCount);
//        this.$axios.post(this.url,params).then(res => {
//          // this.datas = res.data.list;
//          // console.log(res.data.list)
//        })
      },
      async dateBefore(file) {
        var md =  await this.computeMD5(file)
        console.log('md5',md)
        return true;
      },
      // async dateBefore(file) {
      //     // var md = this.computeMD5(file)
      //     console.log('file',file)
      //     var that = this
      //     let promise = new Promise((resolve) => {
      //     this.$nextTick(function () {
      //         var md = await this.computeMD5(file)
      //         console.log(file.md5)
      //         resolve(true);
      //     });
      // console.log('mdd',file.md5)
      // });
      // while(true){
      //
      //     if(file.md5 == null){
      //         console.log(file)
      //         break;
      //     }
      // }
      // return true;
      // },
      dataOn(event,file,fileList){
        console.log(this.header.md5)
      },
      handleCurrentChange(val) {
        this.cur_page = val;
      },
      searchProject(row){
        if(row.project == null){
          if(row.fId == 1){
            row.project = [
              {
                fId: 1,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 1,
                fProgressStatus: 70,
                fProgressMessage: '111111111111111111111111111'
              },{
                fId: 2,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 1,
                fProgressStatus: 40,
                fProgressMessage: '111111111111111111111111111'
              },{
                fId: 9,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 3,
                fProgressStatus: 40,
                fProgressMessage: '111111111111111111111111111'
              }
            ]
          }
          if(row.fId == 2){
            row.project = [
              {
                fId: 3,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 2,
                fProgressStatus: 100,
                fProgressMessage: '111111111111111111111111111'
              },{
                fId: 4,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 1,
                fProgressStatus: 40,
                fProgressMessage: '111111111111111111111111111'
              }
            ]
          }
          if(row.fId == 3){
            row.project = [
              {
                fId: 5,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 1,
                fProgressStatus: 90,
                fProgressMessage: '111111111111111111111111111'
              },{
                fId: 6,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 2,
                fProgressStatus: 100,
                fProgressMessage: '111111111111111111111111111'
              }
            ]
          }
          if(row.fId == 4){
            row.project = [
              {
                fId: 7,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 2,
                fProgressStatus: 100,
                fProgressMessage: '111111111111111111111111111'
              },{
                fId: 8,
                fLaunch: 'Y1',
                fModel: 'CZ-4',
                fDate: '2019-05-20 11:11:11',
                flocation: '单机',
                fStage: '总测',
                fStatusName: '飞行',
                fStatus: 2,
                fProgressStatus: 100,
                fProgressMessage: '111111111111111111111111111'
              }
            ]
          }
          this.projectStatus(row.project);
        }
        return row.project;
      },
      projectStatus(projects){
        projects.forEach(project => {
          if(project.fStatus == 2){
            project.color = 'success'
          }
          if(project.fStatus == 3){
            project.color = 'exception'
          }else{
            project.showMessage = true;
          }
        });
      },
      computeMD5(file) {
        return new Promise((resolve, reject) => {
          var fileReader = new FileReader();
          var spark = new SparkMD5(); //创建md5对象（基于SparkMD5）
          fileReader.readAsBinaryString(file);
          const _this = this;

          // if (file.size > 1024 * 1024*10) {
          //     var data1 = file.slice(0, 1024 * 1024*10); //将文件进行分块 file.slice(start,length)
          //     fileReader.readAsBinaryString(data1); //将文件读取为二进制码
          // } else {
          //     fileReader.readAsBinaryString(file);
          // }
          fileReader.onload = function (e) {
            spark.appendBinary(e.target.result);
            var md5 = spark.end()
            console.log("MD5",md5)

            resolve(md5)
          };

        })
      },
      // async computeMD5(file) {
      //     var fileReader = new FileReader();
      //     var spark = new SparkMD5(); //创建md5对象（基于SparkMD5）
      //     fileReader.readAsBinaryString(file);
      //     // const _this = this;
      //     console.log('进入')
      //     // if (file.size > 1024 * 1024*10) {
      //     //     var data1 = file.slice(0, 1024 * 1024*10); //将文件进行分块 file.slice(start,length)
      //     //     fileReader.readAsBinaryString(data1); //将文件读取为二进制码
      //     // } else {
      //     //     fileReader.readAsBinaryString(file);
      //     // }
      //     fileReader.onload = function(e) {
      //         spark.appendBinary(e.target.result);
      //         var md5 = spark.end()
      //         file.md5 = md5
      //       // file = file.assign(sour)
      //
      //     };
      //     return file
      // },
      start(){
        this.$refs.date.submit()
      }
    }
  }
</script>

<style>
  .el-upload {
    width: 0%;
  }
  .date-uploader{
    height: 30px;
    width: 300px;
    margin: 0px;
  }
  .date-uploader .el-upload {
    border: 0px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 30px;
    min-width: 300px;
    border-color: #409EFF;
  }
  .el-upload-dragger{
    height: 30px;
    width: 300px;
    border: 0px;
  }
</style>
