/**
 * 根据身份证获取年龄，性别，出生日期
 * @param {*} data 
 * @returns 
 */
 export const getInfoBIidCard = (idCard)=> {
    let sex = 2;
    let sexlable=""
    let birth = '';
    let myDate = new Date();
    let month = myDate.getMonth() + 1;
    let day = myDate.getDate();
    let age = 0;

    if (idCard.length === 18) {
        age = myDate.getFullYear() - idCard.substring(6, 10) - 1;
        sex = idCard.substring(16, 17);
        birth = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
        let cardMonth=parseInt(idCard.substring(10, 12));
        let cardDay= parseInt(idCard.substring(12, 14));
        if ( cardMonth< month || (cardMonth=== month && cardDay <= day)){
            age++;
        } 
        

    }

    if (sex % 2 === 0){
        sex = 2;  
        sexlable="女"}
    else
        {sex = 1;
        sexlable="男"}
    return { age, sex, birth ,sexlable}
}