function findChairs(chairsArray,requirdChairCount){
 let countAns = 0;
 let chairs = []
 if(!requirdChairCount){
    return 1
 }
 let i=0;
while(i<chairsArray.length){
   let count = chairsArray[i][1] -chairsArray[i][0].length
   chairs.push(count)
   countAns+=count;
    if(countAns>=requirdChairCount){
        return  chairs
    }
    i++
}
 if(countAns<requirdChairCount){
    return 0;
 }

}
const chairs = [['xxx',3],['xxxxx',6],['xxxxxx',9],['xxx',2]];
const requirdChair = 4;
const ans = findChairs(chairs,requirdChair)
console.log(ans)