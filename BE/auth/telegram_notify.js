const config = require('../config');
const Helper = require("../helpers");

const fileSys = config.PATH_SYS_CONFIG
const dataSys = Helper.getConfig(fileSys);

const TELEGRAM_NAP_ID = dataSys.TELEGRAM_NAP_ID;
const TELEGRAM_RUT_ID = dataSys.TELEGRAM_RUT_ID;
const TELEGRAM_BET_ID = dataSys.TELEGRAM_BET_ID;
const TELEGRAM_BET_AMOUNT = dataSys.TELEGRAM_BET_AMOUNT;
const TELEGRAM_BET_THONG_BAO = dataSys.TELEGRAM_BET_THONG_BAO;
const TELEGRAM_BET_PHIM_LENH = dataSys.TELEGRAM_BET_PHIM_LENH;

module.exports = {

    sendMessBOTTrade: (content = '') => {
    
        if(content == '' || content == null) return
    
        global['ARESTele'].sendMessage(`@${TELEGRAM_BET_PHIM_LENH}`, content, {parse_mode : "HTML"})
    },
	
	sendMessThongBao: (content = '') => {
    
        if(content == '' || content == null) return
    
        global['ARESTele'].sendMessage(`@${TELEGRAM_BET_THONG_BAO}`, content, {parse_mode : "HTML"})
    },

    sendMessBetAmount: (content = '') => {
    
        if(content == '' || content == null) return
        global['ARESTele'].sendMessage(`@${TELEGRAM_BET_AMOUNT}`, content, {parse_mode : "HTML"})
    },

    sendMessBet: (content = '') => {
    
        if(content == '' || content == null) return
    
        global['ARESTele'].sendMessage(`@${TELEGRAM_BET_ID}`, content, {parse_mode : "HTML"})
    },

    sendMessNap: (content = '') => {
    
        if(content == '' || content == null) return
    
        global['ARESTele'].sendMessage(`@${TELEGRAM_NAP_ID}`, content, {parse_mode : "HTML"})
    },

    sendMessRut: (content = '') => {
    
        if(content == '' || content == null) return
    
        global['ARESTele'].sendMessage(`@${TELEGRAM_RUT_ID}`, content, {parse_mode : "HTML"})
    },
    
    sendImage: (linkImage = '', content = '') => {
    
    
        if(linkImage != '' && content == ''){
    
            global['ARESTele'].sendPhoto(`@${TELEGRAM_RUT_ID}`,linkImage )
    
        }else if(linkImage != '' && content != ''){
    
            global['ARESTele'].sendPhoto(`@${TELEGRAM_RUT_ID}`,linkImage, {caption : content, parse_mode : "HTML"} )
        
        }
    
    }
}