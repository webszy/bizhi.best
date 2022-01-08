import got from 'got'
import '@types/got'
import type { IncomingMessage, ServerResponse } from 'http'

export default async (req?: IncomingMessage, res?: ServerResponse)=>{
    const url = 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAllCategories'
    const {body} = await got(url,{
        method: 'GET',
        responseType:'json',
        headers:{
            'Host': 'wallpaper.apc.360.cn',
            'Origin':'wallpaper.apc.360.cn'
        }
    })
    return body
}
