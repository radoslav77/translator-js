let dictNewLang = {
	'a': 'gre',	'b': 'rth',
	'c': 'jpv',	'd': 'fgw',
    'e': 'xqd','f': 'olp',
    'g': 'ipq','h': 'hly',
    'i': 'qbs','j': 'tcm',
    'k': 'qux','l': 'ugi',
    'm': 'kyxp',/*!!!!!!!*/
    'n': 'wwj','o': 'cuv',
    'p': 'nqk','r': 'wxh',
    's': 'jtd','t': 'qis',
    'u': 'itx','v': 'qpz',
    'w': 'igx','x': 'fwj',
    'y': 'gxig',/*!!!!!!!*/   
    'z': 'sxn',   
}

const LeftInput = document.getElementById('textleft')
const RightInput = document.getElementById('textright')
 let OutPutText = []


const TransBtn = document.getElementById('trtanslate')

TransBtn.addEventListener('click', ()=>{
    InputText(LeftInput.value)
    RightInput.value = OutPutText
})

function InputText (text){
   
    let textBx = []
    textBx.push(text)
    
    for(let i = 0; i < textBx.length; i++){
        //console.log(textBx[i])
    }

    let OutPut = []

    textBx.forEach(item =>{
        //console.log(item)
        let WordsStr = item.split(/(\s+)/)
       
        
        WordsStr.forEach(entry => {
             //console.log(entry)
            let CharStr = entry.split('')
            CharStr.forEach(e => {
                for (let key in dictNewLang){
                   // console.log(key, '=',dictNewLang[key])
                    if (e === key){
                        console.log(e, '-', dictNewLang[key])
                        OutPut.push(dictNewLang[key])
                    }
                }


            })
            
            //console.log(OutPutText)
             //console.log(CharStr)
        })
    })
    OutPutText.push(OutPut.join(''))

}
