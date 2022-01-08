import { useState } from '#app'
interface DataItemType{
    id: string,
    pjt: string,
    name: string,
    order_num: string,
    tag: string,
    create_time: string,
    order_createtime_hidden:string,
    mobile_hidden: string
}
interface ResponseListType {
    errno: string,
    errmsg: string,
    consume: string,
    total: string,
    data: DataItemType[]
}
export default async ()  =>{
    const res = await useLazyAsyncData('allTag',()=>$fetch('/api/tags'))
    let allTags = null
    if(res?.data.value?.data){
        allTags = Object.values(res?.data.value?.data)
    }
    useState('tagList', () => allTags)
    return allTags
}
