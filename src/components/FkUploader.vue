<template>
  <div class="form-horizontal">
    <div class="form-group"
         v-if="initialized">
      <label class="col-sm-12">{{label}}</label>
      <div class="col-sm-12">
        <div class="fileinput fileinput-new input-group"
             data-provides="fileinput">
          <div class="form-control"
               data-trigger="fileinput">
            <i class="glyphicon glyphicon-file"
               v-if="currentFile"></i>
            <span class="fileinput-filename"> {{currentFile && currentFile.name}}</span>
          </div>
          <span class="input-group-addon btn btn-default btn-file">
            <span class="fileinput-new"
                  v-if="!currentFile">{{globalLang === 'zh'?'选择文件':'Select File'}}</span>
            <span v-else>{{globalLang === 'zh'?'更换文件':'Select File'}}</span>
            <input type="file"
                   :accept="accept"
                   name="..."
                   ref="fileInput"
                   @change="setFile">
          </span>
          <template v-if="currentFile">
            <span class="input-group-addon btn btn-info"
                  v-if="isUploading">
              <i class="fa fa-spin fa-spinner"></i>{{globalLang === 'zh'?'上传中...':'Uploading...'}}</span>
            <a class="input-group-addon btn btn-info"
               style="color:#fff"
               v-else
               @click="uploadFile">{{globalLang === 'zh'?'上传':'Upload'}}</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadScript from 'load-script'
import FkMixin from '../mixins/FkMixin.vue'
import md5 from 'md5'

export default {
  props: {
    label: {},
    accept: {
      default: '*',
      type: String
    },
    autoUpload: {
      default: false,
      type: Boolean
    },
    url: {
      default: '/api/oss/getToken'
    },
    config: {
      type: Object,
      default: () => ({
        companyId: '20170113105245001',
        accountId: ''
      })
    }
  },
  data() {
    return {
      initialized: false,
      currentFile: null,
      client: null,
      isUploading: false,
      tokenExpiration: ''
    }
  },
  mixins: [FkMixin],
  beforeMount() {
    let isScriptLoaded = false
    Array.prototype.forEach.call(document.scripts, script => {
      if (script.getAttribute('data-id') === 'aliyun-oss') {
        isScriptLoaded = true
        return
      }
    })
    // for (const script of document.scripts) {
    //   if (script.getAttribute('data-id') === 'aliyun-oss') {
    //     isScriptLoaded = true
    //     break
    //   }
    // }
    if (isScriptLoaded) {
      return this.initialized = true
    }
    loadScript('//gosspublic.alicdn.com/aliyun-oss-sdk.min.js', {
      attrs: { 'data-id': 'aliyun-oss' }
    }, () => { this.initialized = true })
  },
  methods: {
    setFile(e) {
      this.currentFile = e.target.files[0]
      if (this.autoUpload) {
        this.uploadFile()
      }
    },
    removeFile() {
      this.currentFile = null
      this.$refs.fileInput.value = ''
    },
    getToken() {
      if (this.tokenExpiration && (new Date() > new Date(this.tokenExpiration))) {
        return Promise.resolve(this.client)
      }
      return this.$http.get(this.remote_domain + '/api/oss/getToken')
        .then(res => {
          const { accessKeyId, accessKeySecret, securityToken, bucket, expiration } = res.data.data.ossAccess
          this.tokenExpiration = expiration
          return {
            client: new OSS.Wrapper({
              region: 'oss-cn-hangzhou',
              accessKeyId: accessKeyId,
              accessKeySecret: accessKeySecret,
              stsToken: securityToken,
              bucket: bucket,
              secure: true
            }),
            accountId: res.data.data.accountId,
            companyId: res.data.data.companyId
          }
        })
    },
    makeFileName() {
      let name = []
      Array.prototype.forEach.call(arguments, a => {
        if (a) name.push(a)
      })
      return name.join('/')
    },
    uploadFile() {
      this.isUploading = true
      this.getToken()
        .then(({ client, accountId, companyId }) => {
          client.multipartUpload(
            this.makeFileName(companyId, accountId, md5(this.currentFile.name + '' + new Date()) + '.' + this.currentFile.name.split('.').pop()),
            this.currentFile
          ).then(res => {
            console.log(res)
            this.isUploading = false
            this.$emit('uploaded', {
              name: res.name,
              originalName: this.currentFile.name,
              s_url: client.signatureUrl(res.name, { expiration: 3600 })
            })
            this.removeFile()
          })
        })
        .catch(e => {
          this.isUploading = false
          console.error(e)
        })
    }
  }
}
</script>