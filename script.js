let myName = "Onke Nyathela";
const myProjects = [
  "Portfolio Template",
  "Bongie Gcwabe",
  "The Blog",
  "Ellen Rose",
];
const myMainBio = [
  "My name is Onke Nyathela, I am currently based in Johannesburg and willing to relocate. I am 26 years old, born and bred in Dutywa, in the Eastern Cape. \n\n I went to the University Currently known as Rhodes University and studied Computer Sciences.\n",
  "Upon my arrival at Rhodes, I had no understanding, nor knowledge of programming. However, the first time I started coding, it was love at first sight and I knew that I did not want to be an Astrophysicist anymore, but a Software Developer. It is for this reason that even when I couldn't finish my degree due to financial difficulties, I continued writing code and learning new things on my own, using resources from the internet.\n",
  "I have taught myself the basics of Java, JavaScript, and C++. In addition to the C#, C, and F# languages that I learned during my time at university. I am currently learning front-end development. My current portfolio only consists of the front-end of a website and I am hoping for the opportunity to further my front-end skills and practice my back-end skills through this learnership opportunity",
];
const myFooterBio =
  "My name is Onke Nyathela, I am currently based in Johannesburg and willing to relocate. I am 26 years old, born and bred in Dutywa, in the Eastern Cape. I went to the University Currently known as Rhodes University and studied Computer Sciences. Due to difficulties I couldn't finish my studies. However, my love for programming remained and it is for this reason I am currently a freelance web developer.";

document.getElementById("footerBio").innerHTML =
  "<br>" + myFooterBio + "<br> <br> <br>";
document.getElementById("myName").innerHTML = myName;
for (let i = 0; i < myMainBio.length; i++) {
  document.getElementById("aboutBio").innerHTML += myMainBio[i] + "<br><br>";
}
function formSubmitted() {
  window.alert('Your form has been submitted. \n Thank You.');
}
