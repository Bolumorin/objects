// QUESTION 1

function InstagramPost(handleOfAuthor,content,imageLink,numberOfViews,numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

const post1 = new InstagramPost('bolu_morin', 'What a bright sunny day!' , 'https://www.instagram.com/p/CjK3gg4t6YI/?igshid=YmMyMTA2M2Y=' , '233 views' , '76 likes');

console.log(post1);

// QUESTION 2

const post2 = new InstagramPost ('bolu_morin', 'What can you see?' , 'https://www.instagram.com/p/CjK3gg4t6YI/?igshid=YmMyMTA2M2Y=' , '403 views' , '86 likes');

console.log(post2);

const post3 = new InstagramPost ('bolu_morin', 'Mi casa es su casa!' , 'https://www.instagram.com/p/CjK3gg4t6YI/?igshid=YmMyMTA2M2Y=' , '150 views' , '70 likes');

console.log(post3);

// QUESTION 3
function createPerson(name, age, location) {
    return{
        name:name,
        age:age,
        location : location,
    }
}
const Musa = createPerson ('Musa' , '19', 'Lekki,Lagos');

console.log(Musa);

// The b parts
 function createJambScores(eng,govt,lit,crk) {
    return{
        eng:eng,
        govt:govt,
        lit:lit,
        crk:crk,
    }
 }

 const MusaScore = createJambScores('70' ,'85', '82', '94');
 console.log(MusaScore);
 
Musa.JambScores = 'Eng:70, Govt:85 , Lit:82 , Crk:94 ';
console.log(Musa);

Object.assign(Musa , MusaScore);
console.log({Musa});