import {source} from './universalSettings.js'

export function getTableData(tableName){
    // return new Promise((resolve,reject)=>{
    //     resolve([{
    //         'id': 1,
    //         'name': 'portfolio website',
    //         'path': ''
    //     },{
    //         'id': 2,
    //         'name': 'display database content',
    //         'path': ''
    //     }])
    // })
    return fetch(source+`/retrieveData/getAllTableContents?tableName=${tableName}`).then(res=>{
        return res.json()
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        throw new Error("get table data: ",err.message)
    })
}

export function getDocumentation(project_id){
    // An array of objects, where each object represents a section, where each section has a title, image, subsections. Sub sections is an array of objects where each object has a title and a content. 
    return [
        {
            title: 'section 1',
            image: 'https://www.researchgate.net/publication/8662258/figure/fig1/AS:601600745816067@1520444203750/Network-interaction-map-Connections-leading-to-node-i-of-the-network-correspond-to.png',
            subsections: [
                {
                    title: 'sub section 1',
                    content: 'contenting for sub section 1'
                },
                {
                    title: 'sub section 2',
                    content: 'contenting for sub section 2'
                }
            ]
        },
        {
            title: 'section 2',
            image: 'data:image/jpeg;base64,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',
            subsections: [
                {
                    title: 'sub section 1',
                    content: 'contenting for sub section 1'
                },
                {
                    title: 'sub section 2',
                    content: 'contenting for sub section 2'
                }
            ]
        }
    ]
    return new Promise((resolve,reject)=>{
        fetch(source+`/getDocumentationData?project_id=${project_id}`).then(res=>{
            return res.json()
        })
        .then(res=>{
            return res
        })
        .catch(err=>{
            throw new Error("Get documentation: ",err.message)
        })
    })
}