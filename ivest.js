let init = 480000
let mult = 0.08
let result = 0
let inter = 0

for (let i = 0; i <= 20; i++) {
    inter = init*mult
    result = init + inter
    init = result
    
}

console.log(result)