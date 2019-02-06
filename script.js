const selectGirl = document.querySelector('.girl');
const selectBoy = document.querySelector('.boy');
const question = document.querySelector("h1");
const section = document.querySelector('section');

const commonGirlNames = ["Ada", "Agata", "Agnieszka", "Aleksandra", "Alina", "Aneta", "Anita", "Anna", "Antonina", "Apolonia", "Balbina", "Barbara", "Beata", "Bianka", "Bogumiła", "Bogusława", "Dagmara", "Danuta", "Daria", "Dominika", "Dorota", "Edyta", "Elżbieta", "Ewa", "Ewelina", "Gabriela", "Helena", "Ida", "Irena", "Iwona", "Izabela", "Jadwiga", "Jagoda", "Joanna", "Jolanta", "Jowita", "Judyta", "Julia", "Justyna", "Kaja", "Kamila", "Karolina", "Katarzyna", "Kinga", "Klara", "Klaudia", "Kornelia", "Krystyna"];
const foreignGirlNames = ["Alana", "Alice", "Aisha", "Andrea", "Aya", "Cameron", "Carla", "Carmen", "Chiara", "Daisy", "Ellen", "Emily", "Emma", "Grace", "Hannah", "Isabelle", "Janette", "Jessica", "Leah", "Josephine", "Kayla", "Lea", "Lilly", "Marica", "Maya", "Mary", "Megan", "Mia"];
const crazyGirlNames = ["Warwara", "Sandecja", "Zenobia", "Lukrecja", "Apostazja", "Bibianna", "Kataleja", "Kunegunda", "Scholastyka", "Eufrozyna", "Genowefa", "Mścisława", "Hermenegilda", "Hildegarda", "Channel", "Zara", "Pamela", "Edeldreda", "Modesta", "Perpetua", ];
const commonBoyNames = ["Adam", "Jacek", "Aleksander", "Andrzej", "Artur", "Antoni", "Bartłomiej"];
const foreignBoyNames = ["Brian", "Aaron", "Colin", "Kevin", "Nicolas", "Ryan"];
const crazyBoyNames = ["Polikarp", "Żyraf", "Kwadrat"];

function sleep(time) {
 return new Promise((resolve) => setTimeout(resolve, time));
}

const girlNameGenerator = (s) => {
 question.textContent = "Kliknij przycisk i wylosuj idealne imię!";
 section.innerHTML = "<button>Losuj imię</button><p class='description'></p>";
 section.style.flexDirection = "column";
 const p = document.querySelector('.description');
 if (s === "common") {
  $('button').on('click', function () {
   p.textContent = `${commonGirlNames[Math.floor(Math.random() * commonGirlNames.length)]}`;
  })

 } else if (s === "foreign") {
  $('button').on('click', function () {
   p.textContent = `${foreignGirlNames[Math.floor(Math.random() * foreignGirlNames.length)]}`;
  })
 } else if (s === "crazy") {
  $('button').on('click', function () {
   p.textContent = `${crazyGirlNames[Math.floor(Math.random() * crazyGirlNames.length)]}`;
  })
 }
}

const boyNameGenerator = (s) => {
 question.textContent = "Kliknij przycisk i wylosuj idealne imię!";
 section.innerHTML = "<button>Losuj imię</button><p class='description'></p>";
 section.style.flexDirection = "column";
 const p = document.querySelector('.description');
 if (s === "common") {
  $('button').on('click', function () {
   p.textContent = `${commonBoyNames[Math.floor(Math.random() * commonBoyNames.length)]}`;
  })

 } else if (s === "foreign") {
  $('button').on('click', function () {
   p.textContent = `${foreignBoyNames[Math.floor(Math.random() * foreignBoyNames.length)]}`;
  })
 } else if (s === "crazy") {
  $('button').on('click', function () {
   p.textContent = `${crazyBoyNames[Math.floor(Math.random() * crazyBoyNames.length)]}`;
  })
 }
}


selectGirl.addEventListener('click', () => {
 section.style.animation = "smooth 3s linear";
 question.style.animation = "smooth 3s linear";
 sleep(1500).then(() => {
  question.textContent = "Na czym najbardziej Ci zależy?";
  section.innerHTML = "<div class='option common'><div></div><p>Chcę nadać zwykłe imię</p></div><div class='option foreign'><div></div><p>Chcę modne, zgraniczne imię</p></div><div class='option crazy'><div></div><p>Chcę żeby śmiali się z niej w szkole</p></div>";
  document.body.style.backgroundColor = "pink";
  const common = document.querySelector('.common');
  const foreign = document.querySelector('.foreign');
  const crazy = document.querySelector('.crazy');
  section.style.animation = "none";
  question.style.animation = "none";
  common.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    girlNameGenerator('common')
   });
  })
  foreign.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    girlNameGenerator('foreign')
   });
  })
  crazy.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    girlNameGenerator('crazy')
   });
  })
 })
})



selectBoy.addEventListener('click', () => {
 section.style.animation = "smooth 3s linear";
 question.style.animation = "smooth 3s linear";
 sleep(1500).then(() => {
  question.textContent = "Na czym najbardziej Ci zależy?";
  section.innerHTML = "<div class='option common'><div></div><p>Chcę nadać zwykłe imię</p></div><div class='option foreign'><div></div><p>Chcę modne, zgraniczne imię</p></div><div class='option crazy'><div></div><p>Chcę żeby śmiali się z niego w szkole</p></div>";
  document.body.style.backgroundColor = "rgb(179, 255, 255)";
  const common = document.querySelector('.common');
  const foreign = document.querySelector('.foreign');
  const crazy = document.querySelector('.crazy');
  section.style.animation = "none";
  question.style.animation = "none";
  common.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    boyNameGenerator('common')
   })
  })
  foreign.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    boyNameGenerator('foreign')
   })
  })
  crazy.addEventListener('click', () => {
   section.style.animation = "smooth 3s linear";
   question.style.animation = "smooth 3s linear";
   sleep(1500).then(() => {
    boyNameGenerator('crazy')
   })
  })
 })
})