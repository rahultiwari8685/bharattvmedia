CKEDITOR.editorConfig = function (config) {
  config.height = 500

  config.allowedContent = true

  config.extraPlugins = 'uploadimage,image2'

  config.removePlugins = 'easyimage,cloudservices'

  config.filebrowserUploadUrl = 'https://api.bharattvmedia.com/api/upload/ckeditor'

  config.filebrowserUploadMethod = 'form'
}
