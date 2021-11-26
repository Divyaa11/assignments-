let Person = [
    {
        'firstName': 'Atul',
        'lastName': 'Srivastav',
        'Office-Address': 'Mirganj'
    },
    {
        'firstName': 'Mithilesh',
        'lastName': 'Tiwari',
        'Office-Address': 'Mairwa'
    },
    {
        'firstName': 'Shailendra',
        'lastName': 'Mishra',
        'Office-Address': 'Patna'
    },
    {
        'firstName': 'Brahma',
        'lastName': 'Mishra',
        'Office-Address': 'Hathua'
    }
]
for(let i=0;i<Person.length;i++){
    let val=Person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}