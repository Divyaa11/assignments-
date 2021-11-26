let Person = [
    {
        'firstName': 'Atul',
        'lastName': 'Srivastav',
        'Home-Address': 'Mirganj'
    },
    {
        'firstName': 'Mithilesh',
        'lastName': 'Tiwari',
        'Home-Address': 'Mairwa'
    },
    {
        'firstName': 'Shailendra',
        'lastName': 'Mishra',
        'Home-Address': 'Patna'
    },
    {
        'firstName': 'Brahma',
        'lastName': 'Mishra',
        'Home-Address': 'Hathua'
    }
]
for(let i=0;i<Person.length;i++){
    let val=Person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}