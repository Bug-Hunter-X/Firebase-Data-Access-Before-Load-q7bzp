```javascript
//Incorrect (will often return undefined)
db.collection('myCollection').doc('myDoc').get().then((doc)=>{ 
  console.log(doc.data().myField); //error here, myField may not exist yet
});

//Correct using .then()
db.collection('myCollection').doc('myDoc').get().then((doc)=>{ 
  if (doc.exists) { 
    console.log(doc.data().myField); //Now safe to access
  } else {
    console.log('Document does not exist!'); 
  }
});

//Correct using async/await
async function getData(){
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if(doc.exists){
    console.log(doc.data().myField);
  } else {
    console.log('Document does not exist!');
  }
}
 getData();
```