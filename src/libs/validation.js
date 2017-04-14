import Validator from 'validatorjs'

Validator.useLang('zh')

Validator.registerAsync('cn-mobile', function(value, req, attribute, passes) {
  if (value.match(/^1[0-9]{10}$/)) return passes()
  passes(false, `${attribute}格式不正确`)
})

Validator.registerAsync('idCardNo', function(value, req, attribute, passes) {
  if (value.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)) return passes()
  passes(false, `${attribute}格式不正确`)
})
export default Validator
