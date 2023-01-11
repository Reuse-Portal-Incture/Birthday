import logo from "./logo.svg";
import "./App.css";
import { useState , useEffect, useRef} from "react";

function App() {
  const [cls, setCls] = useState("default");
  const [isActive, setActive] = useState("false");
  const [index, setIndex] = useState(0);
  const [element, setElement] = useState("Happy Birthdayyyyy");
  const buttonRef= useRef();

  useEffect(() => {
    shuffle(arr);
  },index);

  var arr = [
    "In the train when we were going to hirakut dam, I was very sleepy and kept sleeping the whole way on your shoulders and u kept adjusting my head the whole time🥹🥹",
     "Was busy shifting so understood that i won't be able to answer for long hours and still sent cute msgs🥺🥺",
    "When in 2021 u came for gate and we met offline after one year, u waited almost an hour for me coz I was not finding way and still u didn't complain even once.",
    "Multiple time this has happened that u had to wait so much for me and u never say anything🥺🥺",
    "My favourite is when we were talking in 2020 and I said what if I become the shortest in Ur family becoz aunty is so tall and u said ki na na Mon khudi Ra height bhi ete nahn...That was so cute🤭🤭",
    "While drinking tea with Arman Akansha outside janta gate, when u said govt office ke wife home chai nahn piyegi toh Kaisa lagega...I FUCKING MELTED...AND STILL MELTING after so many months also🤭",
    "In our unofficial sovinier when we were at the backpost eating burger and pasta, I was very tired of walking in heels and u buckled my heels for me Infront of everyone That was EXTREMELY CUTEEEE😽😽😽",
    "Remember our first kiss at naraj?  I still remember the sound🤭",
    "Whenever I will have mood swing and won't want to eat anything, u bought me cornflakes and milk🤣",
    "When in your last bday I gave u Kamasutra book as gift and u said u won't be able to take it home and I got upset, so u sat down on Ur knees and manaya mujhe ache se...I just really really loved that🤭🤭 ",
    "When during lockdown, whenever ur parents will go out and u will be alone, u always called me. Even for a very short time, but I PURA PURA LOVED IT. It felt really nice😝..Keep doing it😜",
    "I was pleasantly surprised when u said to golgappa wala that u also eat spicy😜😜😘😘 ",
    "Thank you so much for the Ambagan cycle trip and bike trip to vedvyas. Me loved loved loved ittttt🤭🤭🤭",
    "While going to vedvyas on bike, whenever I hugged u from back, u kept Ur left hand on mine. It was THE BESTTTT😝😝😝",
    "Whenever I complain about anything, ANYTHING, u would do something about it IMMEDIATELY. If I told u not giving me enough time, U have always called me in evening that day only. 🥹🥹🥹🥹🥹♥️♥️♥️",
    "When I told u I want a zoo with all these animals..u were like yeahh ..sureee🤣🤣..That was very very very sweet😘😘😘😘",
    "That night while coming back to hostel after watching kgf2 u helped me by carrying my purse. That was HAWTTTTT😝😝😝😝😝",
    "After first lockdown, when we met at nit, u came to meet me and hugged me even when I just came from train. That was so so so sweet😝😝😝",
    "The way when we were sitting near that park in nit and u picked me and put me in your lap...SO FUCKING HAWWTTT😝😝😝💋💋💋💋 ",
    "Uss din kgf2 dekhke wapas as rahe the Raat ko.. I was walking in front with Rohan suvranshu..u were coming in back with Arman Akansha and all..Suddenly ek car piche se aa Raha tha..u just came from behind and started walking beside me..That was soooooo SOOOOOOO HOTTTTT and SWEEETTTTT🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹🥹",
    "That day when we met for the first time in 2021 in Naraj, when we alwere coming back and those stairs were HUGEEE..while I was climbing, u were hovering ur hands around me..That was very very HOTT💋💋💋🔥🔥🔥",
    "Then there is CEST farewell night, how can I ever ever forget that. That dance is my forever forever favourite. Like wo thought that U will be able to so freely propose and dance with rose in mouth!!!!!!!!!!!!!!!!!!!!!!!!! BEST BESTEST NIGHT EVERRRRR"

  ];
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
        
  }
  function nextElement(){
    var i= index+1;
    if(i===arr.length){
      i=0;
    }
    setIndex(i);
    setElement(arr[i]);
  }

  function handleClick(e) {
    buttonRef.current.classList.remove("transform");
    setTimeout(()=> {
      buttonRef.current.classList.add("transform");
      nextElement();
    },500);
   
  }

  return (
    <div className="App">
      <div className="inactive" ref={buttonRef}>
        <div className="paper-content">
          <p >
            {element}
          </p>
          
        </div>
      </div>
      <input
        type="button"
        id="button"
        onClick={handleClick}
        value="Click Me"
        className="button-33"
      ></input>
    </div>
  );
}

export default App;
