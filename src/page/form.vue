<template>
   <div class="form-page">
        <div class="form-box">
            <div class="form-head">
                报名须知
            </div>
            <div class="form-body">
                <div class="form-des">
                    <p class="text">1、会议收费：2200元人民币/人，院校师生可凭有效证件享受优惠价1800元人民币/人；</p>
                    <p class="text">2、参会费用包含场地费用、资料及物料费用、正餐费用、专家费用等；</p>
                    <p class="text">3、住宿统一安排，费用自理；</p>
                    <p class="text">4、会务费发票在报到时凭付款凭证领取；</p>
                    <p class="text">5、本次会议不接受空降，请提前报名。</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
                <div class="form-line"></div>
                <div class="form-submit">
                    <label for="isAgree">
                        <input type="checkbox" name="isAgree" id="isAgree" v-model="isOk">
                        我已同意并阅读以上协议
                    </label>
                </div>
                <div class="form-group-btn">
                    <div class="control-input submitisagree"><span class="btn-o-submit" @click="submit">提交</span></div>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
export default {
    data(){
        return {
            isOk:false
        }
    },
    methods:{
        submit(){
            let { isOk } = this;
            console.log(isOk)
            if(isOk){
                window.location = 'https://h5.eqxiu.com/ls/BuAd9EWV?eqrcode=1';
            }else {
                alert('请先同意以上协议！')
            }
        }
    }
}
</script>
<style lang="less">
    .form-page{
        width: 100%;
        height: 100%;
        padding-top: 20px;
        .form-box{
            width: 90%;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 0 auto;
            overflow: hidden;
            .form-head{
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                margin: 30px 0;
            }
            .form-body{
                position: relative;
                padding: 15px;
                .form-des{
                    .text{
                        font-size: 14px;
                    }
                }
                .form-line{
                    width: 70%;
                    height: 1px;
                    background-color: #ccc;
                    margin: 0 auto;
                }
                .form-submit{
                    margin-top: 15px;
                    font-size: 14px;
                }
                .form-group-btn{
                    margin-bottom: 15px;
                    .control-input{
                        .btn-o-submit{
                            width: 160px;
                            margin: 20px auto;
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            background: #00bff1;
                            color: #fff;
                            text-align: center;
                            font-size: 14px;
                            touch-action: manipulation;
                            border-radius: 4px;
                            line-height: 1.42857143;
                            padding: 6px 12px;
                        }
                    }
                }
            }
        }
    }
</style>

