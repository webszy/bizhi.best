import got from 'got'
import '@types/got'
import type { IncomingMessage, ServerResponse } from 'http'
import {URLSearchParams} from 'url'
const getQueryString = (search:string,key:string):string => {
    const urlSearch = new URLSearchParams(search)
    if(urlSearch.has(key)){
        return urlSearch.get(key)
    }
    return ''
}
export default async (req?: IncomingMessage, res?: ServerResponse)=>{
    const makeUrl = (cid:string,start:string):string => {
        const qs = new URLSearchParams(`c=WallPaper&a=getAppsByCategory`)
        qs.append('cid',cid)
        if(start!==''){
            qs.append('start',start)
        }
        return `http://wallpaper.apc.360.cn/index.php?${qs.toString()}`
    }
    const id:string = getQueryString(req.url,'id')
    if(id === '' || parseInt(id) < 1){
        return {
            code:400,
            msg:'wrong id'
        }
    }
    const page:string = getQueryString(req.url,'page')
    const url:string = makeUrl(id,page)
    const { body } = await got(url,{
        method: 'GET',
        responseType:'json',
        headers:{
            'Host': 'wallpaper.apc.360.cn',
            'Origin':'wallpaper.apc.360.cn'
        }
    })
    return body
}
