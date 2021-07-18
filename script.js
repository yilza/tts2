function selectVoice: <select name="" id="voicelist"></select>
  <br><br>
  <input type="text" id="txtInput">
  <br><br>
  <button id="btnSpeak">Speak</button>
  <script>
    var voiceList = document.querySelector("#voiceList");
    var txtInput = document.querySelector("#txtInput");
    var btnSpeak = document.querySelector("#btnSpeak");

    var tts = window.speechSynthesis;
    var voices = [];

    getVoices();

    if(speechSynthesis !== undefined){
      speechSynthesis.onvoiceschanged = getVoices;
    }
    btnSpeak.addEventListener("click",()=>{
      var toSpeak new speechSynthesisUtterance(txtInput.value);
      var selectedVoiceName = voiceList.selectedOptions[0].getAttribute("data-name");
      voices.forEach((voice)=>{
        if (voice.name === selectedVoiceName){
          toSpeak.voice = voice
        }
      });
    });

    function getVoices(){
      voices = tts.getVoices();
      voiceList.innerHTML = "";
      voice.forEach((voice)=>{
        var listItem = document.createElement("option");
        listItem.textContent = voice.name;
        listItem.setAttribute("data-lang", voice.lang);
        listItem.setAttribute("data-name", voice.name);
        voiceList.appendChild(listItem);


      });

      voiceList.selectedIndex = 0;

    }
