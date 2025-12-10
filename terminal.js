const out = document.getElementById("output");
const input = document.getElementById("cmdInput");

function line(t){
  const d=document.createElement("div");
  d.textContent=t;
  out.appendChild(d);
  out.scrollTop=out.scrollHeight;
}

function waitLines(arr,i=0){
  if(i<arr.length){
    line(arr[i]);
    setTimeout(()=>waitLines(arr,i+1),700);
  }
}

line("APRIL FOOLS TERMINAL LOADED");
line("Commands: !hack, !full, !CMDprompt, !trackIP, !webcam, !bank, !token");

input.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const c=input.value.trim();
    input.value="";
    line("> "+c);

    if(c.startsWith("!hack")){
      alert("You have been got hacked hehe. APRIL FOOLS LOL");
    }

    else if(c.startsWith("!full")){
      alert(c.slice(6)+" — You have been got hacked hehe. APRIL FOOLS LOL");
    }

    else if(c==="!CMDprompt"){
      window.open("cmd.html","_blank");
    }

    else if(c==="!trackIP"){
      waitLines([
        "Locating IP...",
        "Tracking route...",
        "Found Location: 127.0.0.1",
        "APRIL FOOLS 😈"
      ]);
    }

    else if(c==="!webcam"){
      waitLines([
        "Accessing webcam...",
        "Bypassing permissions...",
        "Stream unlocked...",
        "APRIL FOOLS 😂"
      ]);
    }

    else if(c==="!bank"){
      waitLines([
        "Connecting to bank server...",
        "Cracking vault...",
        "Transferring $9,999,999...",
        "APRIL FOOLS 😭"
      ]);
    }

    else if(c==="!token"){
      waitLines([
        "Scanning browser...",
        "Extracting Discord token...",
        "Uploading token...",
        "APRIL FOOLS 😈"
      ]);
    }

    else{
      line("Unknown command.");
    }
  }
});
