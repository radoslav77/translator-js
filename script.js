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



const TransBtn = document.getElementById('trtanslate')

TransBtn.addEventListener('click', ()=>{
    InputText(LeftInput.value)
})

function InputText (text){
    
    let textBx = []
    textBx.push(text)
    
    for(let i = 0; i < textBx.length; i++){
        console.log(textBx[i])
    }

    textBx.forEach(item =>{
        console.log(item)
    })
    console.log(textBx)
}