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
    if (RightInput.value != ''){
        RightInput.value = ''
        location.reload()
    }else{
        RightInput.value = OutPutText
    }
    
})

function InputText (text){
   
    let textBx = []
    textBx.push(text)
    

    let OutPut = []

    textBx.forEach(item =>{
        //console.log(item)
        let WordsStr = item.split(/(\s+)/)
       
        
        WordsStr.forEach(entry => {
            //console.log(entry)
            let CharStr = entry.split('')
            CharStr.forEach(e => {
                //console.log(e)
                for (let key in dictNewLang){
                   // console.log(key, '=',dictNewLang[key])
                    if (e === ' '){
                        OutPut.push(' ')
                    }else if(e === key){
                            //console.log(e, '-', dictNewLang[key])
                            OutPut.push(dictNewLang[key])
                        }
                }


            })
            
            //console.log(OutPutText)
             //console.log(CharStr)
        })
    })
    OutPutText.push(OutPut.join(''))
    InputNewLangText(LeftInput.value)
}

const SwitchBtn = document.getElementById('switch')

SwitchBtn.addEventListener('click', ()=> {
    let rightValue = RightInput.value
    let leftValue = LeftInput.value


    RightInput.value =  leftValue
    LeftInput.value = rightValue
    //console.log(LeftInput.value ,'-', RightInput.value)
})

// need to work on it as to the spliting procces
function InputNewLangText(input){
    let textBx = []
    let VarCharThree = []
    let Arr = []

    textBx.push(input)
    //console.log(textBx)

//console.log(VarCharThree)

    textBx.forEach(item =>{
        let wordSTring = item.split(/(\s+)/)
        
        wordSTring.forEach((el, index)=>{
            let ThreeChar = el.split('')
            //console.log(ThreeChar, '-', index)
                
            ThreeChar.forEach((lettetr, idx)=>{
                let NewArr = Array.from(lettetr)
                Arr.push(lettetr)
                
            })
        })
        
    })
    for (let i = 0; i < Arr.length; i += 3){
    
    let resultArr = Arr.slice(i, i + 3)
        VarCharThree.push(resultArr)
   }

   console.log(VarCharThree)
}

